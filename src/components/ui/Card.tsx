import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ImageCardProps = {
  title: string;
  description: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonText?: string;
};

export default function ImageCard({
  href,
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
}: ImageCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="max-w-sm bg-background border border-border rounded-lg shadow-sm dark:bg-background dark:border-border hover:transform"
    >
      {imageSrc &&
        (href ? (
          <Link href={href}>
            <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt || title}
                fill
                className="object-container"
              />
            </div>
          </Link>
        ) : (
          <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              className="object-container p-4"
            />
          </div>
        ))}

      <div className="p-5">
        {href ? (
          <Link href={href}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary dark:text-primary">
              {title}
            </h5>
          </Link>
        ) : (
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary dark:text-primary">
            {title}
          </h5>
        )}

        <p className="mb-3 font-normal text-muted dark:text-muted">
          {description}
        </p>

        {buttonText && href && (
          <Link
            href={href}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-foreground bg-background rounded-lg focus:ring-4 focus:outline-none focus:primary-ring dark:primary dark:primary-hover dark:focus:primary-ring"
          >
            {buttonText}
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        )}
      </div>
    </motion.div>
  );
}
