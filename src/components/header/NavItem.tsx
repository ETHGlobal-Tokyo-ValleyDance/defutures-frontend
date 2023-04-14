import { Link, useLocation } from "react-router-dom";
import { cn } from "utils/cn";

interface NavItemProps {
  content: string;
  path: string;
}

export const NavItem = ({ content, path }: NavItemProps) => {
  const location = useLocation();
  const activated = location.pathname === path;

  return (
    <Link
      className={cn(
        " cursor-pointer mr-5",
        activated ? "border-b-2 border-b-black pb-1.5" : "pb-2"
      )}
      to={path}
    >
      <p
        className={cn(
          "font-lg",
          activated ? "font-semibold" : "font-light text-neutral-400"
        )}
      >
        {content}
      </p>
    </Link>
  );
};
