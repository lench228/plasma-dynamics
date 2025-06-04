export interface iFormData {
    placeholder: string;
    label?: string;
    isTextarea?: boolean;
}

export const FORM_DATA: iFormData[] = [
    {
        label: "Имя",
        placeholder: "Иван",
    },
    {
        label: "Ваш вопрос",
        placeholder: "Сколько будет стоить...",
        isTextarea: true,
    },
    {
        label: "Почта",
        placeholder: "example@yandex.ru",
    },
    {
        label: "Номер телефона",
        placeholder: "7***1238191",
    },
];
