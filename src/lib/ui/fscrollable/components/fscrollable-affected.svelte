<script lang="ts">
	// --- Logic ---
	import { cn } from '@lib/utils';
	import type { AffectedProps } from '..';
	import { getViewCtx } from '../ctx';
	import { getRelativePercentage } from '@root/lib/internal';
	import { onMount } from 'svelte';

	const {
		transition_progress$,
		in_transition_progress$,
		out_transition_progress$,
		default_in_start$,
		default_in_end$,
		default_out_start$,
		default_out_end$,
		is_shown$
	} = getViewCtx();

	let {
		children,
		class: className,
		affectedClass = $bindable(''),
		in_transition,
		out_transition,
		transition,
		in_start = $default_in_start$,
		in_end = $default_in_end$,
		out_start = $default_out_start$,
		out_end = $default_out_end$,
		src,
		style: stile
	}: AffectedProps = $props();

	let animate_block = $state(true);

	if (transition) {
		in_transition = transition;
		out_transition = transition;
	}

	// Setup Affected's class
	let affectedCls = $state(cn(affectedClass, className));
	$effect(() => {
		affectedCls = cn(affectedClass, className, !animate_block && 'animate');
	});

	let elem_transition = $state('');

	onMount(() => {
		requestAnimationFrame(() => {
			setTimeout(() => {
				animate_block = false;
			}, 1);
		});
	});

	$effect(() => {
		const in_transition_progress = getRelativePercentage($transition_progress$, in_start, in_end);
		const out_transition_progress = getRelativePercentage(
			$transition_progress$,
			out_start,
			out_end
		);
		if (in_transition_progress >= 0 && in_transition_progress < 1) {
			// Do In Transition
			if (!in_transition) return;
			elem_transition = in_transition(in_transition_progress);
		} else {
			// Do out Transition
			if (!out_transition) return;
			elem_transition = out_transition(Math.abs(out_transition_progress - 1));
		}
	});
</script>

{#if src}
	<img
		alt=""
		{src}
		class={cn('size-full object-cover', affectedCls)}
		style={`${stile};${elem_transition}`}
		draggable="false"
	/>
{:else}
	<div class={cn(affectedCls, 'text-white')} style={`${stile};${elem_transition}`}>
		{@render children?.()}
	</div>
{/if}

<!--@component
    Generated by SvelteForge🔥
-->
