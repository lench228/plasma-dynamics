import React from "react";

import { Contact } from "widgets/contacts/ui/contact";
import { CONTACTS } from "widgets/contacts/model";

export default function Contacts() {
    return (
        <section className={"p-4 xl:p-20 py-10"} id={"contacts"}>
            <h2 className={"header-1 mb-20"}>Наши контакты</h2>
            <ul
                className={
                    "flex sm:flex-row flex-col  items-center justify-between sm:gap-4 gap-10"
                }
            >
                {CONTACTS.map((item) => (
                    <Contact key={item.label} label={item.label} value={item.value} />
                ))}
            </ul>
        </section>
    );
}
