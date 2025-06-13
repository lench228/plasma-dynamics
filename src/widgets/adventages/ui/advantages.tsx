import React from "react";
import { ADVANTAGES } from "widgets/adventages/model";
import { Figure } from "shared/ui";

const Advantages = () => {
    return (
        <section>
            <ul className={"flex flex-col gap-4 sm:block"}>
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
export default Advantages;
