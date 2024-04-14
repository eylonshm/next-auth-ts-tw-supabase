"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const ChatBubble = () => {
  useEffect(() => {
    Crisp.configure(process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID!, {
      // Change the locale to your preferred language
      locale: "en",
    });
  });

  return null;
};
