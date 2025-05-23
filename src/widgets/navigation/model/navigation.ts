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
        path: "/applications",
        links: [
            { label: "Авиапромышленность", path: "/applications/avia" },
            { label: "Системы перекачки", path: "/applications/pumping" },
            { label: "Промышленное оборудование", path: "/applications/industrial" },
            { label: "Военные и оборонные применения", path: "/applications/defense" },
            { label: "Нефтегазовая промышленность", path: "/applications/oilgas" },
            {
                label: "Пластмассовая и перерабатывающая промышленность",
                path: "/applications/plastics",
            },
            { label: "Энергетика", path: "/applications/energy" },
            { label: "Целлюлозно-бумажная промышленность ", path: "/applications/paper" },
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
