/* eslint-disable @typescript-eslint/no-explicit-any */
import { removeUndefined } from '@root/lib/internal';
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
import type { tDrawerProps } from './types';

export function createDrawerData(properties: tDrawerProps) {
	const show$: Writable<boolean> = writable(sessionStorage.getItem("drawer-show") ? true : false);

	show$.subscribe((state_show) => {
		if (state_show) {
			sessionStorage.setItem("drawer-show", "yes")
		} else {
			sessionStorage.removeItem("drawer-show")
		}
	})

	// Close Drawer Function
	function close_drawer() {
		show$.set(false);
	}

	// Open Drawer Function
	function open_drawer() {
		show$.set(true)
	}

	function toggle_drawer() {
		show$.update((current_show) => {
			return !current_show
		})
	}

	return {
		...properties,
		show$,
		close_drawer,
		open_drawer,
		toggle_drawer,
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
