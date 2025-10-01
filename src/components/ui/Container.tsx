import React from "react";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  const defaultClass = "container mx-auto px-4";
  return (
    <div className={`${defaultClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
