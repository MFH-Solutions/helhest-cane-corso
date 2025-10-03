"use client";
import Container from "../ui/Container";
import Gallery from "../ui/Gallery";
import { useTranslations } from "next-intl";
import { MediaType } from "@/types/gallery";
import { motion } from "framer-motion";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";

type AboutProps = {
  medias: MediaType[];
};

export default function About({ medias }: AboutProps) {
  const t = useTranslations("About");
  return (
    <section
      id="about"
      className="bg-background dark:bg-background text-foreground dark:text-foreground"
    >
      <Container>
        <div className="flex flex-col gap-2 my-16">
          <FadeInWhenVisible>
            <h2 className="text-primary dark:text-primary text-2xl lg:text-3xl xl:text-4xl">
              {t("title")}
            </h2>
            <p> {t("description")}</p>
          </FadeInWhenVisible>
          <Gallery medias={medias} />
        </div>
      </Container>
    </section>
  );
}
