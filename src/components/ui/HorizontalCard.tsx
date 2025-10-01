import Image from "next/image";
import Link from "next/link";

type HorizontalCardProps = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
};

export default function HorizontalCard({
  href,
  imageSrc,
  imageAlt,
  title,
  description,
}: HorizontalCardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <div className="relative w-full h-96 md:h-auto md:w-48 rounded-t-lg md:rounded-none md:rounded-s-lg overflow-hidden">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </Link>
  );
}
