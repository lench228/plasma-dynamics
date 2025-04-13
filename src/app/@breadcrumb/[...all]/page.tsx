import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "shared/ui/breadcrumb";
import React from "react";
import type { ReactElement } from "react";

const pathTranslations: Record<string, string> = {
    methods: "Способы напыления",
    about: "О нас",
    contacts: "Контакты",
    types: "Типы покрытий",
};

export default async function BreadcrumbSlot({ params }: { params: Promise<{ all: string[] }> }) {
    const breadcrumbItems: ReactElement[] = [];
    let breadcrumbPage: ReactElement = <></>;

    const { all } = await params;

    for (let i = 0; i < all.length; i++) {
        const route = all[i];
        const href = i !== 0 ? `/${all.at(0)}/${route}` : `/${all.at(0)}`;

        const translatedRoute = pathTranslations[route] || route;
        if (i === all.length - 1) {
            breadcrumbPage = (
                <BreadcrumbItem>
                    <BreadcrumbPage className="capitalize">{translatedRoute}</BreadcrumbPage>
                </BreadcrumbItem>
            );
        } else {
            breadcrumbItems.push(
                <React.Fragment key={href}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href={href} className="capitalize">
                            {translatedRoute}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </React.Fragment>
            );
        }
    }

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {breadcrumbItems.length > 0 && (
                    <>
                        {breadcrumbItems} <BreadcrumbSeparator />
                    </>
                )}
                {breadcrumbPage}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
