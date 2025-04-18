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
        placeholder: "Ваш вопрос",
        isTextarea: true,
    },
    {
        label: "Почта",
        placeholder: "example@yandex.ru",
    },
    {
        label: "Номер телефона",
        placeholder: "+89969369931",
    },
];
