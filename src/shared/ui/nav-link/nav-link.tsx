"use client";

import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { iLink } from "widgets/navigation/model";
import { NavLinkList } from "./nav-link-list";
import Link from "next/link";

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
            <div className={clsx("group font-manrope small-text", "text-white  transition-colors")}>
                <p className="flex items-center gap-2">
                    {path[0] === "#" ? <Link href={path}>{children}</Link> : children}

                    {links && (
                        <>
                            <motion.svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 20"
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
                </p>
                <AnimatePresence>
                    {isSelected && (
                        <motion.div
                            layoutId="underline"
                            className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-accent mt-4"
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                    )}
                </AnimatePresence>
            </div>

            {links?.length && <NavLinkList links={links} isOpen={isHovered} />}
        </div>
    );
};
