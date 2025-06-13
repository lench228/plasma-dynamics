"use client";

import React from "react";
import { Button } from "shared/ui";
import clsx from "clsx";
import { motion } from "framer-motion";

export interface HeroProps {
    title: string;
    description?: string;
    bg: string;
}

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

export const Hero = (props: HeroProps) => {
    const { title, description, bg } = props;

    return (
        <section
            className={clsx(
                "w-full text-white sm:pl-20 sm:pr-80 z-1 relative",
                "bg-" + bg,
                bg === "hero" ? "h-screen px-4 sm:pt-50" : "min-h-[20vh] pt-20"
            )}
        >
            {bg === "hero" && (
                <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                    <video
                        className="w-full h-full object-cover blur-sm"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    >
                        <source src="./hero/hero.MOV" type="video/mp4" />
                    </video>
                </div>
            )}

            <motion.div
                className={`relative z-10 sm:p-10 flex flex-col gap-4 sm:gap-10  bg-main/70`}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1 className="header-1" variants={textVariants}>
                    {title}
                </motion.h1>

                {description && (
                    <motion.p className={"big-text !font-normal"} variants={textVariants}>
                        {description}
                    </motion.p>
                )}

                <motion.div variants={textVariants}>
                    <Button variant={"white"}>Оставить заявку</Button>
                </motion.div>
            </motion.div>
        </section>
    );
};
