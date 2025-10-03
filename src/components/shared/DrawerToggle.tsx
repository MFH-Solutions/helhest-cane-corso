type DrawerToggleProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

export default function DrawerToggle({ ...props }: DrawerToggleProps) {
  return (
    <button
      className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
      onClick={props.onClick}
      aria-label="Open navigation menu"
      aria-expanded="false"
    >
      <img
        src="/icons/nav-toggle.svg"
        className="h-6 w-6"
        alt=""
        aria-hidden="true"
      />
    </button>
  );
}
