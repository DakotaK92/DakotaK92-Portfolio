"use client";

import { useState, useTransition } from "react";
import { sendEmail } from "../actions/send-email";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "dakotaking92@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Poinciana, Florida",
  },
];

const Contact = () => {
  const [result, setResult] = useState({});
  const [selectedService, setSelectedService] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData) => {
    startTransition(async () => {
      const response = await sendEmail(formData);
      setResult(response);
    });
  };

  return (
    <section className="page-shell py-12 xl:py-16">
      <div className="section-wrap">
        <div className="grid grid-cols-1 items-start gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel rounded-[2.25rem] p-8 text-[var(--text)]">
            <span className="section-kicker">Get In Touch</span>
            <h2 className="mt-5 text-4xl font-black">Let&apos;s build something sharp, useful, and memorable.</h2>
            <p className="mt-4 leading-8 text-[var(--muted-text)]">
              Whether you need a portfolio refresh, a polished product interface, or design support that can move into code, I&apos;m open to freelance collaborations and creative partnerships.
            </p>

            <div className="mt-8 grid gap-4">
              {info.map((item, index) => (
                <div key={index} className="rounded-[1.5rem] border border-[var(--border-soft)] bg-white/60 p-4 dark:bg-white/6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)] text-[var(--button-text)]">
                      <div className="text-xl">{item.icon}</div>
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--muted-text)]">{item.title}</p>
                      <h3 className="mt-1 text-lg font-semibold text-[var(--text)]">{item.description}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <form
              action={handleSubmit}
              className="glass-panel flex flex-col gap-6 rounded-[2.25rem] p-8 text-[var(--text)]"
            >
              <h3 className="text-4xl font-black text-[var(--accent)]">
                Let&apos;s work together
              </h3>

              <p className="text-[var(--muted-text)]">
                Send a quick note with your project, timeline, or goal and I&apos;ll get back to you as soon as I can.
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input aria-label="First name" name="firstName" type="text" placeholder="First name" required />
                <Input aria-label="Last name" name="lastName" type="text" placeholder="Last name" />
                <Input aria-label="Email address" name="email" type="email" placeholder="Email address" required />
                <Input aria-label="Phone number" name="phone" type="tel" placeholder="Phone number" />
              </div>

              <input type="hidden" name="service" value={selectedService} />

              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger className="w-full" aria-label="Select a service">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                aria-label="Project message"
                name="message"
                className="h-[200px]"
                placeholder="Tell me a little about the project, what you need, and your timeline."
                required
              />

              <Button
                type="submit"
                disabled={isPending}
                className="max-w-44 bg-[var(--accent)] text-[var(--button-text)] shadow-lg hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]"
              >
                {isPending ? "Sending..." : "Send Message"}
              </Button>

              {result?.success && (
                <p className="text-green-600 dark:text-green-400" aria-live="polite">
                  Message sent successfully!
                </p>
              )}

              {result?.error && (
                <p className="text-red-600 dark:text-red-400" aria-live="polite">
                  {result.error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
