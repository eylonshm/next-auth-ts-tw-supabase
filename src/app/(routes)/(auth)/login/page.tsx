"use client";

import { Button, Input } from "@/app/components";
import Link from "next/link";
import { useState } from "react";

const onClickLogin = (email, password) => [];

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        placeholder="Password"
      />
      <Button text="Login" />
      <span className="text-center text-sm text-gray-500">
        Dont have account yet? <Link href="/register">Register</Link>
      </span>
    </div>
  );
};

export default Login;
