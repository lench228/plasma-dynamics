import { BulletProps } from "widgets/advantages-bullet";
import { TextContentProps } from "shared/ui/text-content";
import { FigureProps } from "shared/ui";

export type iCoverages = {
    // Ключ - один из строк TCoverage, чтобы добавить тип, нужно заменить exmp[n] на название роута
    // После, добавить уже в файле model заполнить данными
    [key in TCoverage]: {
        // Hero секция
        hero: {
            image: string;
            h1: string;
            texts: React.ReactNode;
        };
        // секция со списком
        bulletSection: BulletProps;
        // Текст
        promoText: TextContentProps;
        // Секции с изображениями
        figures: FigureProps[];
        // Нижний текст
        footerText: TextContentProps;
    };
};

// Фактически роуты
export type TCoverage = "wear-resistant";

// Типы отделяются |
// export type TCoverage = "wear-resistant" | "exmp2" | "exmp3" | "exmp4";
