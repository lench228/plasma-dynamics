import React from "react";
import { PRICE_ITEM } from "widgets/prices/model";
import { PricesItem } from "widgets/prices/ui/prices-item";

const Prices = () => {
    return (
        <section className="sm:p-20" id={"about"}>
            <h3 className={"header-2 mb-4"}>
                Как формируется <span className={"text-accent"}>цена</span>
            </h3>
            <p className={"regular-text mb-10"}>Цена может зависеть от множества факторов:</p>
            <ul
                className={
                    "grid grid-rows-4 sm:grid-rows-1 sm:grid-cols-4 text-white gap-4 small-text"
                }
            >
                {PRICE_ITEM.map((item, index) => (
                    <PricesItem key={item.title} item={item} index={index + 1} />
                ))}
            </ul>
        </section>
    );
};

export default Prices;
