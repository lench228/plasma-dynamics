import React from "react";

import { iFooterItem } from "widgets/footer/model";
import { FooterLink } from "widgets/footer/ui/footer-link";

export const FooterLinks = (props: iFooterItem) => {
    const { title, items } = { ...props };
    return (
        <div className={"w-full"}>
            <h3 className={"font-medium mb-6 big-text"}>{title}</h3>
            <ul className={"regular-text flex flex-col gap-4 justify-start"}>
                {items.map((item) => (
                    <FooterLink key={item}>{item}</FooterLink>
                ))}
            </ul>
        </div>
    );
};
