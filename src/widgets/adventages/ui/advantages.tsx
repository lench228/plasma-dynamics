import React from "react";
import { AdvantageItem, ADVENTAGES } from "widgets/adventages";

export const Advantages = () => {
    return (
        <section>
            <ul>
                {ADVENTAGES.map((advantage, index) => (
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
