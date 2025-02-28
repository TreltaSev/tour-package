<script lang="ts">
	import { cn } from '@lib/utils';
	import type { Props } from '..';

	import { Drawer, Flex, Page } from '@ui';
	import { SpeedDial } from '@components';

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
	<Drawer.Root active={true}>
		<Drawer.Menu>
			<span>...</span>
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
