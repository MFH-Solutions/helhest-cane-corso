"use client";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import AutoGrid from "../ui/AutoGrid";

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
    <section className="mx-4 my-8">
      <Container className="shadow-xl bg-background rounded-xl flex flex-col gap-4 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <h2 className="md:w-1/2 text-primary text-3xl lg:text-4xl xl:text-5xl">
            {t("title")}
          </h2>
          <p className="md:w-1/2 text-muted dark:text-muted">
            {t("description")}
          </p>
        </div>
        <AutoGrid>
          {services.map((service) => (
            <Card
              key={service.id}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              imageAlt={service.title}
            />
          ))}
        </AutoGrid>
      </Container>
    </section>
  );
}
