import Link from 'next/link';
import React from 'react';
import { HiExternalLink } from 'react-icons/hi';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ButtonLink({ href, children, className }: ButtonLinkProps) {
  return (
    <Link
      className={`flex items-center justify-between rounded-xl bg-blue p-5 hover:bg-blue-400 ${className}`}
      href={href}
      target="_blank">
      <div>{children}</div>
      <HiExternalLink />
    </Link>
  );
} // Usage:
