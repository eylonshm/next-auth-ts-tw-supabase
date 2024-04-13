import { Input, Button } from "./components";

const EMAIL_INPUT_ID = "email";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center gap-2">
        <label htmlFor={EMAIL_INPUT_ID}>Email</label>
        <form className="flex flex-col gap-4 ">
          <Input />
          <Button text="Send Email" />
        </form>
      </div>
    </main>
  );
}
