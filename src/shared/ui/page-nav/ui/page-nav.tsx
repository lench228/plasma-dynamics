import React from "react";

import { iNavLink } from "widgets/navigation/model/navigation";
import { BreadcrumbLink } from "shared/ui";

interface TypesNavProps {
    link: iNavLink;
}

export const PageNav = (props: TypesNavProps) => {
    const { link } = { ...props };
    return (
        <nav className={"flex-col gap-2 px-2  hidden sm:flex col-span-1"}>
            <h4 className={"text-2xl text-white py-4 px-3 text-center w-full  bg-main rounded-xl "}>
                {link.label}
            </h4>
            <ul
                className={"flex flex-col gap-2 w-full  rounded-xl shadow-xl py-6 px-6 items-start"}
            >
                {link.links &&
                    link.links.map((link) => (
                        <li key={link.label} className={"text-2xl overflow-hidden  w-full "}>
                            <BreadcrumbLink href={link.path}>{link.label}</BreadcrumbLink>
                        </li>
                    ))}
            </ul>
        </nav>
    );
};
