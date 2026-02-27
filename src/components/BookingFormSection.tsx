import { FormEvent, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type BookingFormSectionProps = {
  tourName: string;
};

type BookingFormData = {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  seats: string;
  travelDate: string;
  message: string;
};

const initialForm: BookingFormData = {
  fullName: "",
  phone: "",
  email: "",
  city: "",
  seats: "1",
  travelDate: "",
  message: "",
};

const BookingFormSection = ({ tourName }: BookingFormSectionProps) => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>(initialForm);

  const onFieldChange = (field: keyof BookingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          tourName,
        }),
      });

      if (!response.ok) {
        const errorJson = await response.json().catch(() => null);
        throw new Error(errorJson?.message || "Booking submit failed");
      }

      toast({
        title: "Booking submitted",
        description: "Details sent to configured receiver email successfully.",
      });
      setFormData(initialForm);
      setShowForm(false);
    } catch (error) {
      const rawMessage = error instanceof Error ? error.message : "Something went wrong";
      const message =
        rawMessage === "Failed to fetch"
          ? "Booking server not running. Start with: npm run dev:full"
          : rawMessage;
      toast({
        title: "Booking failed",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mt-8">
      <button
        type="button"
        onClick={() => setShowForm((prev) => !prev)}
        className="cta-button w-full md:w-auto"
      >
        {showForm ? "Close Booking Form" : "Book Now"}
      </button>

      {showForm ? (
        <form onSubmit={onSubmit} className="section-shell mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-semibold text-foreground">Full Name</label>
            <Input
              required
              value={formData.fullName}
              onChange={(e) => onFieldChange("fullName", e.target.value)}
              placeholder="Enter full name"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-foreground">Phone</label>
            <Input
              required
              value={formData.phone}
              onChange={(e) => onFieldChange("phone", e.target.value)}
              placeholder="Enter mobile number"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-foreground">Email</label>
            <Input
              type="email"
              required
              value={formData.email}
              onChange={(e) => onFieldChange("email", e.target.value)}
              placeholder="Enter email"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-foreground">City</label>
            <Input
              required
              value={formData.city}
              onChange={(e) => onFieldChange("city", e.target.value)}
              placeholder="Enter city"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-foreground">Seats</label>
            <Input
              type="number"
              min={1}
              required
              value={formData.seats}
              onChange={(e) => onFieldChange("seats", e.target.value)}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-foreground">Travel Date</label>
            <Input
              type="date"
              value={formData.travelDate}
              onChange={(e) => onFieldChange("travelDate", e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-semibold text-foreground">Message</label>
            <Textarea
              rows={4}
              value={formData.message}
              onChange={(e) => onFieldChange("message", e.target.value)}
              placeholder="Any note for pickup, seats, or darshan plan"
            />
          </div>

          <div className="md:col-span-2 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="cta-button disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Submit Booking"}
            </button>
          </div>
        </form>
      ) : null}
    </section>
  );
};

export default BookingFormSection;
