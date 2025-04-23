import React from "react";

interface TextContentProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export const TextContent = (props: TextContentProps) => {
    const { title, children, className } = { ...props };
    return (
        <div className={"flex flex-col gap-6 px-20 " + className}>
            <h2 className={"header-2"}>{title}</h2>

            <p className={"regular-text"}>{children}</p>
        </div>
    );
};
