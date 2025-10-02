export type AutoGridProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  minSize?: string;
};

export default function AutoGrid({
  minSize = "250px",
  children,
  ...props
}: AutoGridProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(min(${minSize}, 100%), 1fr))`,
        gap: "1rem",
      }}
      {...props}
    >
      {children}
    </div>
  );
}
