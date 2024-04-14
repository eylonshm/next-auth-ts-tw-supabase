"use client";

import { login } from "@/app/actions";
import { Button, Input } from "@/app/components";
import Link from "next/link";
import { useCallback, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onClickLogin = useCallback(async () => {
    setLoading(true);
    try {
      await login(email, password);
      setLoading(false);
    } catch (error) {
      console.error("Error logging in2");
      console.error(error);
      setLoading(false);
    }
  }, [email, password]);

  return (
    <div className="flex flex-col gap-2 p-16">
      <Input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        autoComplete="email"
      />
      <Input
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        autoComplete="password"
      />
      <Button text="Login" onClick={onClickLogin} loading={loading} />
      <span className="text-center text-sm text-gray-500">
        Dont have account yet? <Link href="/register">Register</Link>
      </span>
    </div>
  );
};

export default Login;
