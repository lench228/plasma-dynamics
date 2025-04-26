import React from "react";
import { ADVANTAGES } from "widgets/adventages/model";
import { Figure } from "widgets/figure";

export const Advantages = () => {
    return (
        <section>
            <ul>
                {ADVANTAGES.map((advantage, index) => (
                    <Figure
                        item={{
                            image: advantage.image,
                            texts: advantage.texts,
                            title: advantage.title,
                        }}
                        key={advantage.title}
                        reversed={index % 2 == 0}
                        variant={"hero"}
                    />
                ))}
            </ul>
        </section>
    );
};
