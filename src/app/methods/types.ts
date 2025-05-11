import { iImageSection } from "shared/types/section";
import { BulletProps } from "widgets/advantages-bullet";

export interface iMethod {
    [key: string]: {
        hero: {
            h1: string;
            h2: string;
            description: string;
        };
        sections: iImageSection[];
        bulletSection: BulletProps;
    };
}

// Фактически роуты
export type TMethod = "plasma" | "hvof" | "exmp3" | "exmp4";
