import React from "react";
import { Button } from "shared/ui";

export const Hero = () => {
    return (
        <section className={`bg-hero  w-screen min-h-[80vh] text-white pl-20 pr-80 pt-63 `}>
            <div className={`bg-main/50 p-10 flex flex-col gap-10`}>
                <h1 className="header-1 ">Услуги покрытия термическим напылением</h1>
                <p className={"big-text !font-normal"}>
                    Высококачественные и гибкие услуги по нанесению покрытий термическим напылением
                </p>
                <Button variant={"white"}>Оставить заявку</Button>
            </div>
        </section>
    );
};
