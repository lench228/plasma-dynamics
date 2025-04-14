# Сайт plasma-dynamics

--- 

## Стек: 

### Основа
- [Next.js](https://nextjs.org/)
- [Motion react](https://motion.dev/docs/react-animation)
- [TailwindCss v4](https://tailwindcss.com/)
- pnpm (менеджер пакетов)

### Для разработки
- husky (precommit actions)
- eslint (форматирование и отслеживание ошибок)
- prettier (форматирование)

## Запуск проекта 

--- 

**Клонируем репозиторий и устанавливаем зависимости**
```shell
    git clone git@github.com:lench228/plasma-dynamics.git
    cd plasma-dynamics
    pnpm install
```


**Запуск в dev режиме**
```shell
    pnpm run dev 
```

## Структура проекта 

---

Используется FSD архитектура ([Подробнее](https://feature-sliced.design/lander))
```
app/         - Страницы сайта
shared/      - Общие компоненты и утилиты
features/    - Ключевые функции сайта
entities/    - Основные сущности (например, пользователи)
```
### App
Без слоя pages, так next.js делает роутинг по файловой системе, все страницы находятся в подкаталогах app в соответствующем каталоге, например: 
```
    app
    |  |
    |   --about-us
    |       |
    |        --...
    |       |
    |        --layout.tsx
    |       |
    |        --page.tsx
    |
    layout.tsx
    page.tsx     
      
```
Каждая страница - это папка в app:

В каждой папке:
- page.tsx - сама страница
- layout.tsx - общий дизайн для страницы и её подстраниц
- ...

### Пример слоя:

Слой для переиспользуемых компонентов 

```
    shared
    |  |
    |   --ui
    |       |
    |        --...
    |       |
    |        --breadcrumb
    |             |
    |             -- index.ts
    |             |
    |             -- breadcrumb.tsx
    |       |
    |        --preloader
    |             |
    |             -- index.ts
    |             |
    |             -- preloader.tsx
    |   --api
    |       |
    |        --index.ts
    |       ...
```

`index.ts` - так называемое public api сегмента, используется в КАЖДОМ сегменте для экспорта компонентов\моделей из сегмента, доступ к содержимому сегментов ТОЛЬКО через public api 

breadcrumb.tsx -> React Компонент
```tsx
// breadcrumb / index.ts
export {
    BreadcrumbPage,
    BreadcrumbList,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from "./breadcrumb";

```

## Стили

Применяем util-классы tailwindcss, конфигурация tailwind в файле globals.css 

`<div className="flex items-center gap-2">`

Равносильно

`display: flex; align-items:center; gap: 2;`

Если нужно сделать компонент с разными вариантами, местами легче использовать css.modules, например 
```tsx
import React from "react";
import classes from "./button.module.css";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "dark" | "white" | "icon";
}

export const Button = (props: ButtonProps) => {
    const { children, variant, disabled } = { ...props };
    return (
        <button disabled={disabled} className={clsx(classes.button, classes[variant])}>
            {children}
        </button>
    );
};
```