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
                        <motion.ul className="bg-white  w-[180px] shadow-lg">
                            {links?.map((item, index) => (
                                <motion.li
                                    key={item.label}
                                    className="py-2 text-main hover:text-accent transition-colors  overflow-hidden text-ellipsis   whitespace-nowrap"
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
                                    <Link className={"py-4 pl-4 h-full "} href={item.path}>
                                        {item.label}
                                    </Link>
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
