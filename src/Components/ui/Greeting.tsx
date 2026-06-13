"use client";

import { useEffect, useState } from "react";

// Time-based greeting computed on the client to avoid SSR/hydration mismatch.
export default function Greeting() {
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(
      hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening"
    );
  }, []);

  return <>{greeting}</>;
}
