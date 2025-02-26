import type { ClassValue, HTMLAttributes } from "svelte/elements";

export type tDrawerProps = HTMLAttributes<HTMLDivElement> & {
    // Extra Props Here:
    drawerClass?: ClassValue 
    active?: boolean
};