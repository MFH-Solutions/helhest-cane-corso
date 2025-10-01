type IconText = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

export default function IconText({ item }: { item: IconText }) {
  return (
    <li>
      <div className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
        {item.icon}
      </div>
      <span className="flex-1 ms-3 whitespace-nowrap">{item.label}</span>
    </li>
  );
}
