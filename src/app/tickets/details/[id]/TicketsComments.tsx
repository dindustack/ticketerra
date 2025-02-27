"use client";
import { Send } from "lucide-react";
import { useRef } from "react";
const comments = [
  {
    author: "Dave",
    date: "2027-01-01",
    content: "This is a comment from Dave",
  },
  {
    author: "Alice",
    date: "2027-01-02",
    content: "This is a comment from Alice",
  },
];
export function TicketComments() {
  const commentRef = useRef(null);
  return (
    <footer>
      <h3 className="text-xl font-bold">Comments</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert("TODO: Add comment");
        }}
        className="py-4"
      >
        <div className="flex items-end space-x-2 md:space-x-4 space-y-4">
          <div className="w-12 h-11 rounded-full bg-purple"></div>
          <input
            ref={commentRef}
            placeholder="Add a comment"
            className="border border-black w-full rounded-md p-2"
          />
          <button
            type="button"
            className="bg-purple w-[fit-content] font-semibold text-white py-2 rounded-md px-4"
          >
            <Send />
          </button>
        </div>
      </form>
      <section>
        {comments.map((comment) => (
          <article key={comment.date}>
            <div className="flex flex-col space-y-2 border border-black mb-4 rounded-md py-4 px-2 md:px-4 bg-white">
              <span>{`Ticket ${comment.content}`}</span>
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center text-center w-7 h-7 rounded-full bg-black text-white px-1">
                    AL
                  </div>

                  <span className="text-lg font-bold">{comment.author}</span>
                </div>
                <span className="text-[1rem] text-gray">{comment.date}</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </footer>
  );
}
