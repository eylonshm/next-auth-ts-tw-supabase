"use client";

import { register } from "@/app/actions";
import { Button, Input } from "@/app/components";
import Link from "next/link";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickResigter = () => register(email, password);

  return (
    <div className="flex flex-col gap-2 p-16">
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <Button text="Register" onClick={onClickResigter} />
      <span className="text-center text-sm text-gray-500">
        Have an account already? <Link href="/auth/login">Login</Link>
      </span>
    </div>
  );
};

export default Register;
