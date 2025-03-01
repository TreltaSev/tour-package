import { removeUndefined } from '@root/lib/internal';
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
import type { tFscrollableProps } from './types';



// --- Root Level Context

export function createFScrollableData(props: tFscrollableProps) {
	const state$: Writable<boolean> = writable(false);

	return {
		...props,
		state$
	};
}

export function getFScrollableData() {
	const NAME = 'drawer-data' as const;

	return {
		NAME
	};
}

export function setCtx(properties: tFscrollableProps = {}) {
	const { NAME } = getFScrollableData();

	const fscrollable = {
		...createFScrollableData({ ...removeUndefined(properties) })
	};

	setContext(NAME, fscrollable);

	return {
		...fscrollable
	};
}

type GetReturn = ReturnType<typeof setCtx>;
export function getCtx() {
	const { NAME } = getFScrollableData();
	return getContext<GetReturn>(NAME);
}

// --- View Component Level Context

export function createFScrollableViewData(props: tFscrollableProps) {
	const otherstate$: Writable<boolean> = writable(false);

	return {
		...props,
		otherstate$
	};
}

export function getFScrollableViewData() {
	const NAME = 'drawer-data' as const;

	return {
		NAME
	};
}

export function setViewCtx(properties: tFscrollableProps = {}) {
	const { NAME } = getFScrollableViewData();

	const fscrollable = {
		...createFScrollableViewData({ ...removeUndefined(properties) })
	};

	setContext(NAME, fscrollable);

	return {
		...fscrollable
	};
}

type GetViewReturn = ReturnType<typeof setViewCtx>;
export function getViewCtx() {
	const { NAME } = getFScrollableViewData();
	return getContext<GetViewReturn>(NAME);
}
