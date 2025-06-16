"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const MotionBg = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], ["200px", "-200px"]);

    return (
        <div ref={ref} className="w-full hidden  sm:block">
            <motion.div
                style={{
                    backgroundPositionX: "center",
                    backgroundPositionY: y,
                    backgroundSize: "cover",

                    willChange: "transform",
                }}
                className="absolute bg-services w-full h-full z-[-1] top-[310px] left-0 max-h-[535px]"
            />
        </div>
    );
};
