import Container from "@/components/ui/Container";
import ContactForm from "./ContactForm";
import { useTranslations } from "next-intl";
import IconText from "../ui/IconText";
import FAQ from "./FAQ";

export default function Contacts() {
  const t = useTranslations("Contact");
  const f = useTranslations("FAQ");

  return (
    <section
      id="contact"
      className="bg-surface dark:bg-surface py-16"
      aria-labelledby="contact-heading"
    >
      <Container>
        {/* Contact section - 8pt spacing: gap-8 */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          {/* Left side - Contact info */}
          <div className="md:w-1/2 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2
                id="contact-heading"
                className="text-primary text-3xl lg:text-4xl xl:text-5xl font-bold"
              >
                {t("title")}
              </h2>
              <p className="text-foreground text-lg leading-relaxed">
                {t("description")}
              </p>
            </div>

            {/* Contact details - 8pt spacing: gap-4 */}
            <div
              className="flex flex-col gap-4"
              role="list"
              aria-label="Contact information"
            >
              <IconText
                item={{
                  id: "phone",
                  label: "+1 (819) 743-5618",
                  icon: "/icons/phone.svg",
                }}
                href="tel:+18197435618"
              />
              <IconText
                item={{
                  id: "email",
                  label: "j.carriere26@outlook.com",
                  icon: "/icons/email.svg",
                }}
                href="mailto:j.carriere26@outlook.com"
              />
              <IconText
                item={{
                  id: "location",
                  label: "Val-des-Monts, Canada, QC",
                  icon: "/icons/location.svg",
                }}
              />
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="md:w-1/2">
            <ContactForm />
          </div>
        </div>

        {/* Divider - 8pt spacing: my-16 */}
        <hr className="border-border" />

        {/* FAQ section - 8pt spacing: mt-16, gap-4 */}
        <div className="mt-16 flex flex-col gap-4">
          <h2
            id="faq-heading"
            className="text-primary text-3xl lg:text-4xl xl:text-5xl font-bold"
          >
            FAQ
          </h2>
          <FAQ
            title={f("inclusion.title")}
            description={f("inclusion.description")}
          />
        </div>
      </Container>
    </section>
  );
}
