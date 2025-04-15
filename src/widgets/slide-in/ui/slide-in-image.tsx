"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

export const SlideInImage = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            style={{
                opacity: scrollYProgress,
            }}
        >
            <Image src={"/hero/slide-in.webp"} width={595} height={393} alt={"Деталь"} />
        </motion.div>
    );
};
