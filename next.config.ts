import { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: [],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
};

module.exports = nextConfig;
