import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "shared/ui/breadcrumb";

export default function BreadcrumbSlot() {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
}
