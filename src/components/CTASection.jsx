import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xeeqqnne");

  if (state.succeeded) {
    return (
      <div className="text-center py-8">
        <p className="text-lg text-primary font-semibold mb-2">Thanks for joining!</p>
        <p className="text-sm text-muted-foreground">We'll be in touch soon with exclusive opportunities.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-6 md:space-y-8">
      {/* First Name & Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="flex flex-col">
          <label htmlFor="firstName" className="text-xs md:text-sm font-medium text-foreground mb-2">
            First Name *
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            required
            className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            placeholder="John"
          />
          <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastName" className="text-xs md:text-sm font-medium text-foreground mb-2">
            Last Name *
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            required
            className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            placeholder="Doe"
          />
          <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
        </div>
      </div>

      {/* Email & City Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-xs md:text-sm font-medium text-foreground mb-2">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            placeholder="john@example.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="location" className="text-xs md:text-sm font-medium text-foreground mb-2">
            City & Location *
          </label>
          <input
            id="location"
            type="text"
            name="location"
            required
            className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            placeholder="New York, USA"
          />
          <ValidationError prefix="Location" field="location" errors={state.errors} />
        </div>
      </div>

      {/* Why are you interested */}
      <div className="flex flex-col">
        <label htmlFor="message" className="text-xs md:text-sm font-medium text-foreground mb-2">
          Why are you interested? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows="4"
          className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
          placeholder="Tell us why you're interested in Hiring Bazaar..."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 md:py-3 text-sm md:text-base btn-hover"
      >
        Send {state.submitting ? "..." : <ArrowRight className="ml-2 w-4 h-4" />}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Your information is secure and will only be used to contact you about Hiring Bazaar.
      </p>
    </form>
  );
}

const CTASection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-medium mb-4 md:mb-6">
            Ready to Transform Your{" "}
            <span className="italic text-primary">Hiring</span>?
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-8 md:mb-10 px-2">
            Join hundreds of companies that have revolutionized their talent
            acquisition with Hiring Bazaar.
          </p>

          {/* Contact Form */}
          <div className="mb-8 md:mb-12">
            <ContactForm />
          </div>

          {/* Alternative CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-base md:text-lg btn-hover w-full sm:w-auto"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-border bg-card hover:bg-secondary px-6 md:px-8 py-5 md:py-6 text-base md:text-lg btn-hover w-full sm:w-auto"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
