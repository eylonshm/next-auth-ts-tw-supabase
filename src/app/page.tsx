import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
      </div>
    </main>
  );
}
