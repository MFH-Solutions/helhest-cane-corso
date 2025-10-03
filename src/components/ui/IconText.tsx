import Image from "next/image";

type IconText = {
  id: string;
  label: string;
  icon: string;
};

export default function IconText({ item }: { item: IconText }) {
  return (
    <div className="flex items-center">
      <Image src={item.icon} alt={item.label} width={20} height={20} />
      <span className="flex-1 ms-3 whitespace-nowrap text-white">
        {item.label}
      </span>
    </div>
  );
}
