<script lang="ts">
	import { deserializeData } from "@root/lib/internal";
	import { Span } from "@ui";

    const data = deserializeData(window.location.search)
</script>

{#if !data}
   <Span>No data</Span>
{:else}
    <Span>{data['first-name']}</Span> 
{/if}

