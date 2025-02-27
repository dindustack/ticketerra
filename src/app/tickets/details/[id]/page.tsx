import { TicketComments } from "./TicketsComments";

export default function TicketDetailsPage({ params }: any) {
  return (
    <article>
      <header className="space-y-4">
        <div className="text-[1rem] space-x-2">
          <span>{` Ticket ${params.id}`}</span>
          <span className="px-2 py-1 rounded-full bg-green-600 text-white font-medium">
            Open
          </span>
        </div>
        <h2 className="text-2xl font-bold">Ticket title should be here</h2>
        <span>
          Ticket Details page with <strong>ID={params.id}</strong>
        </span>

        <div className="flex flex-col space-y-4">
          {/* author name */}
          <div className="flex space-x-6">
            <span>Created by</span>
            <span>AuthorName</span>
          </div>
          {/* Start date */}
          <div className="flex space-x-8">
            <span>Start date</span>
            <span>December 10 2025</span>
          </div>
        </div>
      </header>

      <hr className="my-4 border-[0.5px] border-gray" />
      <TicketComments />
    </article>
  );
}
