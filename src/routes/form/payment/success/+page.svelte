<script lang="ts">
	import { base } from '$app/paths';
	import { Flex } from '@root/lib/ui';
	import { getPageCtx } from '@root/lib/ui/page/ctx';

	const { hideDrawer$ } = getPageCtx();
	hideDrawer$.set(true);

	import IconCheck from '~icons/cuida/check-outline';
</script>

{#snippet check()}
    <Flex.Col class="size-75 bg-[#7FFFA3] rounded-[72px] items-center justify-center">
        <IconCheck class="text-white size-54"/>
    </Flex.Col>
{/snippet}

<Flex.Col class="size-full bg-primary-1000 items-center justify-center gap-10">
    {@render check()}

    <Flex.Col class="text-center">
        <span class="text-white/80">Payment Successful</span>
        <span class="text-white/80">ref_id: <span class="text-white/60">#{sessionStorage.getItem('pay-id')}</span></span>
    </Flex.Col>

    <span class="text-white/50 text-base">Call us to set everything up: (804)-555-55555</span>

    <button class="px-4 py-2 rounded-lg bg-[#7FFFA3] cursor-pointer text-white" onclick={() => window.location.href=`${base}/`}>Return to Home</button>
</Flex.Col>
