"use client";

import React from "react";
import Image from "next/image";

import { LayoutGroup } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LINKS } from "widgets/navigation/model";
import { NavLink } from "shared/ui";

export default function Navigation() {
    const curPath = usePathname().split("/")[1];

    return (
        <nav className="bg-main flex justify-between p-4 mt-auto sticky top-0 z-50">
            <Link href={"/"}>
                <Image
                    src={"/nav/logo.svg"}
                    alt={"Plasma Dynamics"}
                    width={336}
                    height={40}
                    className={"w-3/4 sm:w-full"}
                ></Image>
            </Link>

            <LayoutGroup id={"underline"}>
                <ul className={" gap-8 items-center sm:flex hidden"}>
                    {LINKS.map((link, index) => (
                        <li key={index}>
                            <NavLink
                                path={link.path}
                                isSelected={"/" + curPath === link.path}
                                links={link.links}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </LayoutGroup>
        </nav>
    );
}
