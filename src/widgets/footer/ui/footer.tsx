import React from "react";
import Image from "next/image";

import { LINKS } from "widgets/navigation";
import { NavLink } from "shared/ui";

export default function Footer() {
    return (
        <footer
            className={
                "flex flex-col  bg-main text-separators p-4 regular-text gap-10 items-start " +
                "sm:grid sm:grid-rows-2 sm:grid-cols-4 sm:px-10 sm:py-12"
            }
        >
            <div className={"w-full sm:col-span-2"}>
                <Image
                    src={"/footer/fond.webp"}
                    alt={"Фонд содействия инновациям"}
                    width={112}
                    height={56}
                />
                <p className={"small-text w-1/2 text-pretty mt-6"}>
                    Проект создан в рамках федерального проекта «Платформа университетского
                    технологического предпринимательства»
                </p>
            </div>

            <ul className={"w-full flex flex-col gap-2 sm:col-span-2 items-end"}>
                <h3 className={"font-medium mb-6 big-text"}>Карта сайта</h3>
                {LINKS.map((link, index) => (
                    <li key={index}>
                        <NavLink path={link.path} isSelected={false} links={link.links}>
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className={"w-full sm:col-span-4"}>
                <span className={"display-text"}>Plasma Dynamics</span>
                <p className={"small-text w-full sm:w-1/7"}>
                    Товарный знак © 2024 Plasma Dynamics Авторское право сохранено.
                </p>
            </div>
        </footer>
    );
}
