"use client";

import React from "react";

import { SlideInImage } from "widgets/slide-in/ui/slide-in-image";

export const SlideIn = () => {
    return (
        <section className={"grid grid-cols-3  justify-end"}>
            <aside className={"text-main p-20 pt-10 col-span-2"}>
                <h2 className={"header-3 mb-8"}>
                    Мы фокусируемся на <br />
                    <span className={"text-accent"}>качестве и гибкости</span>
                </h2>
                <p className={"small-text "}>
                    Наша репутация основана на многолетнем опыте нанесения покрытий методом
                    термического напыления. Наши клиенты обращаются к нам как к стратегическому
                    партнеру по нанесению покрытий методом термического напыления, поскольку мы
                    уделяем особое внимание гибкости и качеству.
                </p>
            </aside>
            <SlideInImage />
        </section>
    );
};
