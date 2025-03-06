import type { ClassValue, HTMLAttributes } from 'svelte/elements';
import type { Writable } from 'svelte/store';

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

export type tDrawerHamburgerProps = HTMLAttributes<HTMLDivElement> & {
    // Extra Props Here:
};

export type tDrawerDropdownData = {
	id?: string,
	item_count?: Writable<number>;
}

export type tDrawerDropdownProps = HTMLAttributes<HTMLDivElement> & {
    // Classes:

    // --- Default Classes:
    dropdownClass?: ClassValue,
    
    // Extra Props Here:
	disabled?: boolean
};