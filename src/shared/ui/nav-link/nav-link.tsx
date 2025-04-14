"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { iLink } from "widgets/navigation/model";
import { NavLinkList } from "./nav-link-list";

interface NavLinkProps {
    path: string;
    children: React.ReactNode;
    links?: iLink[];
    exact?: boolean;
    isSelected: boolean;
}

export const NavLink = (props: NavLinkProps) => {
    const { path, links, children, isSelected } = props;

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link
                href={path}
                className={clsx(
                    "group font-manrope regular-text",
                    "text-white hover:text-accent transition-colors"
                )}
            >
                <div className="flex items-center gap-2">
                    {children}

                    {links && (
                        <>
                            <motion.svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                animate={{ rotate: isHovered ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <path
                                    d="M18 9L12 15L6 9"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </motion.svg>
                        </>
                    )}
                </div>
                <AnimatePresence>
                    {isSelected && (
                        <motion.div
                            layoutId="underline"
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                    )}
                </AnimatePresence>
            </Link>

            {links?.length && <NavLinkList links={links} isOpen={isHovered} />}
        </div>
    );
};
