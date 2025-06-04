import React from "react";
import { iExample } from "widgets/examples/model";

interface ExampleProps {
    item: iExample;
}

export const Example = (props: ExampleProps) => {
    const { item } = { ...props };
    return (
        <li className={"w-[280px] bg-blue-600 flex flex-col h-[520px] items-center "}>
            <img src={item.image} alt={item.title} className={"mt-auto"}></img>
            <h4 className={"big-text mt-auto"}>{item.title}</h4>
            <p>{item.description}</p>
        </li>
    );
};
