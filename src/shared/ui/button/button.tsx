import React from "react";
import classes from "./button.module.css";
import clsx from "clsx";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "dark" | "white" | "icon";
    href: string;
}

export const Button = (props: ButtonProps) => {
    const { children, variant, className, tabIndex, href } = { ...props };
    return (
        <Link
            tabIndex={tabIndex}
            href={href}
            className={clsx(classes.button, classes[variant], className)}
        >
            {children}
        </Link>
    );
};
