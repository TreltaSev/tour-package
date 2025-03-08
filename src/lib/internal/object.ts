/* eslint-disable @typescript-eslint/no-explicit-any */
export function removeUndefined<T extends object>(obj: T): T {
	const result = {} as T;
	for (const key in obj) {
		const value = obj[key];
		if (value !== undefined) {
			result[key] = value;
		}
	}
	return result;
}

export function removeEmpty<T extends object>(obj: T): T {
	const result = {} as T;
	for (const key in obj) {
		const value = obj[key];
		if (value !== '') {
			result[key] = value;
		}
	}
	return result;
}

/**
 * Clamps value between min and max
 * @param value
 * @param min
 * @param max
 */
export function clamp(value: number, min: number, max: number): number {
	return Math.max(min, Math.min(value, max));
}

/**
 * Calculates the percentage representing how far a value is between a given min and max.
 * The result is clamped between 0 and 1.
 * @param value - The current value within the range.
 * @param min - The minimum value of the range.
 * @param max - The maximum value of the range.
 * @returns The float (0-1) of how far value is between min and max.
 */
export function getRelativePercentage(value: number, min: number, max: number): number {
	return clamp((value - min) / (max - min), 0, 1);
}

// Gets all the inputted data from a form
export function parseForm(target: HTMLFormElement): object {
	const formData = new FormData(target);

	const out = {} as any;

	for (const [key, value] of formData) {

		// Skip Empty Values
		if (value === '' || value === undefined) {
			continue;
		}

		// Duplicate Found, Set value to list if key isn't already
		if (key in out && !Array.isArray(out[key])) {
			out[key] = [out[key], value];
			continue;
		}

		if (Array.isArray(out[key])) {
			out[key].push(value)
			continue
		} 

		// Not a duplicate, singleton value so far
		out[key] = value;
	}

	return out;
}

/**
 * Converts a object into a string
 * @param data Object
 * @returns
 */
export function serializeData(data: any): string {
	let result = '?type=form';
	for (const key in data) {
		const value = data[key];

		// Array-Like item
		if (Array.isArray(value)) {
			value.forEach((item) => {
				result += `&${key}=${item}`;
			});
			continue;
		}

		// Singleton Item
		result += `&${key}=${value}`;
	}
	return result;
}

export function deserializeData(data: string): any {
	// Make sure data isn't nothing
	if (data === undefined) return;

	const out = {} as any;

	data = data.replace('?', ''); // Remove first ?
	const parts = data.split('&');

	parts.forEach((subpart) => {
		const [key, value] = subpart.split('=');

		// Make out an array
		if (key in out && !Array.isArray(out[key])) {
			// Array Value
			out[key] = [out[key]];
		}

		if (key in out) {
			if (Array.isArray(out[key])) {
				out[key].push(value);
			}
		} else {
			// Not array
			out[key] = value;
		}
	});

	return out;
}
