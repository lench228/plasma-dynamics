export default function YandexMapSimple() {
    return (
        <div className="w-screen h-[400px] rounded-lg">
            <iframe
                className={"w-full h-full"}
                src={
                    "https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=false&source=constructor-api&um=constructor%3A3d64fca7c17b829e1222b9472bea7dd18a99b9facba5802d3c103b2662629a62"
                }
            ></iframe>
        </div>
    );
}
