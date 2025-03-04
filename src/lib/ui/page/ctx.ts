/* eslint-disable @typescript-eslint/no-explicit-any */
import { removeUndefined } from '@root/lib/internal';
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
import type { tPageProps } from './types';

export function createPageData(properties: tPageProps) {
	const hideDrawer$: Writable<boolean> = writable(false);

	return {
		...properties,
		hideDrawer$
	};
}

export function getPageData() {
	const NAME = 'page-data' as const;

	return {
		NAME
	};
}

export function setPageCtx(properties: tPageProps = {}) {
	const { NAME } = getPageData();

	const drawer = {
		...createPageData({ ...removeUndefined(properties) })
	};

	setContext(NAME, drawer);

	return {
		...drawer
	};
}

type GetReturn = ReturnType<typeof setPageCtx>;
export function getPageCtx() {
	const { NAME } = getPageData();
	return getContext<GetReturn>(NAME);
}
