import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, Send, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15, "Phone must be less than 15 characters"),
  country: z.string().min(1, "Please select a country"),
  course: z.string().trim().min(2, "Course must be at least 2 characters").max(200, "Course must be less than 200 characters"),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

interface EnquiryFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const countries = [
  "Australia",
  "United Kingdom",
  "United States",
  "Canada",
  "Germany",
  "Ireland",
  "New Zealand",
  "France",
];

const EnquiryFormModal = ({ open, onOpenChange }: EnquiryFormModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      course: "",
      message: "",
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    
    // Build WhatsApp message
    const whatsappNumber = "919166664558";
    const message = `*New Enquiry from GoGlobalEdTechPvtLtd Website*

*Name:* ${data.name}
*Email:* ${data.email}
*Phone:* ${data.phone}
*Preferred Country:* ${data.country}
*Preferred Course:* ${data.course}
${data.message ? `*Message:* ${data.message}` : ""}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

    try {
      if (supabaseUrl && supabaseAnonKey) {
        const response = await fetch(`${supabaseUrl}/rest/v1/leads`, {
          method: "POST",
          headers: {
            apikey: supabaseAnonKey,
            Authorization: `Bearer ${supabaseAnonKey}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            phone: data.phone,
            country: data.country,
            course: data.course,
            message: data.message || "",
            source: "whatsapp",
            whatsapp_message: message,
          }),
        });

        if (!response.ok) {
          throw new Error("Supabase insert failed");
        }
      }

      // Open WhatsApp in new tab
      window.open(whatsappUrl, "_blank");

      toast.success("Redirecting to WhatsApp. Please send the message to complete your enquiry!");

      form.reset();
      setIsSubmitting(false);
      onOpenChange(false);
      return;
    } catch {
      // Fallback to WhatsApp even if database logging fails
      window.open(whatsappUrl, "_blank");
      toast.success("Redirecting to WhatsApp. Please send the message to complete your enquiry!");

      form.reset();
      setIsSubmitting(false);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Start Your Journey
          </DialogTitle>
          <p className="text-muted-foreground text-sm">
            Fill out the form below and our expert counsellors will get in touch with you.
          </p>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone *</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+91 XXXXX XXXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Country *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Course *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., MBA, Computer Science, Medicine" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us more about your requirements..."
                      className="min-h-[80px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Enquiry
                </>
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryFormModal;
