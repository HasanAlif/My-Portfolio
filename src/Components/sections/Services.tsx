"use client";

import Container from "@/Components/layout/Container";
import Button from "@/Components/ui/Button";
import GlassCard from "@/Components/ui/GlassCard";
import Input from "@/Components/ui/Input";
import Modal, { useModal } from "@/Components/ui/Modal";
import Reveal from "@/Components/ui/Reveal";
import SectionHeading from "@/Components/ui/SectionHeading";
import Select from "@/Components/ui/Select";
import Textarea from "@/Components/ui/Textarea";
import { services } from "@/data/services";
import { TServices } from "@/helpers/types";
import { sendViaWeb3Forms } from "@/lib/web3forms";
import { useState } from "react";
import toast from "react-hot-toast";

const initialForm = {
  name: "",
  email: "",
  phoneNumber: "",
  service: services[0].title,
  message: "",
};

export default function Services() {
  const modal = useModal();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initialForm);

  const serviceOptions = services.map((s) => ({
    value: s.title,
    label: s.title,
  }));

  const setField = (key: keyof typeof initialForm, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const openFor = (service: TServices) => {
    setForm({ ...initialForm, service: service.title });
    modal.open();
  };

  const handleSend = async () => {
    if (!form.name || !form.email || !form.phoneNumber || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      await sendViaWeb3Forms({
        subject: `Portfolio hire request: ${form.service}`,
        name: form.name,
        email: form.email,
        replyto: form.email,
        phone: form.phoneNumber,
        service: form.service,
        message: form.message,
        from_name: "Portfolio Hire Form",
      });
      toast.success("Your message has been sent!");
      setForm(initialForm);
      modal.close();
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="services" className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="What I Do"
          title="Services I offer"
          subtitle="Backend-focused services to design, build, and scale the engine behind your product."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service._id} delay={i * 0.06}>
              <GlassCard className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-violet-500/15 text-primary [&_svg]:h-7 [&_svg]:w-7">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {service.description}
                </p>
                {service.rules && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.rules.map((rule) => (
                      <span
                        key={rule}
                        className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                      >
                        {rule}
                      </span>
                    ))}
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => openFor(service)}
                  className="mt-5 text-sm font-semibold text-primary transition-colors hover:text-violet-500"
                >
                  Hire for this →
                </button>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>

      <Modal
        isOpen={modal.isOpen}
        onClose={modal.close}
        title="Let's work together 🚀"
        footer={
          <div className="flex items-center justify-end gap-3">
            <Button variant="ghost" onClick={modal.close}>
              Cancel
            </Button>
            <Button onClick={handleSend} loading={loading}>
              Send Request
            </Button>
          </div>
        }
      >
        <div className="grid gap-4">
          <Input
            label="Name"
            id="hire-name"
            name="name"
            value={form.name}
            onChange={(v) => setField("name", v)}
          />
          <Input
            label="Email"
            id="hire-email"
            name="email"
            type="email"
            value={form.email}
            onChange={(v) => setField("email", v)}
          />
          <Input
            label="Phone Number"
            id="hire-phone"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={(v) => setField("phoneNumber", v)}
          />
          <Select
            label="Service"
            id="hire-service"
            name="service"
            value={form.service}
            onChange={(v) => setField("service", v)}
            options={serviceOptions}
          />
          <Textarea
            label="Tell me about your project"
            id="hire-message"
            name="message"
            value={form.message}
            onChange={(v) => setField("message", v)}
          />
        </div>
      </Modal>
    </section>
  );
}
