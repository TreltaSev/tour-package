import type { ClassValue, HTMLAttributes, HTMLButtonAttributes } from "svelte/elements";

export type tDrawerProps = HTMLAttributes<HTMLDivElement> & {
    // Extra Props Here:

    // Component Classes
    drawerClass?: ClassValue 

    // Component Props
    active?: boolean
};
export type tDrawerAnchorProps = HTMLButtonAttributes & {
    // Extra Props Here:

    // Component Classes
    anchorClass?: ClassValue 
};
export type tDrawerMenuProps = HTMLAttributes<HTMLDivElement> & {
    // Extra Props Here:

    // Component Classes

    // Default Classes
    backdropClass?: ClassValue,    
    menuClass?: ClassValue

    // User Defined Classes
    classBackdrop?: ClassValue
};