"use client";

import React from "react";
import { Input } from "shared/ui/input";
import { FORM_DATA } from "features/form";
import { Button } from "shared/ui";

export const Form = () => {
    return (
        <form
            className={
                "w-full h-full  grid grid-rows-3 grid-cols-2 items-center justify-center max-w-[728px]"
            }
        >
            {FORM_DATA.map((input) => (
                <Input
                    key={input.label}
                    label={input.label}
                    placeholder={input.placeholder}
                    isTextarea={input.isTextarea}
                    validate={(val: string) => !!val.length}
                />
            ))}
            <Button variant={"white"} className={"mt-16"}>
                Оставьте заявку
            </Button>
        </form>
    );
};
