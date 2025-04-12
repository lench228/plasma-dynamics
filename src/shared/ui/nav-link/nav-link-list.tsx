"use client";

import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { iLink } from "widgets/navigation/model";

interface NavLinkListProps {
    links?: iLink[];
    isOpen: boolean;
}

export const NavLinkList = React.forwardRef<HTMLDivElement, NavLinkListProps>(
    ({ links, isOpen }, ref) => {
        return (
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={ref}
                        className="absolute top-full left-0 z-50 overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                                height: { duration: 0.3, ease: "easeInOut" },
                                opacity: { duration: 0.2 },
                            },
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                                height: { duration: 0.2 },
                                opacity: { duration: 0.1 },
                            },
                        }}
                    >
                        <motion.ul className="bg-secondary p-4 w-full min-w-[200px] shadow-lg">
                            {links?.map((item, index) => (
                                <motion.li
                                    key={item.label}
                                    className="py-2 text-white hover:text-accent transition-colors"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{
                                        x: 0,
                                        opacity: 1,
                                        transition: {
                                            delay: index * 0.05,
                                            duration: 0.2,
                                        },
                                    }}
                                >
                                    <Link href={item.path}>{item.label}</Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);

NavLinkList.displayName = "NavLinkList";
