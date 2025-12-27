"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BodyBackgroundController() {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body;

    // ลบ class background เก่า
    body.classList.remove("bg-white", "body-bg-dark");

    // เพิ่ม class background ตาม route
    switch (pathname) {
      case "/link":
        body.classList.add("body-bg-dark");
        break;
      default:
        body.classList.add("bg-white");
    }
  }, [pathname]);

  return null; // ไม่ render element ใด ๆ
}
