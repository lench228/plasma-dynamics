import Image from "next/image";

import close from "~/close.svg";
import logo from "~/header/PD-logo.svg";
import menu from "~/menu.svg";

export default function Home() {
    return (
        <>
            <div className="notification" id="notification">
                Заявка отправлена!
            </div>
            <div className="sidebar" id="sidebar">
                <button className="sidebar-close-button">
                    <Image src={close} alt="close" loading={"lazy"} width={32} height={32} />
                </button>
                <ul>
                    <li className="navigation-menu__item">
                        <a className="navigation-menu__item-link" href="#about">
                            О нас
                        </a>
                    </li>
                    <li className="navigation-menu__item">
                        <a className="navigation-menu__item-link" href="#services">
                            Услуги
                        </a>
                    </li>
                    <li className="navigation-menu__item">
                        <a className="navigation-menu__item-link" href="#examples">
                            Примеры
                        </a>
                    </li>
                    <li className="navigation-menu__item">
                        <a className="navigation-menu__item-link" href="#contacts">
                            Контакты
                        </a>
                    </li>
                </ul>
            </div>

            <header className="main-header">
                <nav className="navigation">
                    <div className="navigation-logo-container">
                        <Image src={logo} alt="logo" className="navigation-logo" id="header-logo" />
                    </div>

                    <ul className="navigation-menu">
                        <li className="navigation-menu__item">
                            <a className="navigation-menu__item-link" href="#about">
                                О нас
                            </a>
                        </li>
                        <li className="navigation-menu__item">
                            <a className="navigation-menu__item-link" href="#services">
                                Услуги
                            </a>
                        </li>
                        <li className="navigation-menu__item">
                            <a className="navigation-menu__item-link" href="#examples">
                                Примеры
                            </a>
                        </li>
                        <li className="navigation-menu__item">
                            <a className="navigation-menu__item-link" href="#contacts">
                                Контакты
                            </a>
                        </li>
                    </ul>
                    <div className="navigation-button-container">
                        <button className="navigation-button" id="header-button">
                            <span className="navigation-button__text">Оставить заявку</span>
                        </button>
                    </div>
                    <button className="navigation-menu__burger-button">
                        <img src={menu} alt="menu burger" className="navigation-menu__burger" />
                    </button>
                </nav>
            </header>
            <main className="main" id="main">
                <section className="hero" id="hero">
                    <div className="container">
                        <div className="hero-card">
                            <div className="hero-row">
                                <div className="info-zone">
                                    <div className="city-button">
                                        <span className="city-button_text">Екатеринбург</span>
                                    </div>
                                    <div className="info-container">
                                        <h1 className="hero-header">
                                            Надежные покрытия
                                            <br />
                                            будущего - сегодня
                                        </h1>
                                        <div className="orange-circles">
                                            <img
                                                loading={"lazy"}
                                                src="assets/orange-circles.svg"
                                                className="circles-img"
                                            />
                                        </div>
                                        <div className="hero-description-container">
                                            <p className="hero-description">
                                                Мы увеличим срок эксплуатации оборудования и снизим
                                                денежные затраты на его ремонт
                                            </p>
                                            <button
                                                className="navigation-button hero-button"
                                                id="hero-button"
                                            >
                                                <span className="navigation-button__text">
                                                    Оставить заявку
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-zone"></div>
                            </div>
                        </div>
                        <div className="wrap">
                            <div className="wrapper-super-el primary">
                                <div className="wrapper_el">
                                    <a href="#">
                                        <img src="assets/company-logo1.svg" alt="" />
                                    </a>
                                </div>
                                <div className="wrapper_el">
                                    <a href="#">
                                        <img src="assets/company-logo2.svg" alt="" />
                                    </a>
                                </div>
                                <div className="wrapper_el">
                                    <a href="#">
                                        <img src="assets/ual.svg" alt="" />
                                    </a>
                                </div>
                                <div className="wrapper_el">
                                    <a href="#">
                                        <img src="assets/um.svg" alt="" />
                                    </a>
                                </div>
                                <div className="wrapper_el">
                                    <a href="#">
                                        <img src="assets/atom.svg" alt="" />
                                    </a>
                                </div>
                                <div className="wrapper_el">
                                    <a href="#">
                                        <img src="assets/zavod9.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="wrapper-super-el secondary">
                                <div className="wrapper_el">
                                    <a href="#">
                                        <img src="assets/company-logo1.svg" alt="" />
                                    </a>
                                </div>
                                <div className="wrapper_el">
                                    <a href="#">
                                        <img src="assets/company-logo2.svg" alt="" />
                                    </a>
                                </div>
                                <div className="wrapper_el">
                                    <a href="#">
                                        <img src="assets/ual.svg" alt="" />
                                    </a>
                                </div>
                                <div className="wrapper_el">
                                    <a href="#">
                                        <img src="assets/um.svg" alt="" />
                                    </a>
                                </div>
                                <div className="wrapper_el">
                                    <a href="#">
                                        <img src="assets/atom.svg" alt="" />
                                    </a>
                                </div>
                                <div className="wrapper_el">
                                    <a href="#">
                                        <img src="assets/zavod9.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about" id="about">
                    <div className="container">
                        <div className="card">
                            <div className="card__header">
                                <img
                                    src="assets/point.svg"
                                    alt="point"
                                    className="card__header-point point-extensions"
                                />
                                <h1 className="card__header-header">
                                    Наша компания занимается нанесением покрытий на любые
                                    поверхности с использованиваем технологий термического напыления
                                </h1>
                            </div>
                            <div className="image-section">
                                <div>
                                    <img src="assets/about_new.png" className="about-img" />
                                </div>
                                <div>
                                    <img
                                        src="assets/about_new_2.png"
                                        alt=""
                                        className="about-img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="methods" id="methods">
                    <div className="container">
                        <div className="card">
                            <div className="card__header">
                                <img
                                    src="assets/point.svg"
                                    alt="point"
                                    className="card__header-point"
                                />
                                <h1 className="card__header-header">
                                    Наши методы нанесения покрытий
                                </h1>
                            </div>
                            <div className="method-cards-section">
                                <div className="method-card">
                                    <img src="assets/shema1.png" alt="" className="method-img" />
                                    <h3 className="method-name">Плазменное напыление</h3>
                                    <p className="method-description">
                                        Технологический процесс, при котором напыляемый материал
                                        разогревается до жидкого состояния и переносится на
                                        обрабатываемую поверхность при помощи потока плазмы с
                                        высокой температурой.
                                    </p>
                                </div>
                                <div className="method-card">
                                    <img src="assets/shema-2.png" alt="" className="method-img" />
                                    <h3 className="method-name">
                                        Высокоскоростное газопламенное напыление
                                    </h3>
                                    <p className="method-description">
                                        Технологический процесс, при котором присадочный материал
                                        подается к факелу пламени горелки, плавится, и сжатым
                                        воздухом распыляется на обрабатываемую поверхность, создавая
                                        на ней сплошное низкопористое металлопокрытие.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="process" id="process">
                    <div className="container">
                        <div className="card">
                            <div className="card__header">
                                <img
                                    src="assets/point.svg"
                                    alt="point"
                                    className="card__header-point"
                                />
                                <h1 className="card__header-header">Процесс напыления</h1>
                            </div>
                            <div className="video-area">
                                <div className="video-card">
                                    <video
                                        className="video"
                                        src="assets/videos/video_2025-01-11_23-14-18.mp4"
                                        controls
                                        poster="assets/preview1.jpg"
                                    ></video>
                                    <h3 className="video-name">Процесс плазменного напыления</h3>
                                </div>
                                <div className="video-card">
                                    <video
                                        className="video"
                                        src="assets/videos/video1.mp4"
                                        controls
                                        poster="assets/preview1.jpg"
                                    ></video>
                                    <h3 className="video-name">
                                        Процесс высокоскоростного газопламенного напыления
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="services" id="services">
                    <div className="container">
                        <div className="card">
                            <div className="card__header">
                                <img
                                    src="assets/point.svg"
                                    alt="point"
                                    className="card__header-point"
                                />
                                <h1 className="card__header-header">Виды покрытий</h1>
                            </div>
                            <div className="services-card__content">
                                <div className="services-card__content-card">
                                    <img
                                        src="assets/image.png"
                                        className="services-card__content-card__image"
                                    />
                                    <div className="services-card__content-card__button">
                                        <span className="services-card__content-card__button-text">
                                            Износостойкое
                                        </span>
                                        <button
                                            className="services-card__content-card__button-button"
                                            id="modal-wear-resistant-btn"
                                        >
                                            <img src="assets/chevron-right.png" />
                                        </button>
                                    </div>
                                </div>
                                <div className="services-card__content-card">
                                    <img
                                        src="assets/image2.png"
                                        className="services-card__content-card__image"
                                    />
                                    <div className="services-card__content-card__button">
                                        <span className="services-card__content-card__button-text">
                                            Термобарьерное
                                        </span>
                                        <button
                                            className="services-card__content-card__button-button"
                                            id="modal-thermal-barrier-btn"
                                        >
                                            <img src="assets/chevron-right.png" />
                                        </button>
                                    </div>
                                </div>
                                <div className="services-card__content-card">
                                    <img
                                        src="assets/image3.png"
                                        className="services-card__content-card__image"
                                    />
                                    <div className="services-card__content-card__button">
                                        <span className="services-card__content-card__button-text">
                                            Антифрикционное
                                        </span>
                                        <button
                                            className="services-card__content-card__button-button"
                                            id="modal-antifriction-btn"
                                        >
                                            <img src="assets/chevron-right.png" />
                                        </button>
                                    </div>
                                </div>
                                <div className="services-card__content-card">
                                    <img
                                        src="assets/image4.png"
                                        className="services-card__content-card__image"
                                    />
                                    <div className="services-card__content-card__button">
                                        <span className="services-card__content-card__button-text">
                                            Жаростойкое
                                        </span>
                                        <button
                                            className="services-card__content-card__button-button open-modal-btn"
                                            id="modal-heat-resistant-btn"
                                        >
                                            <img src="assets/chevron-right.png" />
                                        </button>
                                    </div>
                                </div>
                                <div className="services-card__content-card">
                                    <img
                                        src="assets/image5.png"
                                        className="services-card__content-card__image"
                                    />
                                    <div className="services-card__content-card__button">
                                        <span className="services-card__content-card__button-text">
                                            Коррозионностойкое
                                        </span>
                                        <button
                                            className="services-card__content-card__button-button"
                                            id="modal-corrosion-resistant-btn"
                                        >
                                            <img src="assets/chevron-right.png" />
                                        </button>
                                    </div>
                                </div>
                                <div className="services-card__content-card">
                                    <img
                                        src="assets/image6.png"
                                        className="services-card__content-card__image"
                                    />
                                    <div className="services-card__content-card__button">
                                        <span className="services-card__content-card__button-text">
                                            Электропроводящее
                                        </span>
                                        <button
                                            className="services-card__content-card__button-button"
                                            id="modal-electrically-conductive-btn"
                                        >
                                            <img src="assets/chevron-right.png" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="description" id="description">
                    <div className="container">
                        <div className="card">
                            <div className="card__header">
                                <img
                                    src="assets/point.svg"
                                    alt="point"
                                    className="card__header-point"
                                />
                                <h1 className="card__header-header">
                                    Почему именно <span>мы</span>?
                                </h1>
                            </div>
                            <div className="description-card__content">
                                <div className="desciption-card__content-column">
                                    <div className="description-card__content-card">
                                        <h2 className="description-card__content-card__header">
                                            Качество
                                        </h2>
                                        <p className="description-card__content-card__text">
                                            Современное оборудование по термическому напылению и
                                            широкая приборная база методов контроля полученных
                                            покрытий позволяют гаранировать высокое качество нашей
                                            продукции
                                        </p>
                                    </div>
                                    <div className="description-card__content-card">
                                        <h2 className="description-card__content-card__header">
                                            Скорость
                                        </h2>
                                        <p className="description-card__content-card__text">
                                            Слаженная команда и работа без посредников обеспечивают
                                            быструю отработку каждого заказа
                                        </p>
                                    </div>
                                </div>
                                <div className="desciption-card__content-column">
                                    <div className="description-card__content-card">
                                        <h2 className="description-card__content-card__header">
                                            Команда
                                        </h2>
                                        <p className="description-card__content-card__text">
                                            Нашими сотрудниками являются дипломированные специалисты
                                            в области материаловедения, химии твердого тела,
                                            металлургии и инженерии поверхности
                                        </p>
                                    </div>
                                    <span className="circle-image">
                                        <img
                                            src="assets/plasma-image-inherit.jpg"
                                            className="description-card__content-card__image"
                                        />
                                    </span>
                                </div>
                                <div className="desciption-card__content-column">
                                    <div className="description-card__content-card">
                                        <h2 className="description-card__content-card__header">
                                            Материалы
                                        </h2>
                                        <p className="description-card__content-card__text">
                                            Для нанесения покрытий мы используем материалы только от
                                            проверенных поставщиков
                                        </p>
                                    </div>
                                    <div className="description-card__content-card">
                                        <h2 className="description-card__content-card__header">
                                            Гарантия
                                        </h2>
                                        <p className="description-card__content-card__text">
                                            На каждое покрытие мы даем паспорт и гарантийные
                                            обязательства
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="statistics-card">
                            <div className="statistics-card__column">
                                <div className="statistics-card__column-header">
                                    <h2>10+</h2>
                                </div>
                                <span className="statistics-card__column-text">
                                    компаний работают с нами
                                </span>
                            </div>
                            <div className="statistics-card__column">
                                <div className="statistics-card__column-header">
                                    <h2>600+</h2>
                                </div>
                                <span className="statistics-card__column-text">
                                    деталей покрыто
                                </span>
                            </div>
                            <div className="statistics-card__column">
                                <div className="statistics-card__column-header">
                                    <h2>35+</h2>
                                </div>
                                <span className="statistics-card__column-text">
                                    проектов завершено
                                </span>
                            </div>
                            <img
                                src="assets/thermal spray on a metal.png"
                                className="statistics-card__image"
                            />
                        </div>
                    </div>
                </section>
                <section className="examples" id="examples">
                    <div className="container">
                        <div className="card">
                            <div className="card__header">
                                <img
                                    src="assets/point.svg"
                                    alt="point"
                                    className="card__header-point examples-point"
                                />
                                <h1 className="card__header-header examples-header">
                                    Примеры работ
                                </h1>
                                <div className="btt-container">
                                    <button className="bttn-scroll-prev">
                                        <img
                                            src="assets/sliderbutton.svg"
                                            alt=""
                                            className="left-button"
                                        />
                                    </button>
                                    <button className="bttn-scroll-next">
                                        <img
                                            src="assets/sliderbutton.svg"
                                            alt=""
                                            className="right-button"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="examples-card__content">
                                <div className="examples-card__content-left">
                                    <div className="slider-container">
                                        <div className="slider-image before">
                                            <img
                                                src="assets/before.png"
                                                alt="Before"
                                                className="before__image"
                                            />
                                        </div>
                                        <div className="slider-image after">
                                            <img
                                                src="assets/after.png"
                                                alt="After"
                                                className="after__image"
                                            />
                                        </div>
                                        <div className="slider-handle"></div>
                                    </div>
                                    <h3 className="examples-card__content-header">
                                        Износостойкое покрытие
                                    </h3>
                                    <p className="examples-card__content-text">
                                        Нанесение износостойкого, жаростойкого и термобарьерного
                                        композитного покрытия на фурмы доменных печей для компании
                                        «НЛМК»
                                    </p>
                                </div>
                                <div className="examples-card__content-right">
                                    <div className="examples-card__content-right__item">
                                        <div className="img-cont">
                                            <img
                                                src="assets/example1.png"
                                                alt="example2"
                                                className="slider-img"
                                            />
                                        </div>
                                        <h3 className="examples-card__content-header">
                                            Электропроводящее покрытие
                                        </h3>
                                        <p className="examples-card__content-text">
                                            Нанесение электроповодящего Zn покрытия на изоляторы для
                                            теста на пробой
                                        </p>
                                    </div>
                                    <div className="examples-card__content-right__item">
                                        <div className="img-cont">
                                            <img
                                                src="assets/example2.png"
                                                alt="example3"
                                                className="slider-img"
                                            />
                                        </div>
                                        <h3 className="examples-card__content-header">
                                            Антифрикционное покрытие
                                        </h3>
                                        <p className="examples-card__content-text">
                                            Нанесение антифрикционного покрытия на основе бронзы на
                                            различные узлы деталей машин
                                        </p>
                                    </div>
                                    <div className="examples-card__content-right__item">
                                        <div className="img-cont">
                                            <img
                                                src="assets/example3.png"
                                                alt="example4"
                                                className="slider-img"
                                            />
                                        </div>
                                        <h3 className="examples-card__content-header">
                                            Износостойкое покрытие
                                        </h3>
                                        <p className="examples-card__content-text">
                                            Нанесение износостойкого покрытия на основе оксида хрома
                                            под уплотнение
                                        </p>
                                    </div>
                                    <div className="examples-card__content-right__item">
                                        <div className="img-cont">
                                            <img
                                                src="assets/example4.png"
                                                alt="example5"
                                                className="slider-img"
                                            />
                                        </div>
                                        <h3 className="examples-card__content-header">
                                            Износостойкое покрытие
                                        </h3>
                                        <p className="examples-card__content-text">
                                            Нанесение износостойкого покрытия на основе твердого
                                            сплава
                                        </p>
                                    </div>
                                    <div className="examples-card__content-right__item">
                                        <div className="img-cont">
                                            <img
                                                src="assets/example5.png"
                                                alt="example6"
                                                className="slider-img"
                                            />
                                        </div>
                                        <h3 className="examples-card__content-header">
                                            Износостойкое покрытие
                                        </h3>
                                        <p className="examples-card__content-text">
                                            Нанесение износостойкого покрытия на основе твердого
                                            сплава
                                        </p>
                                    </div>
                                    <div className="examples-card__content-right__item">
                                        <div className="img-cont">
                                            <img
                                                src="assets/example6.png"
                                                alt="example7"
                                                className="slider-img"
                                            />
                                        </div>
                                        <h3 className="examples-card__content-header">
                                            Антифрикционное покрытие
                                        </h3>
                                        <p className="examples-card__content-text">
                                            Нанесение антифрикционного покрытия на основе бронзы на
                                            различные узлы деталей машин
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="price" id="price">
                    <div className="container">
                        <div className="card">
                            <div className="card__header">
                                <img
                                    src="assets/point.svg"
                                    alt="point"
                                    className="card__header-point"
                                />
                                <h1 className="card__header-header">
                                    Как формируется <span>цена</span>?
                                </h1>
                            </div>
                            <div className="card__text">Цена зависит от множества факторов:</div>
                            <div className="price-card__content">
                                <div className="price-image-container">
                                    <div className="price-card__content-image pr-img-1">
                                        <h3 className="price-card-header">Толщина покрытия</h3>
                                        <p className="price-card-description">
                                            Толщина покрытия может варьироваться от 0,3 мм до 3 мм
                                        </p>
                                    </div>
                                </div>
                                <div className="price-image-container">
                                    <div className="price-card__content-image pr-img-2">
                                        <h3 className="price-card-header">Площадь поверхности</h3>
                                        <p className="price-card-description">
                                            Размер детали может достигать до 1700 мм в длину и до
                                            600 мм в диаметре
                                        </p>
                                    </div>
                                </div>
                                <div className="price-image-container">
                                    <div className="price-card__content-image pr-img-3">
                                        <h3 className="price-card-header">Геометрия детали</h3>
                                        <p className="price-card-description">
                                            В зависимости от формы, наличия пазов и других
                                            углублений внешней или внутренней поверхности под
                                            напыление стоимость может меняться
                                        </p>
                                    </div>
                                </div>
                                <div className="price-image-container">
                                    <div className="price-card__content-image pr-img-4">
                                        <h3 className="price-card-header">Вид покрытия</h3>
                                        <p className="price-card-description">
                                            Исходя из вашей задачи и требований к покрытию стоимость
                                            материалов может составлять от 1 000 ₽ до 20 000 ₽ за 1
                                            кг
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-card" id="form">
                            <img src="assets/bullet.png" className="form-card__image" />
                            <div className="form-card__content">
                                <div className="form-card__content-header">
                                    <img
                                        src="assets/point.svg"
                                        alt="point"
                                        className="card__header-point"
                                    />
                                    <h1 className="card__header-header">Свяжитесь с нами</h1>
                                </div>
                                <div className="form-card__content-form">
                                    <form
                                        className="form-card__content-form__form"
                                        id="contactForm"
                                        action="assets/scripts/mail.php"
                                        method="POST"
                                    >
                                        <div className="form-card__content-form__form-inputs">
                                            <div className="form-card__content-form__form-inputs-left">
                                                <input
                                                    required
                                                    name="user_name"
                                                    type="text"
                                                    placeholder="Имя"
                                                    className="form-card__content-form__form-inputs-left__input"
                                                />
                                                <input
                                                    required
                                                    name="user_email"
                                                    type="email"
                                                    placeholder="Почта"
                                                    className="form-card__content-form__form-inputs-left__input"
                                                />
                                                <input
                                                    required
                                                    name="user_phone"
                                                    type="tel"
                                                    placeholder="Номер телефона"
                                                    className="form-card__content-form__form-inputs-left__input"
                                                />
                                            </div>
                                            <div className="form-card__content-form__form-inputs-right">
                                                <textarea
                                                    name="user_message"
                                                    className="form-card__content-form__form-inputs-right__input"
                                                    placeholder="Ваш вопрос"
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="form-card__content-form__form-button">
                                            <button
                                                className="form-card__content-form__form-button__button"
                                                type="submit"
                                                id="contactForm-button"
                                            >
                                                Отправить заявку
                                            </button>
                                            <span className="form-card__content-form__form-button__text">
                                                Нажимая на кнопку, Вы соглашаетесь на обработку
                                                персональных данных
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contacts" id="contacts">
                    <div className="container">
                        <div className="card">
                            <div className="card__header">
                                <img
                                    src="assets/point.svg"
                                    alt="point"
                                    className="card__header-point"
                                />
                                <h1 className="card__header-header">
                                    Наши <span>контакты</span>
                                </h1>
                            </div>
                            <div className="contacts-card__info">
                                <div className="contacts-card__info-item">
                                    <span className="contacts-card__info-item__label">Телефон</span>
                                    <span className="contacts-card__info-item__content">
                                        +7 (992) 014 38 77
                                    </span>
                                </div>
                                <div className="contacts-card__info-item">
                                    <span className="contacts-card__info-item__label">Почта</span>
                                    <span className="contacts-card__info-item__content">
                                        plasmadynamics@yandex.ru
                                    </span>
                                </div>
                                <div className="contacts-card__info-item">
                                    <span className="contacts-card__info-item__label">Адрес</span>
                                    <span className="contacts-card__info-item__content">
                                        Екатеринбург
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="map-section">
                    <div className="container">
                        <div className="map">
                            <script
                                type="text/javascript"
                                async
                                src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3d64fca7c17b829e1222b9472bea7dd18a99b9facba5802d3c103b2662629a62&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=true"
                            ></script>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="main-footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-content__credentials">
                            <img
                                src="assets/footer-logo.png"
                                alt="footer logo"
                                className="footer-content__credentials-photo"
                            />
                            <div className="footer-content__credentials-text">
                                <span>Проект создан в рамках федерального проекта</span>
                                <span>«Платформа университетского</span>
                                <span>технологического предпринимательства»</span>
                            </div>
                        </div>
                        <div className="footer-content__info">
                            <div className="footer-content__info-contacts">
                                <h3 className="footer-content__info-contacts__header">Контакты</h3>
                                <ul className="footer-content__info-contacts__list">
                                    <li>Свердловская область, Екатеринбург</li>
                                    <li>+7 992 014-38-77</li>
                                    <li>plasmadynamics@yandex.ru</li>
                                </ul>
                            </div>
                            <div className="footer-content__info-nav">
                                <h2 className="footer-content__info-nav__header">Карта сайта</h2>
                                <nav>
                                    <ul className="footer-content__info-nav-list">
                                        <li>
                                            <a
                                                className="footer-content__info-nav-link"
                                                href="#main"
                                            >
                                                Главная
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="footer-content__info-nav-link"
                                                href="#about"
                                            >
                                                О нас
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="footer-content__info-nav-link"
                                                href="#services"
                                            >
                                                Услуги
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="footer-content__info-nav-link"
                                                href="#examples"
                                            >
                                                Примеры
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="footer-content__info-nav-link"
                                                href="#price"
                                            >
                                                Стоимость
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="footer-content__info-nav-link"
                                                href="#contacts"
                                            >
                                                Контакты
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="footer-logo">
                        <h2 className="footer-logo__header">Plasma Dynamics</h2>
                        <div className="footer-logo__text">
                            <span>Товарный знак © 2025 Plasma Dynamics</span>
                            <span>Авторское право сохранено.</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
