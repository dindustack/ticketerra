"use client";
import { useRef } from "react";
export default function CreateTicket() {
  const ticketTitleRef = useRef(null);
  const ticketDescriptionRef = useRef(null);
  return (
    <article>
      <h3 className="font-bold text-xl">Create a new ticket</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert("TODO: Add a new ticket");
        }}
      >
        <div className="flex flex-col space-y-4 pt-4">
          <input
            ref={ticketTitleRef}
            placeholder="Add a title"
            className="border border-black p-4 rounded-sm"
          />
          <textarea
            ref={ticketDescriptionRef}
            placeholder="Add a comment"
            className="border border-black p-4 rounded-sm"
          />
          <button
            type="submit"
            className="bg-purple w-[fit-content] font-semibold text-white py-2 rounded-sm px-4"
          >
            Create ticket now
          </button>
        </div>
      </form>
    </article>
  );
}
