"use client";

import React from "react";
import Image from "next/image";
import { AnimatePresence, motion, Variants } from "framer-motion";

const imageVariants: Variants = {
    offscreen: {
        opacity: 0,
        width: 0,
    },
    onscreen: {
        width: "100%",
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.1,
            duration: 0.8,
        },
    },
};

export const SlideInImage = () => {
    return (
        <AnimatePresence>
            <motion.div
                className="overflow-x-hidden"
                whileInView={"onscreen"}
                variants={imageVariants}
                initial="offscreen"
                exit="exit"
            >
                <Image
                    src="/hero/slide-in.webp"
                    width={595}
                    height={393}
                    alt="Деталь"
                    className="object-contain ml-auto"
                />
            </motion.div>
        </AnimatePresence>
    );
};
