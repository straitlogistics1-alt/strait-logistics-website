import { ContactDetails } from "./ContactDetails";
import { ContactHeader } from "./ContactHeader";
import { ContactVisual } from "./ContactVisual";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-background-page"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 md:px-8 md:py-24 lg:px-10 lg:py-28">
        <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
          <div>
            <ContactHeader />
            <ContactDetails />
          </div>

          <ContactVisual />
        </div>
      </div>
    </section>
  );
}