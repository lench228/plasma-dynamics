"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const imageVariants: Variants = {
    offscreen: {
        opacity: 0,
        x: 300,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.6,
        },
    },
};

export const SlideInImage = () => {
    return (
        <motion.div
            className="ml-auto overflow-x-hidden"
            whileInView={"onscreen"}
            variants={imageVariants}
            initial="offscreen"
        >
            <Image
                src="/hero/slide-in.webp"
                width={595}
                height={393}
                alt="Деталь"
                className="object-contain"
            />
        </motion.div>
    );
};
