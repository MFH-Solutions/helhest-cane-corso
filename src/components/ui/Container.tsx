import React from "react";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  // 8pt spacing system: px-4 (16px) md:px-8 (32px) lg:px-12 (48px)
  const defaultClass = "container mx-auto px-4 md:px-8 lg:px-12";

  return (
    <div className={`${defaultClass} ${className || ""}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
