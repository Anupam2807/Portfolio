"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import BlurFade from "./magicui/blur-fade";

type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormInputs>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormInputs>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailStatus, setEmailStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormInputs> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true); // Set loading to true when submission starts
      emailjs
        .send(
          "service_uohasg3",
          "template_2ehq1pg",
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          "lPL6XNVzPFNaeAuHX"
        )
        .then(
          (response) => {
            console.log(
              "Email sent successfully:",
              response.status,
              response.text
            );
            setIsSubmitted(true);
            setEmailStatus(
              "Thank you for your message! I’ll get back to you soon."
            );
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            console.error("Failed to send email:", error);
            setEmailStatus(
              "Failed to send your message. Please try again later."
            );
          }
        )
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  return (
    <BlurFade>
      <section id="contact" className="w-full py-16">
        <div className="grid items-center justify-center gap-6 px-4 text-start md:px-8 ">
          <form onSubmit={handleSubmit} className="space-y-6 max-w-md w-full mx-auto">
            <div>
              <label className="block text-lg font-medium text-foreground">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-16 py-3 border border-foreground rounded-lg bg-background text-foreground focus:outline-none focus:border-gray-500 text-lg"
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1 inline-block">
                  {errors.name}
                </span>
              )}
            </div>

            <div>
              <label className="block text-lg font-medium text-foreground">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-foreground rounded-lg bg-background text-foreground focus:outline-none focus:border-gray-500 text-lg"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1 inline-block">
                  {errors.email}
                </span>
              )}
            </div>

            <div>
              <label className="block text-lg font-medium text-foreground">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-foreground rounded-lg bg-background text-foreground focus:outline-none focus:border-gray-500 text-lg"
                rows={5}
              />
              {errors.message && (
                <span className="text-red-500 text-sm mt-1 inline-block">
                  {errors.message}
                </span>
              )}
            </div>

            <button type="submit" className="w-full">
              <div className="inline-block w-full rounded-lg py-3 px-4 bg-foreground text-background text-lg">
                {isLoading ? "Sending..." : "Submit"}
              </div>
            </button>

            {emailStatus && (
              <div
                className={`text-center mt-4 ${
                  isSubmitted ? "text-foreground" : "text-red-500"
                } text-lg font-medium px-4 py-2`}
                style={{ minHeight: "40px" }}
              >
                {emailStatus}
              </div>
            )}
          </form>
        </div>
      </section>
    </BlurFade>
  );
}
