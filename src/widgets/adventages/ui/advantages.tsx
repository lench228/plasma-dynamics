import React from "react";
import { AdvantageItem } from "widgets/adventages/ui/advantage-item";
import { ADVANTAGES } from "widgets/adventages/model";

export const Advantages = () => {
    return (
        <section>
            <ul>
                {ADVANTAGES.map((advantage, index) => (
                    <AdvantageItem
                        key={advantage.title}
                        item={advantage}
                        reversed={index % 2 == 0}
                    ></AdvantageItem>
                ))}
            </ul>
        </section>
    );
};
