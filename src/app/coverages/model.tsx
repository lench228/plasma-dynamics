import { iCoverages } from "./types";
// Сюда можно дописать объект, который соответствует интерфейсу iApplications
// Чтобы добавит тип, нужно добавить в TCoverages в types.ts строку с названием роута

export const COVERAGES: iCoverages = {
    "wear-resistant": {
        hero: {
            image: "/coverages/wear-resistant/hero.webp",
            h1: "Износостойкое покрытие",
            texts: (
                <>
                    Истирание и коррозия — два самых больших врага механизмов и оборудования.
                    Истирание может быть вызвано рядом факторов, включая трение, вибрацию и удар.
                    Коррозия относится к постепенной потере материала с поверхности из-за
                    воздействия реактивной среды, такой как соленая вода, хлор или кислоты. Вместе
                    или по отдельности истирание и коррозия могут нанести серьезный ущерб
                    компонентам машин, что приведет к дорогостоящему ремонту или даже полному
                    отказу. Plasma Dynamics предлагает <strong>термораспыляемые покрытия</strong>,
                    обладающие высокой устойчивостью как к истиранию, так и к коррозии. Эти покрытия
                    могут быть нанесены на широкий спектр поверхностей, включая металл, керамику и
                    композиты. <br /> Для достижения желаемых характеристик по коррозии и истиранию
                    с помощью термического напыления требуется понимание взаимодействия между
                    материалом подложки, нанесенным покрытием и окружающей средой. Как правило,
                    более твердые покрытия демонстрируют лучшую износостойкость, чем более мягкие.
                    Однако это не всегда так, поскольку покрытия могут быть слишком твердыми и
                    хрупкими, чтобы выдерживать удар абразивных частиц. Рабочая среда также играет
                    роль в устойчивости к коррозии и истиранию, поскольку покрытия, подвергающиеся
                    воздействию высоких температур или агрессивных химических веществ, будут
                    разрушаться быстрее. Чтобы добиться наилучших возможных характеристик, Plasma
                    Dynamics будет использовать материал, совместимый как с подложкой, так и с
                    окружающей средой.
                </>
            ),
        },
        bulletSection: {
            title: "Распространённые области применения износостойких и абразивостойких покрытий",
            description:
                "Стойкие к истиранию и износу покрытия от Plasma Dynamics используются в широком спектре отраслей и применений. Некоторые из наиболее распространенных вариантов использования этих типов покрытий включают:",
            bullets: [
                "Поверхности валков",
                "Компоненты насосов и клапанов",
                "Оборудование для литья и смешивания пластмасс",
                "Трубопроводы и каналы",
                "Компоненты конвейерных систем",
                "Оборудование цементных заводов и шнеки",
                "Компоненты ветряных турбин",
            ],
        },

        promoText: {
            title: "Материалы, устойчивые к истиранию и коррозии",
            children: (
                <>
                    Термическое напыление позволяет превосходно контролировать характеристики
                    поверхности, регулируя твердость и химический состав в точке контакта. В
                    результате этот метод обеспечивает повышенную устойчивость к коррозии и
                    истиранию даже в сложных рабочих условиях, таких как трение, абразивное
                    воздействие, экстремальные температуры или агрессивные химические вещества.
                    Обычно используемые материалы включают:
                </>
            ),
        },

        figures: [
            {
                item: {
                    image: "/coverages/wear-resistant/1.webp",
                    title: "Карбид хрома",
                    texts: [
                        "Карбид хрома обеспечивает превосходную защиту от скользящего износа и абразивного воздействия. Хотя он не такой твердый и прочный, как карбид вольфрама, он способен выдерживать более высокие рабочие температуры, чем карбид вольфрама, и является предпочтительным выбором для применений, связанных с износом, в горячих секциях турбин. Карбид хрома можно наносить плазменным или HVOF (High-Velocity Oxygen Fuel spraying) методом, а также шлифовать до получения тонкой отделки.",
                    ],
                },
                variant: "types",
                reversed: true,
            },
            {
                item: {
                    image: "/coverages/wear-resistant/2.webp",
                    title: "Карбид вольфрама",
                    texts: [
                        "Карбид вольфрама — это очень твердое соединение с превосходной износостойкостью, идеально подходящее для долговечных поверхностей и кромок. Этот прочный и долговечный материал имеет множество применений в промышленности, поскольку он может выдерживать экстремальный износ и истирание с минимальными потерями материала. Его долговечность делает его идеальным выбором для таких вещей, как режущие инструменты, изнашиваемые пластины, поверхности валков и подшипников, а также детали тяжелого оборудования, подверженные абразивному износу. Карбидные покрытия также могут быть шлифованы и доведены до получения чрезвычайно твердой зеркальной поверхности. В целом, карбид вольфрама обеспечивает действительно выдающуюся износостойкость и стойкость к истиранию, что делает его бесценным материалом для широкого спектра промышленных применений.",
                    ],
                },
                variant: "types",
                reversed: false,
            },
            {
                item: {
                    image: "/coverages/wear-resistant/3.webp",
                    title: "Оксид хрома",
                    texts: [
                        "Как керамика, оксид хрома чрезвычайно твердый и плотный. Это делает его очень устойчивым к износу, как от скольжения, так и от абразивных частиц. Кроме того, его низкий коэффициент трения делает его идеальным для применений, где есть риск адгезионного износа, например, в коррозионных средах. Благодаря этим свойствам оксид хрома обычно используется в широком спектре промышленных применений, где необходимы герметичные уплотнения. Его можно напылять на большинство металлических поверхностей для дополнительной защиты и шлифовать до гладкой поверхности.",
                    ],
                },
                variant: "types",
                reversed: true,
            },
            {
                item: {
                    image: "/coverages/wear-resistant/4.webp",
                    title: "Оксид алюминия",
                    texts: [
                        "Оксид алюминия часто используется в областях с высоким износом благодаря своей превосходной устойчивости к истиранию. Этот очень твердый материал может выдерживать экстремальное абразивное воздействие и высокие температуры, что делает его идеальным для использования в высокопроизводительных насосах и клапанах. Оксид алюминия также устойчив к коррозии и химическому воздействию, что делает его идеальным выбором для использования в суровых условиях. Кроме того, оксид алюминия является электрическим изолятором и имеет низкий коэффициент трения. Это идеальная поверхность для роликов коронной обработки.",
                    ],
                },
                variant: "types",
                reversed: false,
            },
        ],
        footerText: {
            title: "Преимущества покрытий, устойчивых к истиранию и износу",
            children: (
                <>
                    Износостойкие и абразивостойкие напыляемые покрытия необходимы для промышленного
                    оборудования и компонентов, которые должны работать на высоком уровне и
                    противостоять износу. Используя термическое напыление для достижения
                    устойчивости к истиранию и износу, вы также можете получить преимущества в виде
                    повышенной твердости, значительно увеличенного срока службы и повышенной
                    устойчивости к коррозии. Кроме того, термические напыляемые покрытия могут
                    помочь снизить затраты на замену компонентов и оборудования.
                </>
            ),
        },
    },
};
