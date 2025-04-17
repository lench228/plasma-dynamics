import "./globals.css";
import Head from "next/head";
import { Navigation } from "widgets/navigation";
import { ContactUs } from "widgets/contact-us";
import { Contacts } from "widgets/contacts";
import YandexMapSimple from "shared/lib/yamap/yamap";
import React from "react";
import { Footer } from "widgets/footer";

export default function RootLayout({
    children,
    breadcrumb,
}: Readonly<{
    children: React.ReactNode;
    breadcrumb: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <Head>
                <>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta
                        name="google-site-verification"
                        content="CU3iKxJl2dFlc37f4JThyT5swyMh_8DcqdYdc8uEHg4"
                    />

                    <title>Надежное покрытие будущего - сегодня</title>
                    <meta
                        name="description"
                        content="Мы увеличим срок эксплуатации оборудования и снизим денежные затраты на его ремонт Тел. +7 (992) 014-38-77"
                    />
                    <link rel="icon" href="assets/lmao.svg" type="image/x-icon" />
                    <meta
                        name="keywords"
                        content="плазменное напыление,
                    напыление плазмой,
                    напыление деталей,
                    нанесение плазменных покрытий,
                    восстановление деталей напылением,
                    Восстановление валов, шестерен, подшипников,
                    Восстановление металла напылением,
                    износостойкие покрытия ,
                    Технология плазменного напыления,
                    Плазменное покрытие металлов,
                    Услуги плазменного напыления,
                    Плазменная обработка поверхностей,
                    Напыление керамики плазмой,
                    хвоф покрытие деталей,
                    Высокоскоростное напыление металлов,
                    Износостойкие покрытия HVOF,
                    Защита от коррозии напылением,
                    Напыление плазмой для промышленности,
                    Восстановление деталей напылением,
                    Покрытие для износостойкости,
                    Антикоррозийное плазменное покрытие,
                    Напыление алюминия,
                    напыление никеля,
                    напыление циркония,
                    плазменное напыление в машиностроении,
                    Плазменное напыление Екатеринбург,
                    Плазменное напыление екб,
                    Высокоскоростное газоплазменное напыление Екатеринбург,
                    Высокоскоростное газоплазменное напыление екб,
                    услуги плазменного напыления свердловская область,
                    плазменное напыление урал,
                    Технология HVOF в Екатеринбурге,
                    Технология HVOF екб,
                    Газоплазменное напыление цена,
                    Плазменное напыление цена,
                    HVOF напыление на заказ,
                    хвоф напыление на заказ екб,
                    Напыление плазмы на заказ,
                    Екатеринбург

                    "
                    />
                </>
            </Head>
            <body>
                <Navigation />
                {breadcrumb}
                {children}
                <ContactUs />
                <Contacts />
                <YandexMapSimple />
                <Footer />
            </body>
        </html>
    );
}
