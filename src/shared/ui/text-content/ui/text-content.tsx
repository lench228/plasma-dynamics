import React from "react";

export interface TextContentProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export const TextContent = (props: TextContentProps) => {
    const { title, children, className } = { ...props };
    return (
        <div className={"flex flex-col sm:gap-6 sm:px-20 px-2 " + className}>
            <h2 className={"header-2"}>{title}</h2>

            <p className={"regular-text"}>{children}</p>
        </div>
    );
};
