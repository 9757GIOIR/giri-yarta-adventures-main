import { FormEvent, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Mail, MapPin, Phone, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contacts = [
  {
    name: "Bhagwan Giri",
    phone: "+91 98765 43210",
    role: "Primary Tour Coordinator",
  },
  {
    name: "Abhishek Giri",
    phone: "+91 72767 13116",
    role: "Operations & Booking Support",
  },
];

type ContactFormData = {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: ContactFormData = {
  fullName: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>(initialForm);

  const onFieldChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let errorMessage = `Contact form submit failed (HTTP ${response.status})`;
        const errorJson = await response.json().catch(() => null);

        if (errorJson?.message) {
          errorMessage = errorJson.message;
        } else if (response.status === 404) {
          errorMessage = "Contact API not found. Restart server with: npm run dev:full";
        }

        throw new Error(errorMessage);
      }

      toast({
        title: "Message sent",
        description: "Your contact request has been sent successfully.",
      });
      setFormData(initialForm);
    } catch (error) {
      const rawMessage = error instanceof Error ? error.message : "Something went wrong";
      const message =
        rawMessage === "Failed to fetch"
          ? "Mail server not running. Start with: npm run dev:full"
          : rawMessage;
      toast({
        title: "Message failed",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-shell">
      <Header />

      <main className="page-main">
        <div className="container mx-auto max-w-6xl">
          <div className="grid items-start gap-6 lg:grid-cols-2">
            <section className="section-shell">
              <p className="section-kicker">Contact Form</p>
              <h2 className="section-title mb-2">Send Us a Message</h2>
              <p className="mb-6 text-muted-foreground">
                Fill out the form and our team will respond by email or phone.
              </p>

              <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-foreground">Full Name</label>
                  <Input
                    required
                    value={formData.fullName}
                    onChange={(e) => onFieldChange("fullName", e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold text-foreground">Phone Number</label>
                  <Input
                    required
                    value={formData.phone}
                    onChange={(e) => onFieldChange("phone", e.target.value)}
                    placeholder="Enter your mobile number"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold text-foreground">Email Address</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => onFieldChange("email", e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold text-foreground">Subject</label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => onFieldChange("subject", e.target.value)}
                    placeholder="Tour inquiry, route, booking, etc."
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-semibold text-foreground">Message</label>
                  <Textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => onFieldChange("message", e.target.value)}
                    placeholder="Write your message here..."
                  />
                </div>

                <div className="md:col-span-2">
                  <button type="submit" disabled={isSubmitting} className="cta-button disabled:opacity-60">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </section>

            <section className="section-shell">
              <p className="section-kicker">Contact Details</p>
              <h2 className="section-title mb-6">Direct Contacts</h2>

              <div className="space-y-4">
                {contacts.map((contact) => (
                  <article key={contact.name} className="rounded-xl border border-border bg-muted/30 p-4">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card">
                        <User className="h-5 w-5 text-secondary" />
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground">{contact.name}</h3>
                        <p className="text-sm text-muted-foreground">{contact.role}</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-secondary" />
                        <a
                          className="text-sm font-medium text-foreground hover:underline"
                          href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-6 space-y-3 border-t border-border pt-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-secondary" />
                  <a className="text-sm hover:underline" href="mailto:shrigiritours@gmail.com">
                    shrigiritours@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <span className="text-sm">Nanded, Parbhani, Latur</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
