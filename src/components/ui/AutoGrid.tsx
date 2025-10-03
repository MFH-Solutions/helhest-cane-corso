export type AutoGridProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  minSize?: string;
  autoSizing?: "auto-fit" | "auto-fill";
};

export default function AutoGrid({
  minSize = "250px",
  autoSizing = "auto-fit",
  children,
  className,
  ...props
}: AutoGridProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${autoSizing}, minmax(min(${minSize}, 100%), 1fr))`,
        gap: "2rem", // 8pt system: 32px
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}
