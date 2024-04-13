import { Input, Button } from "./components";

const EMAIL_INPUT_ID = "email";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center gap-2">
        <form className="flex flex-col gap-4 ">
          <Input />
          <form>
            <label htmlFor={EMAIL_INPUT_ID}>Email</label>
            <input id="email" name="email" placeholder="Enter your email" />
          </form>
          <Button text="Send Email" type="submit" />
        </form>
      </div>
    </main>
  );
}
