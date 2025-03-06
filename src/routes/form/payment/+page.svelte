<script lang="ts">
	import { deserializeData } from '@root/lib/internal';
	import { getPageCtx } from '@root/lib/ui/page/ctx';
	import { Span } from '@ui';

	const data = deserializeData(window.location.search);

	const { hideDrawer$ } = getPageCtx();

	hideDrawer$.set(true);
</script>

{#if !data}
	<Span>No data</Span>
{:else}
	<Span>{data['first-name']}</Span>
{/if}

<button class="text-white px-6 py-2 rounded-sm bg-primary-600 cursor-pointer">
	Pay $<!--Insert custom payment amount based off selection here-->
</button>