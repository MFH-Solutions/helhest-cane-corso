import Image from "next/image";

type IconTextItem = {
  id: string;
  label: string;
  icon: string;
};

type IconTextProps = {
  item: IconTextItem;
  href?: string;
};

export default function IconText({ item, href }: IconTextProps) {
  const content = (
    <div className="flex items-center gap-3" role="listitem">
      <div
        className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
        aria-hidden="true"
      >
        <Image
          src={item.icon}
          alt=""
          width={24}
          height={24}
          className="w-full h-full"
        />
      </div>
      <span className="text-foreground text-base">{item.label}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="inline-flex rounded-lg hover:bg-background/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label={item.label}
      >
        {content}
      </a>
    );
  }

  return content;
}
