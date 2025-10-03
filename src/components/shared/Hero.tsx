"use client";

import Container from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import Button from "../ui/Button";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="hero" className="py-20 min-h-[400px] z-10">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 w-full text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary ">
              {t("title")}
            </h1>
            <p className="text-white text-xl mb-8">{t("description")}</p>
            <div className="flex flex-col md:flex-row gap-2">
              <Link className="cursor-pointer" href={"/dog"}>
                <Button variant="primary">{t("cta_dog")}</Button>
              </Link>
              <Link className="cursor-pointer" href={"/dog"}>
                <Button variant="secondary">{t("cta_puppy")}</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
