import React from "react";
import Image from "next/image";
import { FOOTER_ITEMS } from "widgets/footer/model";
import { FooterLinks } from "widgets/footer/ui/footer-links";

export default function Footer() {
    return (
        <footer
            className={
                "grid grid-rows-2 grid-cols-4 px-10 py-12 bg-main text-separators  regular-text gap-10 items-start"
            }
        >
            <div className={"w-full col-span-2"}>
                <Image
                    src={"/footer/fond.webp"}
                    alt={"Фонд содействия инновациям"}
                    width={112}
                    height={56}
                />
                <p className={"small-text w-1/2 text-pretty mt-6"}>
                    Проект создан в рамках федерального проекта «Платформа университетского
                    технологического предпринимательства»
                </p>
            </div>
            {FOOTER_ITEMS.map((item) => (
                <FooterLinks items={item.items} key={item.title} title={item.title} />
            ))}
            <div className={" w-full  col-span-4"}>
                <span className={"display-text"}>Plasma Dynamics</span>
                <p className={"small-text w-1/7"}>
                    Товарный знак © 2024 Plasma Dynamics Авторское право сохранено.
                </p>
            </div>
        </footer>
    );
}
