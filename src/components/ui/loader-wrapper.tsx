"use client";

import { useState, useEffect } from "react";
import Loader from "./loader";


export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulated loading time
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <Loader /> : children;
}