import About from "@/components/shared/About";
import Contacts from "@/components/shared/Contacts";
import Header from "@/components/shared/Header";
import Services from "@/components/shared/Services";
import { MediaType } from "@/types/gallery";

export default async function Home() {
  const medias: MediaType[] = [
    {
      id: 1,
      src: "/images/about/1.jpg",
      alt: "gallery image 1",
      isPrimary: true,
      isActive: true,
      type: "image",
      extension: "jpg",
    },
    {
      id: 2,
      src: "/images/about/2.jpg",
      alt: "gallery image 2",
      isPrimary: false,
      isActive: false,
      type: "image",
      extension: "jpg",
    },
    {
      id: 3,
      src: "/images/about/3.jpg",
      alt: "gallery image 3",
      isPrimary: false,
      isActive: false,
      type: "image",
      extension: "jpg",
    },
    {
      id: 4,
      src: "/images/about/4.jpg",
      alt: "gallery image 4",
      isPrimary: false,
      isActive: false,
      type: "image",
      extension: "jpg",
    },
    {
      id: 5,
      src: "/images/about/5.jpg",
      alt: "gallery image 5",
      isPrimary: false,
      isActive: false,
      type: "image",
      extension: "jpg",
    },
    {
      id: 6,
      src: "/images/about/6.jpg",
      alt: "gallery image 6",
      isPrimary: false,
      isActive: false,
      type: "image",
      extension: "jpg",
    },
    {
      id: 7,
      src: "/images/about/7.jpg",
      alt: "gallery image 7",
      isPrimary: false,
      isActive: false,
      type: "image",
      extension: "jpg",
    },
    {
      id: 8,
      src: "/images/about/8.jpg",
      alt: "gallery image 8",
      isPrimary: false,
      isActive: false,
      type: "image",
      extension: "jpg",
    },
    {
      id: 9,
      src: "/images/about/9.jpg",
      alt: "gallery image 9",
      isPrimary: false,
      isActive: false,
      type: "image",
      extension: "jpg",
    },
    {
      id: 10,
      src: "/images/about/10.jpg",
      alt: "gallery image 10",
      isPrimary: false,
      isActive: false,
      type: "image",
      extension: "jpg",
    },
    {
      id: 11,
      src: "/images/about/11.jpg",
      alt: "gallery image 11",
      isPrimary: false,
      isActive: false,
      type: "image",
      extension: "jpg",
    },
  ];
  return (
    <main>
      <Header />
      <Services />
      <Contacts />
      <About medias={medias} />
    </main>
  );
}
