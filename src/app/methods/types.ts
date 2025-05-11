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
    };
};

// Фактически роуты
export type TMethod = "plasma" | "hvof";
