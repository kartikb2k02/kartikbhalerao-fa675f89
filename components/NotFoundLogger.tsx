"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function NotFoundLogger() {
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return null;
}
