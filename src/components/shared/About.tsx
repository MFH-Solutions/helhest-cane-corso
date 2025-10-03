"use client";
import Container from "../ui/Container";
import Gallery from "../ui/Gallery";
import { useTranslations } from "next-intl";
import { MediaType } from "@/types/gallery";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";

type AboutProps = {
  medias: MediaType[];
};

export default function About({ medias }: AboutProps) {
  const t = useTranslations("About");

  return (
    <section
      id="about"
      className="bg-background py-16"
      aria-labelledby="about-heading"
    >
      <Container>
        {/* 8pt spacing: gap-8 (32px), my-16 removed in favor of section py-16 */}
        <div className="flex flex-col gap-8">
          <FadeInWhenVisible>
            <div className="flex flex-col gap-4">
              <h2
                id="about-heading"
                className="text-primary text-3xl lg:text-4xl xl:text-5xl font-bold"
              >
                {t("title")}
              </h2>
              <p className="text-foreground text-lg leading-relaxed">
                {t("description")}
              </p>
            </div>
          </FadeInWhenVisible>
          <Gallery medias={medias} />
        </div>
      </Container>
    </section>
  );
}
