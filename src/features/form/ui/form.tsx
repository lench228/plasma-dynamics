"use client";

import React from "react";

import { Input } from "shared/ui";
import { Button } from "shared/ui";

import { FORM_DATA } from "features/form/model";

export const Form = () => {
    return (
        <form
            className={
                "w-full h-full  grid grid-rows-3 grid-cols-2 items-center justify-center max-w-[728px]"
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
            <Button tabIndex={5} variant={"white"} className={"mt-16"}>
                Оставьте заявку
            </Button>
        </form>
    );
};
