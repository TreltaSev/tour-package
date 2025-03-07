import type { ClassValue, HTMLInputAttributes } from "svelte/elements";

export type tCheckboxProps = HTMLInputAttributes & {
    // Classes:

    // --- Default Classes:
    checkboxClass?: ClassValue,
    containerClass?: ClassValue,

    // --- User Defined Classes:
    classContainer?: ClassValue,
    
    // Extra Props Here:
    value?: boolean,
    inputValue?: string,
};