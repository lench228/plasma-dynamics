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
            { label: "Плазменное напыление", path: "/methods/1" },
            { label: "Высокоскоростное газопламенное напыление", path: "/methods/2" },
        ],
    },
    {
        label: "Типы покрытый",
        path: "/types",
        links: [
            { label: "Электроповодящее покрытие", path: "/types/1" },
            { label: "Газоплазменное покрытие", path: "/types/2" },
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
