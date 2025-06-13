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
        <section className={"h-full sm:p-20 sm:pb-0"}>
            <header className={"flex items-center justify-between"}>
                <h2 className={"header-2 mb-12 m-auto"}>Примеры работ</h2>
            </header>
            <motion.div
                ref={containerRef}
                className={"overflow-x-hidden h-full cursor-grab w-4/5 m-auto"}
                whileTap={"grabbing"}
            >
                <motion.ul
                    className={"flex  gap-3"}
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
