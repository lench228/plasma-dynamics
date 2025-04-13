"use client";

import Link from "next/link";
import clsx from "clsx";

export function Breadcrumb({ children }: { children: React.ReactNode }) {
    return <nav className="container py-4">{children}</nav>;
}

export function BreadcrumbList({ children }: { children: React.ReactNode }) {
    return <ol className="flex items-center gap-2">{children}</ol>;
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
        <Link href={href} className={clsx("text-sm font-medium hover:underline", className)}>
            {children}
        </Link>
    );
}

export function BreadcrumbSeparator() {
    return <span className="text-muted-foreground/50">/</span>;
}
export function BreadcrumbPage({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <span className={clsx("text-sm font-medium text-foreground", className)}>{children}</span>
    );
}
