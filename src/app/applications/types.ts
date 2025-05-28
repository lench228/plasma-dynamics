import { BulletProps } from "widgets/advantages-bullet";

import React from "react";
import { ApplicationContentProps } from "widgets/application-content";

export type iApplications = {
    [key in TApplication]: {
        // Hero секция
        hero: {
            image: string;
            h1: string;
        };
        applicationContent: ApplicationContentProps;
        // секция со списком
        bulletSections: BulletProps[];

        // Список спецификаций
        specifications?: {
            title: string;
            items: {
                title: string;
                text: React.ReactNode;
            }[];
        };
    };
};

// Фактически роуты
export type TApplication = "avia" | "pumping" | "industrial" | "defense" | "oilgas";
// | "industrial"
// | "defense"
// | "oilgas"
// | "plastics"
// | "energy"
// | "paper";
