"use client";

import Link from "next/link";
import clsx from "clsx";

export function Breadcrumb({ children }: { children: React.ReactNode }) {
    return <nav className="container py-4">{children}</nav>;
}

export function BreadcrumbList({ children }: { children: React.ReactNode }) {
    return <ol className="flex items-center gap-3">{children}</ol>;
}

export function BreadcrumbItem({ children }: { children: React.ReactNode }) {
    return <li className="flex items-center gap-2">{children}</li>;
}

export function BreadcrumbLink({
    href,
    children,
    className,
}: {
    href: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <Link
            href={href}
            className={clsx("big-text text-[#3A3A3A] font-medium hover:underline", className)}
        >
            {children}
        </Link>
    );
}

export function BreadcrumbSeparator() {
    return (
        <svg
            width="3"
            height="22"
            viewBox="0 0 3 22"
            fill="E1E1E1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="3" height="22" rx="1.5" fill="#D9D9D9" />
        </svg>
    );
}

export function BreadcrumbPage({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <span className={clsx("big-text font-medium text-accent underline", className)}>
            {children}
        </span>
    );
}
