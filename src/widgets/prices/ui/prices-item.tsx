"use client";
import { AnimatePresence, motion } from "framer-motion";

import React from "react";

import { iImageSection } from "shared/types/section";
import Image from "next/image";

interface PricesItemProps {
    item: iImageSection;
    index: number;
}

export const PricesItem = (props: PricesItemProps) => {
    const { item, index } = { ...props };
    return (
        <div>
            <AnimatePresence>
                <motion.li
                    initial={{ filter: "blur(20px)", opacity: 0 }}
                    whileInView={{
                        filter: "blur(0px)",
                        opacity: 1,
                        transition: {
                            type: "spring",
                            bounce: 0.1,
                            duration: 0.8,
                        },
                    }}
                    className={
                        "bg-main flex flex-col relative min-h-[450px] overflow-x-hidden px-6 py-8"
                    }
                >
                    <h4 className={"big-text mb-3"}>{item.title}</h4>

                    <p className={"leading-6"} key={index}>
                        {item.texts}
                    </p>

                    <Image
                        className={"absolute bottom-0 right-[-10px] z-0"}
                        src={item.image}
                        alt={"decor"}
                        width={222}
                        height={231}
                        style={{ height: "auto", width: "auto" }}
                    ></Image>

                    <span className={"mt-auto"}>[{index}]</span>
                </motion.li>
            </AnimatePresence>
        </div>
    );
};
