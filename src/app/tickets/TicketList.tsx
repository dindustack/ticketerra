import Link from "next/link";

type ITicketList = {
  id: number;
  title: string;
  status: string;
  author: string;
};

type TicketsProps = {
  tickets: ITicketList[];
};

export function TicketList({ tickets }: TicketsProps) {
  return (
    <div className="pt-4">
      {tickets.map((ticket) => (
        <Link
          key={ticket.id}
          href={`/tickets/details/${ticket.id}`}
          className="cursor"
        >
          <div className="flex flex-col space-y-2 border border-black mb-4 rounded-sm py-4 px-2 bg-white">
            <span>{`Ticket ${ticket.id}`}</span>
            <span className="text-lg font-medium">{ticket.title}</span>
            <span className="px-2 text-purple border border-purple bg-cyan rounded-full w-[fit-content]">
              {ticket.status}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
