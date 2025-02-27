import { TicketList } from "./TicketList";

const dummyTickets = [
  {
    id: 1,
    title: "Write Supabase Book",
    status: "Not started",
    author: "Chayan",
  },
  {
    id: 2,
    title: "Read more Packt Books",
    status: "In progress",
    author: "David",
  },
  {
    id: 3,
    title: "Make videos for the YouTube Channel",
    status: "Done",
    author: "David",
  },
];

export default function TicketListPage() {
  return (
    <section className="">
      <div className="px-4 py-2">
        <h2 className="text-2xl font-bold">My tickets</h2>
      </div>
      <hr className=" border-black" />
      <div className="px-2 md:px-0">
        <TicketList tickets={dummyTickets} />
      </div>
    </section>
  );
}
