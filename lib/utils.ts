import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

export function formatTotalViews(totalViews: number) {
    return !totalViews
        ? "0 Views"
        : totalViews === 1
          ? `${totalViews} View`
          : `${totalViews} Views`;
}
