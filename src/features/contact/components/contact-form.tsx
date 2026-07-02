"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2Icon, Loader2Icon, RefreshCwIcon, ShieldCheckIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { FormField } from "@/components/common/form-field";
import { CONTACT_DEFAULT_VALUES } from "@/constants/contact";
import { useContactMutation } from "@/hooks/mutations/use-contact-mutation";
import { contactSchema } from "@/schemas/contact-schema";
import { getContactCaptchaChallenge } from "@/services/portfolio-service";
import type { ContactCaptchaChallenge, ContactFormValues } from "@/types/portfolio";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";

type ContactFormProps = {
  initialCaptcha: ContactCaptchaChallenge;
};

export function ContactForm({ initialCaptcha }: ContactFormProps) {
  const mutation = useContactMutation();
  const [captcha, setCaptcha] = useState<ContactCaptchaChallenge | null>(initialCaptcha);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const [isCaptchaLoading, setIsCaptchaLoading] = useState(false);
  const [website, setWebsite] = useState("");
  const [startedAt, setStartedAt] = useState(initialCaptcha.issuedAt);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: CONTACT_DEFAULT_VALUES,
    mode: "onChange",
  });

  const loadCaptcha = async () => {
    setIsCaptchaLoading(true);
    setCaptchaError(null);

    try {
      const nextCaptcha = await getContactCaptchaChallenge();
      setCaptcha(nextCaptcha);
      setStartedAt(nextCaptcha.issuedAt);
      form.setValue("captchaAnswer", "", {
        shouldDirty: false,
        shouldTouch: false,
        shouldValidate: false,
      });
    } catch (error) {
      setCaptcha(null);
      setCaptchaError(
        error instanceof Error ? error.message : "Captcha could not be loaded. Refresh and try again."
      );
    } finally {
      setIsCaptchaLoading(false);
    }
  };

  const onSubmit = form.handleSubmit(async (values) => {
    if (!captcha) {
      toast.error("Captcha could not be loaded. Refresh and try again.");
      return null;
    }

    const response = await mutation.mutateAsync({
      ...values,
      captchaToken: captcha.token,
      website,
      startedAt,
    });

    toast.success("Message sent. I will reply with next steps shortly.");
    form.reset(CONTACT_DEFAULT_VALUES);
    setWebsite("");
    form.setFocus("name");
    await loadCaptcha();
    return response;
  });

  return (
    <Card className="surface">
      <CardContent className="grid gap-6 p-5 sm:p-8">
        {mutation.isSuccess ? (
          <div className="rounded-2xl border border-primary/20 bg-primary/8 p-4 text-sm text-foreground">
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2Icon className="size-4 text-primary" />
              Inquiry submitted successfully
            </div>
            <p className="mt-2 text-muted-foreground">
              Reference ID: <span className="font-mono">{mutation.data?.requestId}</span>
            </p>
          </div>
        ) : null}

        <form className="grid gap-5" onSubmit={onSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <FormField
              id="name"
              label="Name"
              error={form.formState.errors.name?.message}
            >
              <Input id="name" {...form.register("name")} className="h-11 rounded-2xl" />
            </FormField>
            <FormField
              id="email"
              label="Email"
              error={form.formState.errors.email?.message}
            >
              <Input id="email" {...form.register("email")} className="h-11 rounded-2xl" />
            </FormField>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <FormField
              id="company"
              label="Company"
              error={form.formState.errors.company?.message}
            >
              <Input id="company" {...form.register("company")} className="h-11 rounded-2xl" />
            </FormField>
            <FormField
              id="phone"
              label="Phone number"
              error={form.formState.errors.phone?.message}
              hint="Include country code if you expect an international call or WhatsApp message."
            >
              <Input
                id="phone"
                type="tel"
                {...form.register("phone")}
                className="h-11 rounded-2xl"
              />
            </FormField>
          </div>

          <FormField
            id="description"
            label="Description"
            error={form.formState.errors.description?.message}
            hint="Include the product scope, timeline, business goal, or the work you want delivered."
          >
            <Textarea
              id="description"
              {...form.register("description")}
              rows={6}
              className="rounded-2xl"
            />
          </FormField>

          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <Input
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
            />
          </div>

          <FormField
            id="captchaAnswer"
            label="Security check"
            error={form.formState.errors.captchaAnswer?.message ?? captchaError ?? undefined}
            hint={
              captcha
                ? "Solve the custom captcha to block automated spam submissions."
                : "Load the captcha before sending the form."
            }
          >
            <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <div className="rounded-2xl border border-primary/16 bg-primary/8 px-4 py-3 text-sm font-semibold text-foreground">
                <div className="flex items-center gap-2 text-primary">
                  <ShieldCheckIcon className="size-4" />
                  {isCaptchaLoading ? "Loading challenge..." : captcha?.prompt ?? "Captcha unavailable"}
                </div>
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={() => void loadCaptcha()}
                disabled={isCaptchaLoading}
                className="h-11 rounded-2xl"
              >
                <RefreshCwIcon className={isCaptchaLoading ? "animate-spin" : undefined} />
                Refresh
              </Button>
            </div>
            <Input
              id="captchaAnswer"
              inputMode="numeric"
              {...form.register("captchaAnswer")}
              className="h-11 rounded-2xl"
              placeholder="Enter the answer"
            />
          </FormField>

          {mutation.isError ? (
            <div className="rounded-2xl border border-destructive/20 bg-destructive/8 p-4 text-sm text-destructive">
              {mutation.error?.message}
            </div>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Response within 2 business days</Badge>
              <Badge variant="secondary">Frontend and React Native roles</Badge>
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={!form.formState.isValid || mutation.isPending || isCaptchaLoading || !captcha}
            >
              {mutation.isPending ? (
                <>
                  <Loader2Icon className="animate-spin" />
                  Sending
                </>
              ) : (
                "Send inquiry"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
