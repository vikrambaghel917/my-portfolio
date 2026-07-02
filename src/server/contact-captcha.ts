import { createHmac, randomInt, timingSafeEqual } from "node:crypto";

const CAPTCHA_TTL_MS = 10 * 60 * 1000;

type CaptchaTokenPayload = {
  answer: string;
  exp: number;
};

function getCaptchaSecret() {
  const secret = process.env.CONTACT_CAPTCHA_SECRET;

  if (!secret) {
    return "portfolio-contact-captcha-fallback-secret";
  }

  return secret;
}

function signTokenPayload(payload: string) {
  return createHmac("sha256", getCaptchaSecret()).update(payload).digest("hex");
}

function encodeToken(data: CaptchaTokenPayload) {
  const payload = Buffer.from(JSON.stringify(data)).toString("base64url");
  const signature = signTokenPayload(payload);

  return `${payload}.${signature}`;
}

function parseToken(token: string): CaptchaTokenPayload | null {
  const [payload, signature] = token.split(".");

  if (!payload || !signature) {
    return null;
  }

  const expectedSignature = signTokenPayload(payload);
  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSignature);

  if (
    signatureBuffer.length !== expectedBuffer.length ||
    !timingSafeEqual(signatureBuffer, expectedBuffer)
  ) {
    return null;
  }

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as
      | CaptchaTokenPayload
      | undefined;

    if (!parsed?.answer || !parsed?.exp) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function createCaptchaChallenge() {
  const left = randomInt(2, 10);
  const right = randomInt(1, 10);
  const useAddition = randomInt(0, 2) === 0;
  const prompt = useAddition
    ? `What is ${left} + ${right}?`
    : `What is ${left + right} - ${right}?`;
  const answer = useAddition ? String(left + right) : String(left);
  const issuedAt = Date.now();
  const expiresAt = issuedAt + CAPTCHA_TTL_MS;

  return {
    prompt,
    token: encodeToken({
      answer,
      exp: expiresAt,
    }),
    issuedAt,
    expiresAt: new Date(expiresAt).toISOString(),
  };
}

export function verifyCaptchaAnswer(token: string, answer: string) {
  const parsed = parseToken(token);

  if (!parsed) {
    return {
      valid: false,
      error: "Captcha verification failed. Refresh and try again.",
    } as const;
  }

  if (parsed.exp < Date.now()) {
    return {
      valid: false,
      error: "Captcha expired. Refresh and try again.",
    } as const;
  }

  if (parsed.answer !== answer.trim()) {
    return {
      valid: false,
      error: "Captcha answer is incorrect.",
    } as const;
  }

  return { valid: true } as const;
}
