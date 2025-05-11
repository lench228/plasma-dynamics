"use client";

import React from "react";
import Image from "next/image";

import { LayoutGroup } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LINKS } from "widgets/navigation/model";
import { NavLink } from "shared/ui";
import { MobileSidebar } from "widgets/mobile-sidebar";

export default function Navigation() {
    const curPath = usePathname().split("/")[1];

    const [toggle, setToggle] = React.useState(false);

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

            <svg
                onClick={() => setToggle(true)}
                className={"sm:hidden block"}
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M6.66667 30H33.3333C34.25 30 35 29.25 35 28.3333C35 27.4167 34.25 26.6667 33.3333 26.6667H6.66667C5.75 26.6667 5 27.4167 5 28.3333C5 29.25 5.75 30 6.66667 30ZM6.66667 21.6667H33.3333C34.25 21.6667 35 20.9167 35 20C35 19.0833 34.25 18.3333 33.3333 18.3333H6.66667C5.75 18.3333 5 19.0833 5 20C5 20.9167 5.75 21.6667 6.66667 21.6667ZM5 11.6667C5 12.5833 5.75 13.3333 6.66667 13.3333H33.3333C34.25 13.3333 35 12.5833 35 11.6667C35 10.75 34.25 10 33.3333 10H6.66667C5.75 10 5 10.75 5 11.6667Z"
                    fill="white"
                />
            </svg>

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

            {toggle && <MobileSidebar toggleState={setToggle} />}
        </nav>
    );
}
