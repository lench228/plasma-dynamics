import React from "react";

export interface TextContentProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export const TextContent = (props: TextContentProps) => {
    const { title, children, className } = { ...props };
    return (
        <div className={"flex flex-col sm:gap-6  px-2 " + className}>
            <h3 className={"header-3"}>{title}</h3>

            <p className={"regular-text"}>{children}</p>
        </div>
    );
};
