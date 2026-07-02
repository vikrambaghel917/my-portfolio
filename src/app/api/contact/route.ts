import { headers } from "next/headers";
import { contactSubmissionSchema } from "@/schemas/contact-schema";
import { verifyCaptchaAnswer } from "@/server/contact-captcha";
import { sendContactEmail } from "@/server/contact-mailer";

const MIN_SUBMIT_DELAY_MS = 3000;

function getRequestId() {
  return `req_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function getClientIpAddress(requestHeaders: Headers) {
  const forwardedFor = requestHeaders.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }

  return requestHeaders.get("x-real-ip") ?? "unknown";
}

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSubmissionSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        {
          error: parsed.error.issues[0]?.message ?? "Invalid contact submission.",
        },
        { status: 400 }
      );
    }

    const { captchaAnswer, captchaToken, website, startedAt, ...contact } = parsed.data;
    const now = Date.now();

    if (website) {
      return Response.json({
        requestId: getRequestId(),
        submittedAt: new Date(now).toISOString(),
      });
    }

    if (now - startedAt < MIN_SUBMIT_DELAY_MS) {
      return Response.json(
        {
          error: "Submission blocked. Please take a moment and try again.",
        },
        { status: 429 }
      );
    }

    const captchaResult = verifyCaptchaAnswer(captchaToken, captchaAnswer);

    if (!captchaResult.valid) {
      return Response.json(
        {
          error: captchaResult.error,
        },
        { status: 400 }
      );
    }

    const requestHeaders = await headers();
    const requestId = getRequestId();
    const submittedAt = new Date(now).toISOString();

    await sendContactEmail({
      ...contact,
      requestId,
      submittedAt,
      ipAddress: getClientIpAddress(requestHeaders),
      userAgent: requestHeaders.get("user-agent") ?? "unknown",
    });

    return Response.json({
      requestId,
      submittedAt,
    });
  } catch (error) {
    const message =
      error instanceof Error && error.message === "SMTP is not configured."
        ? "Contact email is not configured yet. Add SMTP credentials and retry."
        : "Message delivery failed. Retry in a moment.";

    return Response.json(
      {
        error: message,
      },
      { status: 500 }
    );
  }
}
