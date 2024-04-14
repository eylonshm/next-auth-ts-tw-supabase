"use client";

import { login } from "@/app/actions/auth/login";
import { Button, Input } from "@/app/components";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onClickLogin = async () => {
    setLoading(true);
    try {
      await login(email, password);
    } catch (error) {
      console.error("Error logging in");
      console.error(error);
    }
    setLoading(false);
  };

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
        type="password"
      />
      <Button text="Login" onClick={onClickLogin} loading={loading} />
      <span className="text-center text-sm text-gray-500">
        Dont have account yet? <Link href="/register">Register</Link>
      </span>
    </div>
  );
};

export default Login;
