import React from "react";
import classNames from "./input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    validate: (value: string) => boolean;
    label: string;
}

export const Input = (props: InputProps) => {
    const { type, label, validate } = props;
    return (
        <div className={classNames.container}>
            <label>{label}</label>
            <input type={type} onChange={(e) => validate(e.target.value)} />
        </div>
    );
};
