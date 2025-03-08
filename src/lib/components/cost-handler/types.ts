import type { Snippet } from "svelte";
import type { ClassValue, HTMLAttributes } from "svelte/elements";

export type tCostHandlerProps = HTMLAttributes<HTMLDivElement> & {
    // Classes:

    // --- Default Classes:
    costHandlerClass?: ClassValue,
    
    // Extra Props Here:
    ref_form?: HTMLFormElement,
    children?: Snippet<[number | undefined]>

};