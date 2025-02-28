/* eslint-disable @typescript-eslint/no-explicit-any */
import { removeUndefined } from '@root/lib/internal';
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
import type { tDrawerProps } from './types';

export function createDrawerData(properties: tDrawerProps) {
	const show$: Writable<boolean> = writable(false);

	return {
		...properties,
		show$
	};
}

export function getDrawerData() {
	const NAME = 'drawer-data' as const;

	return {
		NAME
	};
}

export function setCtx(properties: tDrawerProps = {}) {
	const { NAME } = getDrawerData();

	const drawer = {
		...createDrawerData({ ...removeUndefined(properties) })
	};

	setContext(NAME, drawer);

	return {
		...drawer
	};
}

type GetReturn = ReturnType<typeof setCtx>;
export function getCtx() {
	const { NAME } = getDrawerData();
	return getContext<GetReturn>(NAME);
}
