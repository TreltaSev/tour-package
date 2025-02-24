<script lang="ts">
	import { cn } from '@lib/utils';
	import type { Props } from '..';

	import { Flex, Page } from '@ui';
	import { SpeedDial } from '@components';

	// -=-=-=-=- Props -=-=-=-=- //

	let {
		children,
		class: className,
		pageClass = 'flex flex-col size-full items-center justify-center select-none z-2 px-90 box-border h-fit',
		hideNav = $bindable(false)
	}: Props & any = $props();

	let pageCls = $state("")

	$effect(() => {
		pageCls = cn(pageClass, className);
	})

</script>

<Flex.Col class={pageCls}>
	{@render children?.()}

	<!-- Speed Dial -->
	<SpeedDial />
</Flex.Col>
