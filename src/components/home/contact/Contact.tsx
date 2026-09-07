"use client";

import { useForm } from "@formspree/react";

const FORMSPREE_FORM_ID =
  process.env.NEXT_PUBLIC_FORMSPREE_QUOTE_FORM_ID || "";

export function Contact() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="bg-background-section"
      >
        <div className="mx-auto flex min-h-[500px] w-full max-w-[1600px] items-center justify-center px-[clamp(1.25rem,4vw,5rem)] py-[clamp(4rem,7vw,7rem)]">
          <div className="w-full max-w-[650px] rounded-[1.5rem] border border-border-subtle bg-background-elevated/40 px-[clamp(1.5rem,4vw,3rem)] py-[clamp(2.5rem,5vw,4rem)] text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-action-primary/15 text-text-accent">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="size-7"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5 12 4 4L19 6"
                />
              </svg>
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-text-accent">
              Enquiry Received
            </p>

            <h2 className="mt-3 font-heading text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-[-0.035em] text-text-primary">
              Thank You
            </h2>

            <p className="mx-auto mt-4 max-w-[500px] text-sm leading-7 text-text-secondary sm:text-base">
              Your shipment details have been submitted successfully. Our
              team will review your enquiry and get back to you shortly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="bg-background-section"
    >
      <div className="mx-auto w-full max-w-[1600px] px-[clamp(1.25rem,4vw,5rem)] py-[clamp(4rem,7vw,7rem)]">
        {/* Header */}
        <div className="mx-auto w-full max-w-[820px] text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-text-accent">
            Get In Touch
          </p>

          <h2 className="mt-3 font-heading text-[clamp(2rem,4vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-text-primary">
            Let&apos;s Move Your Cargo.
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-[clamp(0.95rem,1.1vw,1.125rem)] leading-7 text-text-secondary sm:leading-8">
            Tell us about your shipment and our team will help you find the
            right logistics solution.
            Get the best shipping rates and hassle free experience
          </p>

          <div className="mx-auto mt-5 h-[2px] w-12 bg-action-primary" />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-[clamp(2.5rem,5vw,4rem)] w-full max-w-[1100px] rounded-[1.5rem] border border-border-subtle bg-background-elevated/40 p-[clamp(1.25rem,3vw,2.5rem)]"
        >
          {/* Shipment Details */}
          <div>
            <SectionHeading
              eyebrow="Shipment Details"
              title="Origin & Destination"
            />

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Field
                label="Origin Location"
                name="origin_location"
                placeholder="Enter origin location"
                required
              />

              <SelectField
                label="Origin Location Type"
                name="origin_location_type"
                required
                options={[
                  { value: "port", label: "Port" },
                  { value: "icd", label: "ICD" },
                  { value: "door", label: "Door" },
                ]}
              />

              <Field
                label="Destination Location"
                name="destination_location"
                placeholder="Enter destination location"
                required
              />

              <SelectField
                label="Destination Location Type"
                name="destination_location_type"
                required
                options={[
                  { value: "port", label: "Port" },
                  { value: "icd", label: "ICD" },
                  { value: "door", label: "Door" },
                ]}
              />
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <RadioField
                label="Origin Customs Required?"
                name="origin_customs_required"
              />

              <RadioField
                label="Destination Customs Required?"
                name="destination_customs_required"
              />
            </div>
          </div>

          {/* Container Details */}
          <div className="mt-[clamp(2.5rem,5vw,4rem)] border-t border-border-subtle pt-[clamp(2rem,4vw,3rem)]">
            <SectionHeading
              eyebrow="Container Details"
              title="Tell Us About Your Cargo"
            />

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <Field
                label="Number of Containers"
                name="container_count"
                type="number"
                min="1"
                placeholder="e.g. 2"
                required
              />

              <SelectField
                label="Container Type"
                name="container_type"
                required
                options={[
                  { value: "20-standard", label: "20' Standard" },
                  { value: "40-standard", label: "40' Standard" },
                  { value: "40-high-cube", label: "40' High Cube" },
                  { value: "other", label: "Other" },
                ]}
              />

              <Field
                label="Cargo Ready Date"
                name="cargo_ready_date"
                type="date"
                required
              />
            </div>

            <div className="mt-5">
              <TextAreaField
                label="Goods Description"
                name="goods_description"
                placeholder="Tell us briefly about the goods being shipped..."
              />
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <RadioField
                label="CFS Stuffing Required?"
                name="cfs_stuffing_required"
              />

              <RadioField
                label="Hazardous Cargo?"
                name="hazardous_cargo"
              />
            </div>
          </div>

          {/* Contact Details */}
          <div className="mt-[clamp(2.5rem,5vw,4rem)] border-t border-border-subtle pt-[clamp(2rem,4vw,3rem)]">
            <SectionHeading
              eyebrow="Contact Details"
              title="How Can We Reach You?"
            />

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Field
                label="Name"
                name="name"
                placeholder="Your full name"
                autoComplete="name"
                required
              />

              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                required
              />

              <Field
                label="Company Name"
                name="company"
                placeholder="Your company name"
                autoComplete="organization"
                required
              />

              <Field
                label="Role"
                name="role"
                placeholder="Your role / designation"
              />

              <div className="md:col-span-2">
                <Field
                  label="Mobile Number"
                  name="mobile"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  autoComplete="tel"
                  required
                />
              </div>
            </div>
          </div>

          {/* Error */}
          {state.errors && (
            <div className="mt-6 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm leading-6 text-red-300">
              Something went wrong while submitting your enquiry. Please try
              again or contact us directly.
            </div>
          )}

          {/* Submit */}
          <div className="mt-[clamp(2rem,4vw,3rem)] flex justify-center border-t border-border-subtle pt-[clamp(1.5rem,3vw,2rem)]">
            <button
              type="submit"
              disabled={state.submitting || !FORMSPREE_FORM_ID}
              className="inline-flex min-h-12 w-full max-w-[280px] items-center justify-center rounded-button bg-action-primary px-7 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-action-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state.submitting ? "Submitting..." : "Request a Quote"}
            </button>
          </div>

          {!FORMSPREE_FORM_ID && (
            <p className="mt-3 text-center text-xs text-text-muted">
              Form submission will be enabled once the Formspree form ID is
              configured.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

function SectionHeading({
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-text-accent">
        {eyebrow}
      </p>

      <h3 className="mt-2 font-heading text-[clamp(1.35rem,2vw,1.75rem)] font-bold tracking-[-0.025em] text-text-primary">
        {title}
      </h3>
    </div>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  min?: string;
  autoComplete?: string;
};

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  min,
  autoComplete,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-text-primary"
      >
        {label}
        {required && (
          <span className="ml-1 text-text-accent" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        min={min}
        autoComplete={autoComplete}
        className="mt-2 h-12 w-full rounded-button border border-border-subtle bg-background-page/60 px-4 text-sm text-text-primary outline-none placeholder:text-text-muted transition-colors focus:border-border-accent focus:ring-2 focus:ring-action-primary/15"
      />
    </div>
  );
}

type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  label: string;
  name: string;
  options: SelectOption[];
  required?: boolean;
};

function SelectField({
  label,
  name,
  options,
  required = false,
}: SelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-text-primary"
      >
        {label}
        {required && (
          <span className="ml-1 text-text-accent" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 h-12 w-full rounded-button border border-border-subtle bg-background-page/60 px-4 text-sm text-text-primary outline-none transition-colors focus:border-border-accent focus:ring-2 focus:ring-action-primary/15"
      >
        <option value="" disabled>
          Select an option
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-background-page"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

type TextAreaFieldProps = {
  label: string;
  name: string;
  placeholder?: string;
};

function TextAreaField({
  label,
  name,
  placeholder,
}: TextAreaFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-text-primary"
      >
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        rows={4}
        placeholder={placeholder}
        className="mt-2 w-full resize-y rounded-button border border-border-subtle bg-background-page/60 px-4 py-3 text-sm leading-6 text-text-primary outline-none placeholder:text-text-muted transition-colors focus:border-border-accent focus:ring-2 focus:ring-action-primary/15"
      />
    </div>
  );
}

type RadioFieldProps = {
  label: string;
  name: string;
};

function RadioField({
  label,
  name,
}: RadioFieldProps) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-text-primary">
        {label}
      </legend>

      <div className="mt-3 flex flex-wrap gap-5">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-text-secondary">
          <input
            type="radio"
            name={name}
            value="yes"
            className="size-4 accent-[#2878d4]"
          />
          Yes
        </label>

        <label className="flex cursor-pointer items-center gap-2 text-sm text-text-secondary">
          <input
            type="radio"
            name={name}
            value="no"
            defaultChecked
            className="size-4 accent-[#2878d4]"
          />
          No
        </label>
      </div>
    </fieldset>
  );
}