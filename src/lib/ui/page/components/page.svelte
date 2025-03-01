<script lang="ts">
	// --- Components ---
	import IconHome from '~icons/material-symbols/home-rounded';
	import IconForm from '~icons/mdi/form';

	import { cn } from '@lib/utils';
	import type { Props } from '..';

	import { Drawer, Flex, Page } from '@ui';
	import { SpeedDial } from '@components';
	import Span from '../../span/components/span.svelte';

	// -=-=-=-=- Props -=-=-=-=- //

	let {
		children,
		class: className,
		pageClass = 'flex flex-col size-full',
		topComponent = $bindable(undefined),
		leftComponent = $bindable(undefined),
		rightComponent = $bindable(undefined)
	}: Props = $props();

	let pageCls = $state('');

	$effect(() => {
		pageCls = cn(pageClass, className);
	});
</script>

<Flex.Row class="size-full">
	<!-- Drawer -->
	<Drawer.Root active={true}>
		<Drawer.Menu>
			<Drawer.Item href="/">
				<IconHome class="size-6 shrink-0" />
				{#snippet slot_text()}
					<Span>Home</Span>
				{/snippet}
			</Drawer.Item>

			<Drawer.Item href="/form">
				<IconForm class="size-6 shrink-0" />
				{#snippet slot_text()}
					<Span>Form</Span>
				{/snippet}
			</Drawer.Item>
		</Drawer.Menu>
	</Drawer.Root>

	<Flex.Col class={pageCls}>
		<!-- Navigation Bar -->

		{@render topComponent?.()}

		{@render children?.()}

		<!-- Speed Dial -->
		<SpeedDial />
	</Flex.Col>
</Flex.Row>
