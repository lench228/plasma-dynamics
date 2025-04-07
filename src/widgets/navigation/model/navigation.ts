export interface iLink {
    path: string;
    label: string;
}

export const LINKS: iLink[] = [
    { label: "О нас", path: "/about" },
    { label: "Услуги", path: "/goods" },
    { label: "Примеры", path: "/examples" },
    { label: "Контакты", path: "/contacts" },
];
