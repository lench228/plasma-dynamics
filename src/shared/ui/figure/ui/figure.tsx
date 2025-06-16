"use client";

import React, { useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import { TextContent } from "shared/ui/text-content";
import { iImageSection } from "shared/types/section";
import { motion, useInView, Variants } from "framer-motion";

export interface FigureProps {
    item: iImageSection;
    variant: "hero" | "types";
    reversed: boolean;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

const columnVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
        },
    },
};

export const Figure = (props: FigureProps) => {
    const { item, variant, reversed } = props;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

    return (
        <motion.li
            ref={ref}
            className={clsx(
                `xl:grid xl:items-center xl:grid-cols-2 flex flex-col `,
                "",
                variant === "types" ? "xl:gap-40 sm:mx-[-60px]" : "sm:max-h-[623px]"
            )}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <motion.div
                variants={columnVariants}
                className={clsx(reversed ? "order-1 xl:order-2" : "md:order-1", "p-0 xl:p-10")}
            >
                <TextContent title={item.title}>
                    <span className={"text-base"}>{item.texts}</span>
                </TextContent>
            </motion.div>

            <motion.div
                variants={columnVariants}
                className={clsx(
                    reversed ? "xl:order-1  order-2" : "md:order-2",
                    "relative w-full sm:aspect-[4/3] md:aspect-auto h-[500px]"
                )}
            >
                <Image
                    src={item.image}
                    alt="Пример"
                    priority={false}
                    fill
                    sizes="100"
                    className="object-cover"
                />
            </motion.div>
        </motion.li>
    );
};
