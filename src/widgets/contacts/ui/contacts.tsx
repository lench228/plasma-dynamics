import React from "react";

import { Contact } from "widgets/contacts/ui/contact";
import { CONTACTS } from "widgets/contacts/model";

export default function Contacts() {
    return (
        <section className={"p-20"}>
            <h2 className={"header-1 mb-20"}>Наши контакты</h2>
            <ul className={"flex  items-center justify-between gap-4"}>
                {CONTACTS.map((item) => (
                    <Contact key={item.label} label={item.label} value={item.value} />
                ))}
            </ul>
        </section>
    );
}
