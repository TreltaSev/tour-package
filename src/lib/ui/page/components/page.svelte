<script lang="ts">
	// --- Components ---
	import IconHome from '~icons/material-symbols/home-rounded';
	import IconForm from '~icons/mdi/form';
	import IconPackage from '~icons/mdi/transit-detour';
	import IconCaret from '~icons/solar/alt-arrow-left-bold';

	import IconBeach from '~icons/majesticons/beach';
	import IconVolcano from '~icons/material-symbols/volcano-rounded';
	import IconCity from '~icons/solar/city-bold';

	import { cn } from '@lib/utils';
	import type { Props } from '..';

	import { Drawer, Flex, Page, Separator } from '@ui';
	import { SpeedDial } from '@components';
	import Span from '../../span/components/span.svelte';
	import { setPageCtx } from '../ctx';
	import DrawerItem from '../../drawer/components/drawer-item.svelte';

	// -=-=-=-=- Props -=-=-=-=- //

	let {
		children,
		class: className,
		pageClass = 'flex flex-col size-full',
		topComponent = $bindable(undefined)
	}: Props = $props();

	let pageCls = $state('');

	$effect(() => {
		pageCls = cn(pageClass, className);
	});

	// Set Context
	const { hideDrawer$ } = setPageCtx({});
</script>

<main class="flex flex-row size-full">
	<!-- Drawer -->
	{#if !$hideDrawer$}
		<Drawer.Root active={true}>
			<Drawer.Menu>
				<Drawer.Item href="/">
					<IconHome class="size-6 shrink-0" onclick={() => {window.location.replace('https://www.youtube.com/watch?v=xvFZjo5PgG0')}} />
					{#snippet slot_text()}
						<Span class="text-inherit">Home</Span>
					{/snippet}
				</Drawer.Item>

				<Drawer.Dropdown>
					{#snippet slot_root($dropdown_show$)}
						<Drawer.Item root>
							<IconPackage class="size-6 shrink-0" />
							{#snippet slot_text()}
								<Span class="text-inherit">Packages</Span>
							{/snippet}
							{#snippet slot_right()}
								<Separator />
								<IconCaret
									class={cn(
										'shrink-0 rotate-180 animate ease-out',
										$dropdown_show$ && 'rotate-270'
									)}
								/>
							{/snippet}
						</Drawer.Item>
					{/snippet}

					<Drawer.Item href="/packages/beach">
						<IconBeach class="size-6 shrink-0" />
						{#snippet slot_text()}
							<Span class="text-inherit">Beach</Span>
						{/snippet}
					</Drawer.Item>

					<Drawer.Item href="/packages/city">
						<IconCity class="size-6 shrink-0" />
						{#snippet slot_text()}
							<Span class="text-inherit">City</Span>
						{/snippet}
					</Drawer.Item>

					<Drawer.Item href="/packages/volcano">
						<IconVolcano class="size-6 shrink-0" />
						{#snippet slot_text()}
							<Span class="text-inherit">Volcano</Span>
						{/snippet}
					</Drawer.Item>
				</Drawer.Dropdown>

				<Drawer.Item href="/form">
					<IconForm class="size-6 shrink-0" />
					{#snippet slot_text()}
						<Span class="text-inherit">Form</Span>
					{/snippet}
				</Drawer.Item>
			</Drawer.Menu>
		</Drawer.Root>
	{/if}

	<Flex.Col class={pageCls}>
		<!-- Navigation Bar -->

		{@render topComponent?.()}

		{@render children?.()}

		<!-- Speed Dial -->
		<SpeedDial />
	</Flex.Col>
</main>
