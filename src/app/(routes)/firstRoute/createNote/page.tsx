import { createServerClient } from "@/app/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Button } from "@/app/components";

const handleSubmit = async (formData: FormData) => {
  "use server";

  const superbase = createServerClient();
  const note = formData.get("note");
  const { error } = await superbase
    .from("notes")
    .insert([{ title: note }])
    .select("*");

  if (error) return;
  revalidatePath("/firstRoute", "page");
  return redirect("/firstRoute");
};

const CreateNote = () => {
  return (
    <form action={handleSubmit} className="flex flex-col gap-4 p-3 ">
      <label htmlFor="note">Note</label>
      <input name="note" placeholder="Write your note here..." />
      <Button text="Submit" />
    </form>
  );
};

export default CreateNote;
