"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";
// for merge two header purpose
import { useEffect, useMemo } from "react";
import { useHeader } from "../_lib/HeaderContext";

const navLink = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { setExtraHeader } = useHeader();

  const nav = useMemo(
    () => (
      <nav>
        {navLink.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");
          return (
            <Link
              className={
                "text-neutral-950 " + (isActive ? "font-bold underline" : "")
              }
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    ),
    [pathname],
  );

  useEffect(() => {
    setExtraHeader(nav);

    return () => setExtraHeader(null);
  }, [nav]);

  return <>{children}</>;
}