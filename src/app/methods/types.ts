import { iImageSection } from "shared/types/section";
import { BulletProps } from "widgets/advantages-bullet";

export type iMethod = {
    [key in TMethod]: {
        hero: {
            h1: string;
            h2: string;
            description: string;
        };
        sections: iImageSection[];
        bulletSection: BulletProps;
        coverageSection: BulletProps;
        videoSection: {
            video: string;
            title: string;
            poster: string;
        };
    };
};

// Фактически роуты
export type TMethod = "hvoaf" | "plasma" | "flame" | "spraynfuse";
// | "plasma" | "flame" | "spraynfuse";
