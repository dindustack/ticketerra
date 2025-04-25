"use client"
import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  path: string;
};

const navItems: NavItem[] = [
  { label: "Ticket List", path: "/tickets" },
  { label: "Create New Ticket", path: "/tickets/new" },
  { label: "Users", path: "/tickets/users" },
];

export default function Nav() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="flex flex-row justify-between mb-8">
      <ul className="flex flex-row space-x-4 justify-center items-center">
        {navItems.map((item, index) => (
          <div className="" key={index}>
            <li>
              <Link
                role="button"
                href={item.path}
                className={`flex space-x-2  px-3 py-2 rounded-sm
                  ${isActive(item.path) && "bg-cyan text-purple"}
                  `}
              >
                {isActive(item.path) && (
                  <CircleCheckBig className="text-purple" />
                )}
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
}
