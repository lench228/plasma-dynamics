import React from "react";

import { iNavLink } from "widgets/navigation/model/navigation";
import { BreadcrumbLink } from "shared/ui";

interface TypesNavProps {
    link: iNavLink;
}

export const PageNav = (props: TypesNavProps) => {
    const { link } = { ...props };
    return (
        <nav className={"flex-col gap-2 px-16 py-8 hidden sm:flex"}>
            <h4 className={"text-2xl text-white py-4 px-3 text-center w-full  bg-main rounded-xl"}>
                {link.label}
            </h4>
            <ul
                className={
                    "flex flex-col gap-2 items-center w-full  rounded-xl shadow-xl py-6 px-6"
                }
            >
                {link.links &&
                    link.links.map((link) => (
                        <li key={link.label} className={"text-2xl max-w-50"}>
                            <BreadcrumbLink href={link.path}>{link.label}</BreadcrumbLink>
                            <svg
                                width="210"
                                height="2"
                                viewBox="0 0 210 2"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width="210" height="2" fill="#D9D9D9" />
                            </svg>
                        </li>
                    ))}
            </ul>
        </nav>
    );
};
