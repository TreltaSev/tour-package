<script lang="ts">

	// --- Styling ---
	import '../app.css';

	// --- Components ---
	import { Page } from '@ui';

	// --- Logic ---
	import { fade } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';

	// Props/state
	let { children, data } = $props();
	import { global_mode$ } from '@lib/stores/mode';		
	let mode$ = global_mode$.mode$;

	// Apply the class on subscription update
	mode$.subscribe((v) => {
		localStorage.theme = "light"
		if (typeof document !== 'undefined') {
			document.documentElement.classList.toggle('dark', v === 'dark');
		}
	});
</script>

{#key data.url}
	<Page.Root class="overflow-hidden bg-primary-100 dark:bg-primary-950">
		<div
			in:fade={{ duration: 300, delay: 300, easing: sineInOut }}
			out:fade={{ duration: 300, easing: sineInOut }}
			class="bg-primary-100 dark:bg-primary-950 size-full transition-all"
		>
			{@render children?.()}
		</div>
	</Page.Root>
{/key}

<style>
	:global(html, body) {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
