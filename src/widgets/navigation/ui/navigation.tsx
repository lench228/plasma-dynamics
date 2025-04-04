import React from "react";
import Image from "next/image";
import { NavLink } from "shared/ui/nav-link";

export const Navigation = () => {
    return (
        <nav className="bg-black text-white flex justify-between p-4">
            <NavLink path="/">
                <Image
                    src={"/nav/logo.svg"}
                    alt={"Plasma Dynamics"}
                    width={336}
                    height={40}
                ></Image>
            </NavLink>
            <ul className={"flex"}>
                <li></li>

                <li>
                    <NavLink path={"/about"}>О нас</NavLink>
                </li>
                <li>
                    <NavLink path={"/goods"}>Услуги</NavLink>
                </li>
                <li>
                    <NavLink path={"/examples"}>Примеры</NavLink>
                </li>
                <li>
                    <NavLink path={"/contacts"}>Контакты</NavLink>
                </li>
            </ul>
        </nav>
    );
};
