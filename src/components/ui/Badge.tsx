export default function Badge({
  text,
  variant = "default",
}: {
  text: string;
  variant: "default" | "primary";
}) {
  const baseClasses =
    "inline-flex items-center justify-center text-sm font-medium rounded-full";

  if (variant === "primary") {
    return (
      <span
        className={`${baseClasses} w-3 h-3 p-3 ms-3 text-blue-800 bg-blue-100 dark:bg-blue-900 dark:text-blue-300`}
      >
        {text}
      </span>
    );
  }

  return (
    <span
      className={`${baseClasses} px-2 ms-3 text-gray-800 bg-gray-100 dark:bg-gray-700 dark:text-gray-300`}
    >
      {text}
    </span>
  );
}
