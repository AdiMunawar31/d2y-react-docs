import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        cn(
          "relative text-sm font-medium transition-colors",
          "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-primary after:transition-transform",
          isActive && "text-white after:scale-x-100",
          isPending && "text-slate-300 animate-pulse",
          !isActive && "text-slate-400 hover:text-white"
        )
      }
    >
      {children}
    </NavLink>
  );
}

export default NavItem;
