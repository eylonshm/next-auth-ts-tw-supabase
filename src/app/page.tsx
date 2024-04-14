import { Suspense } from "react";
import { Input, Button } from "./components";
import { sendEmail } from "./utils/emails";
import { ItemsList } from "./components/pages/ItemsList/itemsList";

const EMAIL_INPUT_ID = "email";

export default function Home() {
  // TODO: Check supabase prod checklist: https://supabase.com/docs/guides/platform/going-into-prod
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center gap-2">
        <form className="flex flex-col gap-4 " action={sendEmail}>
          <label htmlFor={EMAIL_INPUT_ID}>Email</label>
          <Input id="email" name="email" placeholder="Enter your email" />
          <Button text="Send Email" type="submit" />
        </form>
        <Suspense fallback={<div>Loading...</div>}>
          <ItemsList />
        </Suspense>
      </div>
    </main>
  );
}
