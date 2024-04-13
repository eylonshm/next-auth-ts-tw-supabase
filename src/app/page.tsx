import Image from "next/image";
import { Input } from "./components";

const EMAIL_INPUT_ID = "email";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <label htmlFor={EMAIL_INPUT_ID}>Email</label>
        <Input id={EMAIL_INPUT_ID} />
      </div>
    </main>
  );
}
