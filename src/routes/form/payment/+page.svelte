<script lang="ts">
	import { deserializeData } from "@root/lib/internal";
	import { getPageCtx } from "@root/lib/ui/page/ctx";
	import { Span } from "@ui";

    const data = deserializeData(window.location.search)

    const { hideDrawer$ } = getPageCtx()

    hideDrawer$.set(true)
</script>

{#if !data}
   <Span>No data</Span>
{:else}
    <Span>{data['first-name']}</Span> 
{/if}

