import React from "react";
import { Form } from "features/form";
import Image from "next/image";

export default function ContactUs() {
    return (
        <section className={"flex flex-col items-center gap-20 "}>
            <h2 className={"header-2 mt-40"}>Свяжитесь с нами</h2>
            <main className={"flex w-full items-center justify-center gap-10  bg-[#212121]"}>
                <Image
                    src={"/contact-us/bullet.webp"}
                    alt={"Пуля"}
                    width={554}
                    height={598}
                    className={"hidden sm:block"}
                ></Image>

                <Form />
            </main>
        </section>
    );
}
