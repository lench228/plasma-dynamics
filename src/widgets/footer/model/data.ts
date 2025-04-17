export interface iFooterItem {
    title: string;

    items: string[];
}

export const FOOTER_ITEMS: iFooterItem[] = [
    {
        title: "Контакты",
        items: [
            "Свердловская область, Екатеринбург",
            "+7 992 014-38-77",
            "plasmadynamics@yandex.ru",
        ],
    },
    {
        title: "Карта сайта",
        items: ["Главная", "О нас", "Услуги", "Примеры", "Стоимость", "Контакты"],
    },
];
