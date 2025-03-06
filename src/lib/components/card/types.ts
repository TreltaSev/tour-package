import type { Snippet } from "svelte";
import type { ClassValue, HTMLAttributes } from "svelte/elements";

export type tCardProps = HTMLAttributes<HTMLDivElement> & {
    // Extra Props Here:
    
    cardClass?: ClassValue,
    classContainer?: ClassValue

    // Slot Components
    slot_image?: Snippet
};