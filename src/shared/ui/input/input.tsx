import React from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    validate: (value: string) => boolean;
    label?: string;
    isTextarea?: boolean;
    index: number;
}

export const Input = (props: InputProps) => {
    const { type, label, validate, placeholder, isTextarea, index } = props;
    return (
        <div
            className={clsx(
                "flex flex-col sm:w-[344px] sm:px-0 gap-2 w-full px-10",
                isTextarea && "row-span-3 h-full w-full"
            )}
            key={label}
        >
            {!isTextarea ? (
                <>
                    <label className={"regular-text  text-white"}>{label}</label>
                    <input
                        tabIndex={index + 1}
                        className={
                            "px-6 py-4  regular-text placeholder:text-secondary bg-background-cards rounded-xl"
                        }
                        type={type}
                        onChange={(e) => validate(e.target.value)}
                        placeholder={placeholder}
                    />
                </>
            ) : (
                <fieldset className={"h-full sm:h-1/2 sm:my-auto"}>
                    <label htmlFor={"question"} className={"regular-text text-white"}>
                        {label}
                    </label>
                    <textarea
                        id={"question"}
                        tabIndex={5}
                        className={"bg-background-cards w-full h-full p-4  rounded-xl"}
                        placeholder={placeholder}
                        onChange={(e) => validate(e.target.value)}
                    />
                </fieldset>
            )}
        </div>
    );
};
