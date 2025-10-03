export type AutoGridProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  minSize?: string;
  autoSizing?: "auto-fit" | "auto-fill";
};

export default function AutoGrid({
  minSize = "250px",
  autoSizing = "auto-fit",
  children,
  ...props
}: AutoGridProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${autoSizing}, minmax(min(${minSize}, 100%), 1fr))`,
        gap: "1rem",
      }}
      {...props}
    >
      {children}
    </div>
  );
}
