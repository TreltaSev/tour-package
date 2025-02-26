/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ClassValue, HTMLAttributes } from 'svelte/elements';

export type tPageProps = HTMLAttributes<HTMLDivElement> & {
    pageClass?: ClassValue,
    hideNav?: boolean,
    topComponent?: any,
    leftComponent?: any,
    rightComponent?: any
}
