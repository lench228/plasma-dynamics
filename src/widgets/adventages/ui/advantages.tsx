import React from "react";
import { ADVANTAGES } from "widgets/adventages/model";
import { Figure } from "widgets/figure";

export const Advantages = () => {
    return (
        <section>
            <ul>
                {ADVANTAGES.map((advantage, index) => (
                    <Figure
                        key={advantage.title}
                        image={advantage.image}
                        texts={advantage.texts}
                        reversed={index % 2 == 0}
                        title={advantage.title}
                        variant={"hero"}
                    />
                ))}
            </ul>
        </section>
    );
};
