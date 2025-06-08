'use client';

import Link from "next/Link";
import { usePathname } from "next/navigation";
import "./style.css";

const navLink = [
  { name: "Register", href: '/register' },
  { name: "Login", href: '/login' },
  { name: "Forgot password", href: '/forgot-password' },
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()
  return (
    <html lang="en">
      <body>
        <header>
          {
            navLink.map((link) => {
              const isActive = pathname === link.href || false;
              return (
                <Link className={'text-blue-500' + (isActive ? 'font-bold' : '')} href={link.href} key={link.name}>{link.name}</Link>
              )
            })
          }
        </header>
        {children}
      </body>
    </html>
  )
}
