import type { Snippet } from "svelte";
import type { ClassValue, HTMLAttributes } from "svelte/elements";

export type tCheckboxProps = HTMLAttributes<HTMLDivElement> & {
    // Classes:

    // --- Default Classes:
    checkboxClass?: ClassValue,
    containerClass?: ClassValue,

    // --- User Defined Classes:
    classContainer?: ClassValue,
    
    // Extra Props Here:
    value?: boolean,
    inputValue?: string,

    // Snippets
    slot_label?: Snippet,
};