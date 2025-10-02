"use client";

import Container from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="hero" className="py-20 min-h-[400px] z-10">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 w-full text-center md:text-left text-white">
            <h1 className="text-[clamp(3rem, 6vw + 1rem, 5rem)] font-bold mb-4 text-primary">
              {t("title")}
            </h1>
            <p className="text-xl mb-8">{t("description")}</p>
          </div>
          <div className="md:w-1/2 w-full"></div>
        </div>
      </Container>
    </section>
  );
}
