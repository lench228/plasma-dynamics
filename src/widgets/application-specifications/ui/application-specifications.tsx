import React from "react";
import {
    Specification,
    SpecificationProps,
} from "widgets/application-specifications/ui/specification";

interface ApplicationSpecificationsProps {
    items: SpecificationProps[];
    title: string;
}

export const ApplicationSpecifications = (props: ApplicationSpecificationsProps) => {
    const { items, title } = { ...props };
    return (
        <section>
            <h3 className={"header-3 header-underline"}>{title}</h3>
            <ul className={"flex flex-col gap-8 py-12"}>
                {items.map((item) => (
                    <Specification key={item.title} {...item} />
                ))}
            </ul>
        </section>
    );
};
