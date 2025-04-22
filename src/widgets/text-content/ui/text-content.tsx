import React from "react";

interface TextContentProps {
    title: string;
    texts: string[];
}

export const TextContent = (props: TextContentProps) => {
    const { title, texts } = { ...props };
    return (
        <div>
            <h2 className={"header-2"}>{title}</h2>

            {texts.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
};
