"use client";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import AutoGrid from "../ui/AutoGrid";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";

export default function Services() {
  const t = useTranslations("Services");

  const services = [
    {
      id: 1,
      title: t("health.title"),
      description: t("health.description"),
      imageSrc: "/images/services/health.svg",
    },
    {
      id: 2,
      title: t("quality.title"),
      description: t("quality.description"),
      imageSrc: "/images/services/quality.svg",
    },
    {
      id: 3,
      title: t("care.title"),
      description: t("care.description"),
      imageSrc: "/images/services/care.svg",
    },
    {
      id: 4,
      title: t("ethical.title"),
      description: t("ethical.description"),
      imageSrc: "/images/services/ethical.svg",
    },
  ];

  return (
    <section className="py-16" aria-labelledby="services-heading">
      <FadeInWhenVisible>
        <Container className="shadow-xl bg-surface rounded-2xl flex flex-col gap-8 p-8">
          {/* Header section - 8pt spacing: gap-8 */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2
                id="services-heading"
                className="text-primary text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
              >
                {t("title")}
              </h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-muted text-lg leading-relaxed">
                {t("description")}
              </p>
            </div>
          </div>

          {/* Services grid */}
          <AutoGrid minSize="280px">
            {services.map((service) => (
              <Card
                key={service.id}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                imageAlt={service.title}
                className="!shadow-none !border-0"
              />
            ))}
          </AutoGrid>
        </Container>
      </FadeInWhenVisible>
    </section>
  );
}
