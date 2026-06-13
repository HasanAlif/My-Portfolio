"use client";

import Container from "@/Components/layout/Container";
import SocialLinks from "@/Components/layout/SocialLinks";
import Button from "@/Components/ui/Button";
import GlassCard from "@/Components/ui/GlassCard";
import Input from "@/Components/ui/Input";
import Reveal from "@/Components/ui/Reveal";
import SectionHeading from "@/Components/ui/SectionHeading";
import Textarea from "@/Components/ui/Textarea";
import { mailIcon, mapIcon, tabletIcon } from "@/asserts/icons/Icons";
import { profile } from "@/data/profile";
import { sendViaWeb3Forms } from "@/lib/web3forms";
import { useState } from "react";
import toast from "react-hot-toast";

const initialForm = {
  name: "",
  contactNumber: "",
  email: "",
  subject: "",
  message: "",
  botcheck: "",
};

const contactInfo = [
  {
    icon: mailIcon,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: tabletIcon,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
  },
  {
    icon: mapIcon,
    label: "Location",
    value: profile.location,
    href: undefined,
  },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const setField = (key: keyof typeof initialForm, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      await sendViaWeb3Forms({
        subject: `Portfolio contact: ${form.subject}`,
        name: form.name,
        email: form.email,
        replyto: form.email,
        phone: form.contactNumber,
        message: form.message,
        from_name: "Portfolio Contact Form",
        botcheck: form.botcheck,
      });
      toast.success("Your message has been sent!");
      setForm(initialForm);
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something <span className="text-gradient">great</span>
            </>
          }
          subtitle="Have a project or a backend challenge? I'm available for freelance and full-time work."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info */}
          <Reveal className="space-y-4">
            {contactInfo.map((item) => (
              <GlassCard
                key={item.label}
                className="flex items-center gap-4 p-5"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-violet-500/15 text-primary [&_svg]:h-5 [&_svg]:w-5">
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="block truncate font-medium text-slate-800 transition-colors hover:text-primary dark:text-slate-100"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-slate-800 dark:text-slate-100">
                      {item.value}
                    </p>
                  )}
                </div>
              </GlassCard>
            ))}

            <div className="pt-2">
              <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
                Or find me on
              </p>
              <SocialLinks />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <GlassCard className="p-6 sm:p-8">
              <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
                {/* Honeypot: hidden from humans, catches bots */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                  checked={!!form.botcheck}
                  onChange={(e) =>
                    setField("botcheck", e.target.checked ? "true" : "")
                  }
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    label="Name"
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={(v) => setField("name", v)}
                  />
                  <Input
                    label="Contact Number"
                    id="contact-number"
                    name="contactNumber"
                    value={form.contactNumber}
                    onChange={(v) => setField("contactNumber", v)}
                  />
                </div>
                <Input
                  label="Email"
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setField("email", v)}
                />
                <Input
                  label="Subject"
                  id="contact-subject"
                  name="subject"
                  value={form.subject}
                  onChange={(v) => setField("subject", v)}
                />
                <Textarea
                  label="Message"
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={(v) => setField("message", v)}
                />
                <Button type="submit" loading={loading} className="w-full">
                  Send Message
                </Button>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
