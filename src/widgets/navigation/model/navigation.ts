export interface iLink {
    path: string;
    label: string;
}

export interface iNavLink extends iLink {
    links: iLink[];
}

export const LINKS: iNavLink[] = [
    { label: "О нас", path: "/about", links: [{ label: "Связаться", path: "/about/сontact" }] },
    {
        label: "Услуги",
        path: "/goods",
        links: [
            { label: "Напыление", path: "/goods/example" },
            { label: "Газоплазменное напыление", path: "/goods/example2" },
        ],
    },
    {
        label: "Примеры",
        path: "/examples",
        links: [
            { label: "Завод №9", path: "/examples/zav9" },
            { label: "Еще компания", path: "/examples/someexmp" },
        ],
    },
    {
        label: "Контакты",
        path: "/contacts",
        links: [
            { label: "Что-то", path: "/contacts/some1" },
            { label: "Что-то другое ", path: "/contacts/some2" },
        ],
    },
];
