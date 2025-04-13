export interface iLink {
    path: string;
    label: string;
}

export interface iNavLink extends iLink {
    links?: iLink[];
}

export const LINKS: iNavLink[] = [
    {
        label: "Типы покрытый",
        path: "/types",
        links: [
            { label: "Электроповодящее покрытие", path: "/types/1" },
            { label: "Газоплазменное покрытие", path: "/types/2" },
        ],
    },
    {
        label: "Способы нанесения",
        path: "/methods",
        links: [
            { label: "Плазменное напыление", path: "/methods/1" },
            { label: "Высокоскоростное газопламенное напыление", path: "/methods/2" },
        ],
    },
    {
        label: "Контакты",
        path: "/contacts",
    },
    {
        label: "О нас",
        path: "/about",
    },
];
