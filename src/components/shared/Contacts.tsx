import Container from "@/components/ui/Container";
import ContactForm from "./ContactForm";
import { useTranslations } from "next-intl";
import IconText from "../ui/IconText";
import FAQ from "./FAQ";

export default function Contacts() {
  const t = useTranslations("Contact");
  const f = useTranslations("FAQ");

  return (
    <section className="bg-[#1a1b16] min-h-[400px] py-16">
      <Container>
        {/* Inner Container */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left */}
          <div className="md:max-w-1/2 w-full space-y-1 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-primary dark:text-primary text-2xl lg:text-3xl xl:text-4xl">
                {t("title")}
              </h2>
              <p className="text-white">{t("description")}</p>
            </div>
            <div className="flex flex-col gap-4">
              <IconText
                item={{
                  id: "1",
                  label: "+1 (819) 743-5618",
                  icon: "/icons/phone.svg",
                }}
              />
              <IconText
                item={{
                  id: "2",
                  label: "j.carriere26@outlook.com",
                  icon: "/icons/email.svg",
                }}
              />
              <IconText
                item={{
                  id: "3",
                  label: "Val-des-Monts, Canada, QC",
                  icon: "/icons/location.svg",
                }}
              />
            </div>
          </div>
          {/* Right */}
          <div className="md:max-w-1/2 w-full">
            <ContactForm />
          </div>
        </div>
        <hr className="my-8 text-muted/20" />
        {/* FAQ */}
        <div className="flex flex-col gap-4">
          <h2 className="text-primary dark:text-primary text-2xl lg:text-3xl xl:text-4xl">
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
