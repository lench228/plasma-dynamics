import React from "react";

import Link from "next/link";

interface NavLinkProps {
    path: string;
    children?: React.ReactNode;
}

export const NavLink = (props: NavLinkProps) => {
    const { path, children } = { ...props };
    return (
        <Link
            className={"font-manrope regular-text text-white hover:text-accent transition-colors"}
            href={path}
        >
            {children}
        </Link>
    );
};
