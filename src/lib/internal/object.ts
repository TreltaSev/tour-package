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