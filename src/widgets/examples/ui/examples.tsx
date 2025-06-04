"use client";

import React, { useEffect, useRef, useState } from "react";
import { EXAMPLES } from "widgets/examples/model";
import { Example } from "widgets/examples/ui/example";

import { motion } from "framer-motion";

export const Examples = () => {
    const [width, setWidth] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            console.log(containerRef.current.scrollWidth, containerRef.current.offsetWidth);
            setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
        }
    }, []);
    return (
        <section className={"h-full sm:p-20"}>
            <header className={"flex items-center justify-between"}>
                <h3 className={"header-3 mb-4"}>Примеры работ</h3>
            </header>
            <motion.div
                ref={containerRef}
                className={"overflow-x-hidden h-full cursor-grab"}
                whileTap={"grabbing"}
            >
                <motion.ul
                    className={"flex  w-full gap-3"}
                    drag={"x"}
                    dragConstraints={{ right: 0, left: -width }}
                >
                    {EXAMPLES.map((example, index) => (
                        <motion.div className={"h-full"} key={index}>
                            <Example key={index} item={example} />
                        </motion.div>
                    ))}
                </motion.ul>
            </motion.div>
        </section>
    );
};
