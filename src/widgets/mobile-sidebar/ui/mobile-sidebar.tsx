"use client";

import React, { useEffect, useRef } from "react";
import { LINKS } from "widgets/navigation";
import { NavLink } from "shared/ui";

interface MobileSidebarProps {
    toggleState: (state: boolean) => void;
}

export const MobileSidebar = (props: MobileSidebarProps) => {
    const { toggleState } = props;

    const containerRef = useRef(null);

    useEffect(() => {
        const handleBodyClick = (e: MouseEvent) => {
            e.stopPropagation();
            if (containerRef.current) {
                if (e.target !== containerRef.current) {
                    toggleState(false);
                }
            }
        };

        document.body.addEventListener("click", handleBodyClick);
        return () => {
            document.body.removeEventListener("click", handleBodyClick);
        };
    });
    return (
        <nav
            ref={containerRef}
            className={"fixed top-0 right-0 z-50 bg-main p-10 h-screen flex flex-col gap-4 ml-auto"}
        >
            {LINKS.map((link) => (
                <div key={link.path}>
                    <NavLink key={link.path} path={link.path} isSelected={false}>
                        {link.label}
                    </NavLink>
                    <ul className={"gap-2"}>
                        {link.links &&
                            link.links.map((link) => (
                                <li key={link.path} className={"px-2"}>
                                    {" "}
                                    <NavLink key={link.path} path={link.path} isSelected={false}>
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                    </ul>
                </div>
            ))}
        </nav>
    );
};
