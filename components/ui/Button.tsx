import Link from "next/link";
import type { ReactNode } from "react";
export default function Button({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  const className = `button ${secondary ? "button-secondary" : "button-primary"}`;
  if (/^https?:\/\//.test(href)) {
    return <a className={className} href={href}>{children}</a>;
  }
  return <Link className={className} href={href}>{children}</Link>;
}
