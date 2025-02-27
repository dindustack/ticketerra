import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
export default function Nav() {
  return (
    <nav className="flex flex-row justify-between mb-8">
      <ul className="flex flex-row space-x-4 justify-center items-center">
        <li>
          <Link
            role="button"
            href="/tickets"
            className="flex space-x-2 bg-cyan text-purple px-3 py-2 rounded-lg"
          >
            <CircleCheckBig className="text-purple" />
            <span className="font-medium">Ticket List</span>
          </Link>
        </li>
        <li>
          <Link role="button" href="/tickets/new">
            Create new Ticket
          </Link>
        </li>
        <li>
          <Link role="button" href="/tickets/users">
            User List
          </Link>
        </li>
      </ul>
    </nav>
  );
}
