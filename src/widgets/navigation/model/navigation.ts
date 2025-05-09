export interface iLink {
    path: string;
    label: string;
}

export interface iNavLink extends iLink {
    links?: iLink[];
}

export const LINKS: iNavLink[] = [
    {
        label: "Способы нанесения",
        path: "/methods",
        links: [
            { label: "Flame Spray & Arc-Wire", path: "/methods/flame" },
            { label: "HVOF", path: "/methods/hvof" },
            { label: "Plasma Spray", path: "/methods/plasma" },
            { label: "Spray & Fuse", path: "/methods/spraynfuse" },
        ],
    },
    {
        label: "Напыляемые покрытия",
        path: "/coverages",
        links: [
            {
                label: "Износостойкое покрытие",
                path: "/coverages/wear-resistant",
            },
        ],
    },
    {
        label: "Области применения",
        path: "/env",
        links: [
            { label: "Пример 1 ", path: "/env/1" },
            { label: "Пример 2", path: "/env/2" },
        ],
    },
    {
        label: "Научные материалы",
        path: "/science",
        links: [
            { label: "Пример 1 ", path: "/science/1" },
            { label: "Пример 2", path: "/science/2" },
        ],
    },
    {
        label: "О нас",
        path: "/about",
    },
    {
        label: "Контакты",
        path: "/contacts",
    },
];
