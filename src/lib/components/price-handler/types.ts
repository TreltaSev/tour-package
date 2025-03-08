import type { ClassValue, HTMLAttributes } from "svelte/elements";

export type tPriceHandlerProps = HTMLAttributes<HTMLDivElement> & {
    // Classes:

    // --- Default Classes:
    priceHandlerClass?: ClassValue,
    
    // Extra Props Here:
    price?: number
};