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
            { label: "HVOAF", path: "/methods/hvoaf" },
            { label: "APS", path: "/methods/plasma" },
            // { label: "Bronze Surfacing", path: "/methods/bronze" },
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
            {
                label: "Термобарьер",
                path: "/coverages/thermal-barrier",
            },
            {
                label: "Защита от коррозии",
                path: "/coverages/corrosion-protection",
            },
            {
                label: "MI/RFI экранирование",
                path: "/coverages/rfi",
            },
            {
                label: "Термонапыляемое покрытие",
                path: "/coverages/thermal-spray-coating",
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
                label: "Перерабатывающая промышленность",
                path: "/applications/plastics",
            },
            { label: "Энергетика", path: "/applications/energy" },
            { label: "Целлюлозно-бумажная промышленность", path: "/applications/paper" },
        ],
    },
    // {
    //     label: "Научные материалы",
    //     path: "",
    //     links: [
    //         { label: "Пример 1 ", path: "/science/1" },
    //         { label: "Пример 2", path: "/science/2" },
    //     ],
    // },
    // {
    //     label: "О нас",
    //     path: "#about",
    // },
    {
        label: "Контакты",
        path: "#contacts",
    },
];
