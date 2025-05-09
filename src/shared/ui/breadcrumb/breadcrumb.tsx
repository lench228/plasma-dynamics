"use client";

import React from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import clsx from "clsx";

export function Breadcrumb({ children }: { children: React.ReactNode }) {
    return <nav className="container py-6 sm:p-10 border-b-2 border-separators">{children}</nav>;
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

const pathTranslations: Record<string, string> = {
    methods: "Способы напыления",
    about: "О нас",
    contacts: "Контакты",
    types: "Типы покрытий",
    flame: "Пламенное напыление",
    plasma: "Плазменное напыление",
    coverages: "Напыляемые покрытия",
    "wear-resistant": "Износостойкое покрытие",
};

export default function Breadcrumbs() {
    const segments = usePathname().split("/");
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {segments.map((segment, index) => {
                    const isLast = index === segments.length - 1;
                    const href = `/${segments.slice(0, index + 1).join("/")}`;
                    const translatedSegment = pathTranslations[segment] || segment;

                    return (
                        <React.Fragment key={href}>
                            {isLast ? (
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="capitalize">
                                        {translatedSegment}
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            ) : (
                                <>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href={href} className="capitalize">
                                            {translatedSegment}
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                </>
                            )}
                        </React.Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
