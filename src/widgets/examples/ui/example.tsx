import React from "react";
import { iExample } from "widgets/examples/model";

interface ExampleProps {
    item: iExample;
}

export const Example = (props: ExampleProps) => {
    const { item } = { ...props };
    return (
        <li className={"w-[320px] bg-blue-600 flex flex-col  items-center gap-4"}>
            <div className={"w-full h-[300px] bg-[#F0F0F0] flex"}>
                <img src={item.image} alt={item.title} className={"m-auto "} />
            </div>

            <div className={"flex flex-col justify-between gap-2"}>
                <h4 className={"big-text "}>{item.title}</h4>
                <p className={""}>{item.description}</p>
            </div>
        </li>
    );
};
