import React from "react";
import Image from "next/image";
import { NavLink } from "shared/ui/nav-link";
import { LINKS } from "widgets/navigation/model";

export const Navigation = () => {
    return (
        <nav className="bg-black flex justify-between p-4 mt-auto">
            <NavLink path="/">
                <Image
                    src={"/nav/logo.svg"}
                    alt={"Plasma Dynamics"}
                    width={336}
                    height={40}
                ></Image>
            </NavLink>
            <ul className={"flex gap-8 items-center"}>
                {LINKS.map((link, index) => (
                    <li key={index}>
                        <NavLink path={link.path}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
