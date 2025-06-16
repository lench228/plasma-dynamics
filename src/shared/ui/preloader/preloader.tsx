"use client";
import { motion } from "framer-motion";

export const Preloader = () => {
    return (
        <svg width="120" height="120" viewBox="0 0 42 34" fill="none">
            <path
                d="M14.7148 -0.00512695H26.7207C26.9959 -0.00512695 27.2192 0.040127 27.2192 0.0958643C27.2666 12.0424 32 33.1617 41.6651 33.0232C41.8085 33.0905 41.5557 33.1617 41.1927 33.1617H0.98301C0.617652 33.1617 0.363442 33.0898 0.50989 33.0222C10.25 33.1617 14.171 11.9711 14.2158 0.095767C14.2163 0.0401297 14.4391 -0.00512695 14.7148 -0.00512695Z"
                fill="url(#gradient)"
            />

            <defs>
                <linearGradient
                    id="gradient"
                    gradientUnits="userSpaceOnUse"
                    x1="0%"
                    y1="100%"
                    x2="0%"
                    y2="0%"
                >
                    <motion.stop offset="0%" stopColor="#FFE200" />
                    <motion.stop
                        offset="21%"
                        stopColor="#F0000A"
                        animate={{
                            offset: ["21%", "48%"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "anticipate" as const,
                        }}
                    />
                    <motion.stop
                        offset="48%"
                        stopColor="#FF6201"
                        animate={{
                            offset: ["48%", "70%"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "anticipate",
                        }}
                    />
                    <motion.stop
                        offset="70%"
                        stopColor="#760064"
                        animate={{
                            offset: ["70%", "100%"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "anticipate",
                        }}
                    />
                    <motion.stop offset="100%" stopColor="#1800A7" />
                </linearGradient>
            </defs>
        </svg>
    );
};
