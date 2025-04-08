import "./globals.css";
import Head from "next/head";
import { Navigation } from "widgets/navigation";
import { Button } from "shared/ui";
import { Preloader } from "shared/ui/preloader/preloader";
import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
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
                <Navigation></Navigation>
                {children}
                <h1 className="display-text font-manrope">Display Text</h1>
                <p className="display-number">42</p>
                <h2 className="header-1 ">Header 1</h2>
                <h3 className="header-2">Header 2</h3>
                <h3 className="header-4">Header 4</h3>
                <h3 className="main">Header 4</h3>
                <p className="big-text">Большой текст</p>
                <p className="regular-text">Обычный текст</p>
                <p className="small-text">Мелкий текст</p>
                <a href="#" className="link">
                    Ссылка
                </a>
                <Button variant={"dark"}>черная кнопка</Button>
                <Button variant={"white"}>белая кнопка</Button>
                <Preloader></Preloader>
                <div className={"flex gap-2"}>
                    <Button variant={"icon"} disabled={true}>
                        <Image src={"/icons/left.svg"} width={24} height={24} alt={"Предыдущий"} />
                    </Button>
                    <Button variant={"icon"}>
                        <Image src={"/icons/right.svg"} width={24} height={24} alt={"Следующий"} />
                    </Button>
                </div>
            </body>
        </html>
    );
}
