import { removeUndefined } from '@root/lib/internal';
import { getContext, setContext } from 'svelte';
import { derived, get, readable, writable, type Readable, type Writable } from 'svelte/store';
import type { tFscrollableProps } from './types';

// --- Root Level Context

export function createFScrollableData(props: tFscrollableProps) {
	const state$: Writable<boolean> = writable(false);
	const view_count$: Writable<number> = writable(0);
	const root_height$: Writable<number> = writable(window.innerHeight);
	const combined_height$: Writable<number> = writable(0);
	const scroll_delta$: Writable<number> = writable(0);

	view_count$.subscribe((c_view_count) => {
		console.log(c_view_count, get(root_height$));
		combined_height$.set(c_view_count * get(root_height$));
	});

	return {
		...props,
		state$,
		view_count$,
		root_height$,
		combined_height$,
		scroll_delta$
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

export function createFScrollableViewData(props: { order?: number } = {}) {
	const { root_height$ } = getCtx();
	console.log(props.order);
	const order$ = readable(props.order || 1);
	const is_shown$: Writable<boolean> = writable(false);
	const start_position$: Readable<number> = derived(root_height$, ($root_height) => {
		return ((get(order$) || 1) - 1) * $root_height;
	});

	const transition_progress$: Writable<number> = writable(0);
	const in_transition_progress$: Writable<number> = writable(0);
	const out_transition_progress$: Writable<number> = writable(0);

	const default_in_start$: Writable<number> = writable(0);
	const default_in_end$: Writable<number> = writable(0.5);
	const default_out_start$: Writable<number> = writable(0.5);
	const default_out_end$: Writable<number> = writable(1);

	return {
		...props,
		order$,
		is_shown$,
		start_position$,
		transition_progress$,
		in_transition_progress$,
		out_transition_progress$,
		default_in_start$,
		default_in_end$,
		default_out_start$,
		default_out_end$
	};
}

export function getFScrollableViewData() {
	const NAME = 'drawer-view-data' as const;

	return {
		NAME
	};
}

export function setViewCtx(properties: { order?: number } = {}) {
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
