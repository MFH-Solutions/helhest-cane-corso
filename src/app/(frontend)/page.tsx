"use client";
import About from "@/components/shared/About";
import Contacts from "@/components/shared/Contacts";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Services from "@/components/shared/Services";
import { MediaType } from "@/types/gallery";
import { useTranslations } from "next-intl";
import * as nav from "@/types/nav";
import { useNavigationLinks } from "@/hooks/useNavigationLinks";
import { useMedias } from "@/hooks/useMedias";

export default async function Home() {
  const links = useNavigationLinks();
  const medias = useMedias();

  return (
    <main>
      <Header navItems={links} />
      <Services />
      <Contacts />
      <About medias={medias} />
      <Footer navItems={links} />
    </main>
  );
}
