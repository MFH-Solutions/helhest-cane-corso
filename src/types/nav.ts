export type NavItem = {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
  badge?: {
    text: string;
    variant: "default" | "primary";
  };
};

export type NavDropdown = {
  id: string;
  label: string;
  icon: React.ReactNode;
  items: Array<{
    id: string;
    label: string;
    href: string;
  }>;
};
