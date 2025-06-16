"use client";

import React from "react";

import { Input } from "shared/ui";
import { Button } from "shared/ui";

import { FORM_DATA } from "features/form/model";

export const Form = () => {
    return (
        <form
            className={
                "gap-6  w-full h-full  grid sm:grid-rows-3 sm:grid-cols-2 sm:max-w-[728px] sm:gap-4 grid-cols-1 items-center justify-center justify-items-center sm:p-5 "
            }
        >
            {FORM_DATA.map((input, index) => (
                <Input
                    key={index}
                    label={input.label}
                    placeholder={input.placeholder}
                    isTextarea={input.isTextarea}
                    index={index}
                    validate={(val: string) => !!val.length}
                />
            ))}
            <Button href={"#contacts"} tabIndex={5} variant={"white"} className={"mt-16"}>
                Оставьте заявку
            </Button>
        </form>
    );
};
