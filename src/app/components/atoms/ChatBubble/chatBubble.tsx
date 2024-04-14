"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const ChatBubble = () => {
  useEffect(() => {
    Crisp.configure("537668b5-fd32-4792-a12f-8a28e3a87ad9", {
      // Change the locale to your preferred language
      locale: "en",
    });
  });

  return null;
};
