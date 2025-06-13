"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { iImageSection } from "shared/types/section";
import Image from "next/image";

interface PricesItemProps {
    item: iImageSection;
    index: number;
}

export const PricesItem = (props: PricesItemProps) => {
    const { item, index } = { ...props };
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

    return (
        <div>
            <motion.li
                ref={ref}
                initial={{ filter: "blur(30px)" }}
                animate={
                    isInView
                        ? {
                              filter: "blur(0px)",
                              transition: {
                                  type: "tween",
                                  duration: 0.5 + index * 0.1, // staggered based on index
                              },
                          }
                        : {}
                }
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
                />
                <span className={"mt-auto"}>[{index}]</span>
            </motion.li>
        </div>
    );
};
