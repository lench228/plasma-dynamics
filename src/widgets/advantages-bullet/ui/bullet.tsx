import React from "react";

export interface BulletProps {
    title: string;
    description: string;
    bullets: string[];
}

export const Bullet = (props: BulletProps) => {
    const { title, description, bullets } = { ...props };
    return (
        <section className={"flex flex-col gap-6 regular-text"}>
            <h2 className={"header-2"}>{title}</h2>
            <p>{description}</p>
            <ul className={"mx-20 flex flex-col gap-4"}>
                {bullets.map((bullet, i) => (
                    <li key={i} className={"flex w-full items-center"}>
                        <svg
                            className={"mr-10"}
                            width="11"
                            height="13"
                            viewBox="0 0 11 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <ellipse cx="5.5" cy="6.5" rx="5.5" ry="6.5" fill="#FF6201" />
                        </svg>
                        <p className={"w-[90%]"}>{bullet}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};
