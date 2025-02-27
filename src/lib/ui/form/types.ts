import type { ClassValue, HTMLAttributes, HTMLInputAttributes } from 'svelte/elements';

export type tFormProps = HTMLAttributes<HTMLFormElement> & {
	// Extra Props Here:
	formClass?: ClassValue;
};
export type tFormInputProps = HTMLInputAttributes & {
	// Extra Props Here:

    // Default Classes
    labelClass?: ClassValue;
    inputClass?: ClassValue;
    containerClass?: ClassValue;

    // User Defined Classes
    classLabel?: ClassValue;
    classContainer?: ClassValue;

    // Component Props
    label?: string;
};

export type tFormCheckboxProps = HTMLInputAttributes & {
    // Extra Props Here:

    // Default Classes
    containerClass?: ClassValue;
    inputClass?: ClassValue;
    checkboxClass?: ClassValue;

    // User Defined Classes
    classContainer?: ClassValue;
    classCheckbox?: ClassValue;
    classInput?: ClassValue;

    // Component Props
    value?: boolean;
    inputValue?: string;
    label?: string;
};