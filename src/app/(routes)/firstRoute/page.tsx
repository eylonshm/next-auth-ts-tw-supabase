import Link from "next/link";
import { createServerClient } from "@/app/utils/supabase/server";
import { Note } from "@/types";

const getData = async () => {
  "use server";
  const supabase = createServerClient();

  const { data, error } = await supabase
    .from("notes")
    .select()
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
  }

  return JSON.parse(JSON.stringify(data));
};

const FirstRoute = async () => {
  const notes = await getData();

  return (
    <div className="flex flex-col gap-3 p-5">
      <Link
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        href="/firstRoute/createNote"
      >
        Create Note
      </Link>

      <div className="flex flex-col gap-2 shadow-lg rounded-lg p-3">
        {notes.map((note: Note) => (
          <div key={note.id} className="p-3 border rounded-md shadow-sm">
            {note.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstRoute;
