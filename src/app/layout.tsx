import "./globals.css";
import React from "react";
import { Metadata } from "next";

import dynamic from "next/dynamic";

const YandexMapSimple = dynamic(() => import("shared/lib/yamap"));
const Navigation = dynamic(() => import("widgets/navigation"));
const ContactUs = dynamic(() => import("widgets/contact-us"));
const Contacts = dynamic(() => import("widgets/contacts"));
const Footer = dynamic(() => import("widgets/footer"));
const Prices = dynamic(() => import("widgets/prices"));

export const metadata: Metadata = {
    title: "Надежное покрытие будущего - сегодня",
    description:
        "Мы увеличим срок эксплуатации оборудования и снизим денежные затраты на его ремонт Тел. +7 (992) 014-38-77",
    keywords: [
        "плазменное напыление",
        "напыление плазмой",
        "напыление деталей",
        "нанесение плазменных покрытий",
        "восстановление деталей напылением",
        "Восстановление валов, шестерен, подшипников",
        "Восстановление металла напылением",
        "износостойкие покрытия",
        "Технология плазменного напыления",
        "Плазменное покрытие металлов",
        "Услуги плазменного напыления",
        "Плазменная обработка поверхностей",
        "Напыление керамики плазмой",
        "хвоф покрытие деталей",
        "Высокоскоростное напыление металлов",
        "Износостойкие покрытия HVOF",
        "Защита от коррозии напылением",
        "Напыление плазмой для промышленности",
        "Восстановление деталей напылением",
        "Покрытие для износостойкости",
        "Антикоррозийное плазменное покрытие",
        "Напыление алюминия",
        "напыление никеля",
        "напыление циркония",
        "плазменное напыление в машиностроении",
        "Плазменное напыление Екатеринбург",
        "Плазменное напыление екб",
        "Высокоскоростное газоплазменное напыление Екатеринбург",
        "Высокоскоростное газоплазменное напыление екб",
        "услуги плазменного напыления свердловская область",
        "плазменное напыление урал",
        "Технология HVOF в Екатеринбурге",
        "Технология HVOF екб",
        "Газоплазменное напыление цена",
        "Плазменное напыление цена",
        "HVOF напыление на заказ",
        "хвоф напыление на заказ екб",
        "Напыление плазмы на заказ",
        "Екатеринбург",
    ],
    verification: {
        google: "CU3iKxJl2dFlc37f4JThyT5swyMh_8DcqdYdc8uEHg4",
    },
    icons: {
        icon: "/assets/lmao.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={"w-screen"}>
                <Navigation />
                {children}
                <Prices />
                <ContactUs />
                <Contacts />
                <YandexMapSimple />
                <Footer />
            </body>
        </html>
    );
}
