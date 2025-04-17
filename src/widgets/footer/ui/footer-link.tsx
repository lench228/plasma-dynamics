import React from "react";

interface FooterLinkProps {
    children: React.ReactNode;
}

export const FooterLink = (props: FooterLinkProps) => {
    const { children } = { ...props };
    return <li>{children}</li>;
};
