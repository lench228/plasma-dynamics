import React from "react";
import classes from "./button.module.css";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "dark" | "white" | "icon";
}

export const Button = (props: ButtonProps) => {
    const { children, variant, disabled, className } = { ...props };
    return (
        <button disabled={disabled} className={clsx(classes.button, classes[variant], className)}>
            {children}
        </button>
    );
};
