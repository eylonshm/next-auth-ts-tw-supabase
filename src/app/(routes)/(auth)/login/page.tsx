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

      <script>
        {`
          window.$crisp=[];
          window.CRISP_WEBSITE_ID="537668b5-fd32-4792-a12f-8a28e3a87ad9";
          (function(){
            d=document;
            s=d.createElement("script");
            s.src="https://client.crisp.chat/l.js";
            s.async=1;
            d.getElementsByTagName("head")[0].appendChild(s);
          })();
        `}
      </script>
    </div>
  );
};

export default Login;
