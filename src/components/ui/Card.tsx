import Image from "next/image";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";

type CardProps = {
  title: string;
  description: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonText?: string;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "title">;

export default function Card({
  href,
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  className,
  ...props
}: CardProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      className={`max-w-sm bg-surface border border-border rounded-xl shadow-sm transition-shadow hover:shadow-md ${className || ""}`}
      {...props}
    >
      {imageSrc &&
        (href ? (
          <Link href={href} aria-label={`View more about ${title}`}>
            <div className="relative w-full h-48 rounded-t-xl overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt || title}
                fill
                className="object-contain p-4"
              />
            </div>
          </Link>
        ) : (
          <div className="relative w-full h-48 rounded-t-xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              className="object-contain p-4"
            />
          </div>
        ))}

      {/* 8pt spacing: p-6 (24px), gap-4 (16px) */}
      <div className="p-6 flex flex-col gap-4">
        {href ? (
          <Link
            href={href}
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          >
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              {title}
            </h3>
          </Link>
        ) : (
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            {title}
          </h3>
        )}

        <p className="text-muted leading-relaxed">{description}</p>

        {buttonText && href && (
          <Link
            href={href}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-hover rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label={`${buttonText} about ${title}`}
          >
            {buttonText}
            <svg
              className="w-4 h-4"
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
    </motion.article>
  );
}
