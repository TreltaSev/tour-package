import type { ClassValue, HTMLAttributes } from 'svelte/elements';

export type tDrawerProps = HTMLAttributes<HTMLDivElement> & {
	// Extra Props Here:

	// Component Classes
	drawerClass?: ClassValue;

	// Component Props
	active?: boolean;
};

export type tDrawerMenuProps = HTMLAttributes<HTMLDivElement> & {
	// Extra Props Here:

	// Component Classes

	// Default Classes
	backdropClass?: ClassValue;
	menuClass?: ClassValue;

	// User Defined Classes
	classBackdrop?: ClassValue;
};
export type tDrawerItemProps = HTMLAttributes<HTMLDivElement> & {
	// Extra Props Here:
    href?: string;
    
	// Component Classes

	// Default Classes
	itemClass?: ClassValue;

	// Component Slots
	slot_text?: CallableFunction;
};
