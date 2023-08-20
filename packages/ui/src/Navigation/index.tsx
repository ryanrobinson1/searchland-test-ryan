import { Link } from "../Link";
import { Routes } from "shared-ts";

interface NavigationProps {
  routes: Routes[];
}

export const Navigation = ({ routes }: NavigationProps) => {
  return (
    <ul className="flex justify-center gap-12 p-2 border-gray-100 border-b-2">
      {routes.map((route) => (
        <li key={route.name} className="hover:bg-gray-50 rounded p-2">
          <Link href={route.href}>{route.name}</Link>
        </li>
      ))}
    </ul>
  );
};
