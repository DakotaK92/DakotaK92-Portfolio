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
} from "../../components/ui/select"

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
]

import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState({});
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData) => {
    startTransition(async () => {
      const response = await sendEmail(formData);
      setResult(response);
    });
  };

  return (
    <section className="py-6">
      <div className="container mx-auto p-4">
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">

    {/* LEFT — FORM */}
    <div>
      <form
        action={handleSubmit}
        className="flex flex-col gap-6 p-10 bg-blue-950 rounded-xl text-white"
      >
        <h3 className="text-4xl text-amber-400">
          Let's work together
        </h3>

        <p className="text-white/60">
          I am available for freelance work. Connect with me via phone or email.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input name="firstName" type="text" placeholder="First name" required />
          <Input name="lastName" type="text" placeholder="Last name" />
          <Input name="email" type="email" placeholder="Email address" required />
          <Input name="phone" type="tel" placeholder="Phone number" />
        </div>

        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a Service</SelectLabel>
              <SelectItem value="est">Web Development</SelectItem>
              <SelectItem value="cst">UI/UX Design</SelectItem>
              <SelectItem value="gcd">Graphic Design</SelectItem>
              <SelectItem value="mst">Logo Design</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Textarea
          name="message"
          className="h-[200px]"
          placeholder="Type your message here."
          required
        />

        <Button
          type="submit"
          disabled={isPending}
          className="max-w-40"
        >
          {isPending ? "Sending..." : "Send Message"}
        </Button>

        {result?.success && (
          <p className="text-green-400">
            Message sent successfully!
          </p>
        )}

        {result?.error && (
          <p className="text-red-400">
            {result.error}
          </p>
        )}
      </form>
    </div>

    {/* RIGHT — CONTACT INFO */}
    <div className="flex items-center xl:justify-end">
      <ul className="flex flex-col gap-10">
        {info.map((item, index) => (
          <li key={index} className="flex items-center gap-6">
            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-blue-950 text-amber-400 rounded-md flex items-center justify-center">
              <div className="text-[28px]">{item.icon}</div>
            </div>
            <div>
              <p className="text-[var(--foreground)]">{item.title}</p>
              <h3 className="text-xl">{item.description}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>

  </div>
</div>

    </section>
  );
};

export default Contact;
