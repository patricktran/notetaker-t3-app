import { useState } from "react";

import ReactMarkdown from "react-markdown";

import { type RouterOutputs } from "~/utils/api";

//this uses tPRC to track changes to our primsa schema to automatically provide a type def
type Note = RouterOutputs["note"]["getAll"][0];

type Props = {
  note: Note;
  onDelete: () => void;
};

export const NoteCard = ({ note, onDelete }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body m-0 p-3">
        <div
          className={`collapse-arrow collapse ${
            isExpanded ? "collapse-open" : ""
          }`}
          onClick={(e) => setIsExpanded((prevState) => !prevState)}
        >
          <div className="collapse-title text-xl font-bold">{note.title}</div>
          <div className="collapse-content">
            {/* for daisyUI */}
            <article className="prose lg:prose-xl">
              {/* tailwind typography to give nice look to the markdown */}
              <ReactMarkdown>{note.content}</ReactMarkdown>
            </article>
          </div>
        </div>
        <div className="card-actions mx-2 flex justify-end">
          <button className="btn-warning btn-xs btn px-5" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
