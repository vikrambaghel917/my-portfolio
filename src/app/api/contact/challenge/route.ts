import { createCaptchaChallenge } from "@/server/contact-captcha";

export const runtime = "nodejs";

export async function GET() {
  return Response.json(createCaptchaChallenge(), {
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
