"use client";

import { useEffect, useRef } from "react";

export default function YandexMapSimple() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current;
            if (!container || container.children.length > 0) return;

            const iframe = document.createElement("iframe");
            iframe.src =
                "https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=false&source=constructor-api&um=constructor%3A3d64fca7c17b829e1222b9472bea7dd18a99b9facba5802d3c103b2662629a62";
            iframe.style.width = "100%";
            iframe.style.height = "600px";

            container.appendChild(iframe);

            return () => {
                container.innerHTML = "";
            };
        }
    }, []);

    return <div ref={containerRef} className="w-screen  h-[400px] rounded-lg" />;
}
