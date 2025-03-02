import type { Snippet } from "svelte";
import type { ClassValue, HTMLAttributes } from "svelte/elements";

export type tTransition = (p: number) => string

export type tFscrollableProps = HTMLAttributes<HTMLDivElement> & {
    // Classes:

    // --- Default Classes:
    fscrollableClass?: ClassValue,
    
    // Extra Props Here:

};
export type tFscrollableViewProps = HTMLAttributes<HTMLDivElement> & {
    // Classes:

    // --- Default Classes:
    viewClass?: ClassValue,
    containerClass?: ClassValue,

    // --- User Defined Classes:
    classContainer?: ClassValue,
    
    // Extra Props Here:
    backdrop?: Snippet,
    transition?: tTransition,
    in_transition?: tTransition,
    out_transition?: tTransition,
    in_start?: number,
    in_end?: number,
    out_start?: number,
    out_end?: number,
    full_transition_progress?: number,
    in_transition_progress?: number,
    out_transition_progress?: number
};
export type tFscrollableBackdropProps = HTMLAttributes<HTMLDivElement> & {
    // Classes:

    // --- Default Classes:
    backdropClass?: ClassValue,
    
    // Extra Props Here:
    el?: HTMLDivElement;
};
export type tFscrollableAffectedProps = HTMLAttributes<HTMLDivElement> & {
    // Classes:

    // --- Default Classes:
    affectedClass?: ClassValue,
    
    // Extra Props Here:
    transition?: tTransition,
    in_transition?: tTransition,
    out_transition?: tTransition,
    in_start?: number,
    in_end?: number,
    out_start?: number,
    out_end?: number,
    full_transition_progress?: number,
    in_transition_progress?: number,
    out_transition_progress?: number,
    src?: string,
};
export type tFscrollableBooleanProps = HTMLAttributes<HTMLDivElement> & {
    // Classes:

    // --- Default Classes:
    booleanClass?: ClassValue,
    
    // Extra Props Here:
    in_start?: number,
    in_end?: number,
    out_start?: number,
    out_end?: number,
};