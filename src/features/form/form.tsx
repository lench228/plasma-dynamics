import React from "react";
import { Input } from "shared/ui/input";

export const Form = () => {
    return (
        <form>
            <Input type={"text"} label={"Title"} validate={(value: string) => value !== ""} />
        </form>
    );
};
