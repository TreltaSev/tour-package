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
		if (value !== "") {
			result[key] = value;
		}
	}
	return result
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
    return clamp(((value - min) / (max - min)), 0, 1);
}

// Gets all the inputted data from a form
export function parseForm(target: HTMLFormElement): object {
	const formData = new FormData(target);

	const out = {}

	// TODO: Fix this :)
	// for (const [value, key] in formData) {

	// }

	formData.forEach((value, key) => {
		if (key in out) {
			console.log("Included")

		}
	})
	console.log(Object.fromEntries(formData))
	const formJson = removeEmpty(Object.fromEntries(formData));
	throw new Error("Stop");
	return formJson
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
		result += `&${key}=${value}`
	}
	return result
}

export function deserializeData(data: string): any {

	// Make sure data isn't nothing
	if (data === undefined) return;

	const out = {} as any

	data = data.replace("?", "") // Remove first ?
	const parts = data.split("&")

	parts.forEach(subpart => {
		const [key, value] = subpart.split("=")
		out[key] = value
	})

	return out
}