import React from "react";

interface ContactProps {
    label: string;
    value: string;
}

export const Contact = (props: ContactProps) => {
    const { value, label } = { ...props };
    return (
        <li className={"flex flex-col gap-4"}>
            <span className={" big-text "}>{label}</span>
            <svg
                width="321"
                height="2"
                viewBox="0 0 321 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="321" height="2" fill="#E1E1E1" />
            </svg>
            <span className={"regular-text font-bold"}>{value}</span>
        </li>
    );
};
