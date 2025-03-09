<script lang="ts">
	import { CostHandler } from '@root/lib/components';
	import { deserializeData } from '@root/lib/internal';
	import { getPageCtx } from '@root/lib/ui/page/ctx';
	import { cn } from '@root/lib/utils';
	import { Flex, Form, Span } from '@ui';
	import type { ClassValue } from 'svelte/elements';

	// --- Icons
	import IconApple from '~icons/ic/baseline-apple';
	import IconGoogle from '~icons/flat-color-icons/google';
	import IconVisa from '~icons/cib/cc-visa';
	import IconAmex from '~icons/logos/amex';
	import IconMasterCard from '~icons/logos/mastercard';
	import IconCVC from '~icons/token/cvc';

	// --- Images
	import Image_MauiPaymentBackdrop from '@assets/backdrop/maui-pay-1.png';

	// --- Logic

	import { onMount, type Component } from 'svelte';
	import { base } from '$app/paths';
	import prices from '@root/lib/internal/prices';

	const data = deserializeData(window.location.search);

	const { hideDrawer$ } = getPageCtx();

	hideDrawer$.set(true);

	function getCosts() {
		const out = {} as any;
		for (let i = 0; i < sessionStorage.length; i++) {
			const [key, value] = [
				sessionStorage.key(i),
				sessionStorage.getItem(sessionStorage.key(i) || '')
			];
			if (!key?.startsWith('cost-')) {
				continue;
			}
			out[key.slice(5)] = Number(value);
		}
		console.log(out);
		return out;
	}

	function filterObject(obj: Record<string, number>, filterKeys: string[]): [string, number][] {
		return Object.entries(obj).filter(([key]) => filterKeys.includes(key));
	}

	function getLocations() {
		if (!data['location']) return [];
		if (!Array.isArray(data['location'])) {
			data['location'] = [data['location']];
		}
		console.log(data['location']);
		return data['location'];
	}

	let ref_form: HTMLFormElement | undefined;

	type tPackageData = keyof typeof prices.package;
	type tLocationKey = keyof (typeof prices.package)[tPackageData]['locations'];
</script>

{#snippet payment_input(
	placeholder: string,
	name: string,
	type: string = 'text',
	classContainer?: ClassValue,
	classInput?: ClassValue,
	icons: Component[] = [],
	pattern?: string,
	maxlength?: number | null,
	inputmode?: any
)}
	<Flex.Row class={cn(`bg-black/20 py-3 px-5 rounded-[10px]`, classContainer)}>
		<input
			{type}
			{placeholder}
			{name}
			{pattern}
			{maxlength}
			{inputmode}
			class={cn(
				`w-full border-transparent focus:border-transparent focus:ring-0 outline-none focus:outline-none`,
				classInput
			)}
			required
		/>
		{#each icons as icon}
			<svelte:component this={icon} />
		{/each}
	</Flex.Row>
{/snippet}

{#snippet special_payment(classButton?: ClassValue, icon?: Component)}
	<button
		class={cn(
			`py-[5px] rounded-[5px] flex flex-row items-center justify-center gap-2 cursor-pointer`,
			classButton
		)}
		onclick={() => (window.location.href = `${base}/na`)}
		><svelte:component this={icon} /> <span class="text-inherit">Pay</span></button
	>
{/snippet}

{#snippet message()}
	<Flex.Col>
		<span class="text-white text-[64px] whitespace-nowrap select-none"
			>Book your trip <span
				class="bg-[linear-gradient(91deg,#8ADCFA_69.83%,#7FFFA3_101.78%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
				>Today</span
			></span
		>
	</Flex.Col>
{/snippet}

{#snippet summary()}
	<Flex.Col
		class="w-full h-[70%] overflow-y-scroll no-scrollbar box-border p-10 justify-start items-start rounded-[20px] gap-[22px] bg-white text-black [&_*]:text-inherit [&_h1]:text-2xl [&_h2]:text-xl [&_h3]:text-base [&_h3]:text-black/80 [&_h3]:capitalize [&_h4]:text-sm [&_h4]:text-[#319F43] [&_section]:flex [&_section]:flex-row [&_section]:justify-between [&_section]:w-full [&_article]:flex [&_article]:flex-col [&_article]:gap-0 [&_article]:w-full"
	>
		<h1>Summary</h1>
		<h3>For {data['party-size']} {Number(data['party-size']) > 1 ? 'People' : 'Person'}</h3>

		<article class={cn(filterObject(getCosts(), ['package']).length == 0 && 'hidden')}>
			<h2>Package</h2>
			<section>
				<h3>{data['tour-package']}</h3>
				<h4>+${filterObject(getCosts(), ['package'])[0][1]}</h4>
				<!-- This hurts... -->
			</section>
		</article>

		<article class={cn(filterObject(getCosts(), ['location']).length == 0 && 'hidden')}>
			<h2>Locations</h2>
			{#each getLocations() as iLocation}
				<section>
					<h3>{iLocation}</h3>
					<h4>
						+${prices.package[data['tour-package'] as tPackageData].locations[
							iLocation as tLocationKey
						] * Number(data['party-size'])}
					</h4>
					<!-- This hurts... -->
				</section>
			{/each}
		</article>

		<article class={cn(filterObject(getCosts(), ['air']).length == 0 && 'hidden')}>
			<h2>Air Travel</h2>
			{#each filterObject(getCosts(), ['air']) as [key, cost]}
				<section>
					<h3>{data['air-type']} (Round Drip)</h3>
					<h4>+${cost}</h4>
				</section>
			{/each}
		</article>

		<article class={cn(filterObject(getCosts(), ['car', 'meals', 'wine']).length == 0 && 'hidden')}>
			<h2>Extras</h2>
			{#each filterObject(getCosts(), ['car', 'meals', 'wine']) as [key, cost]}
				<section>
					<h3>{key}</h3>
					<h4>+${cost}</h4>
				</section>
			{/each}
		</article>
	</Flex.Col>
{/snippet}

<Flex.Row class="justify-between p-[10%] box-border items-end size-full z-5">
	<img alt="Maui" src={Image_MauiPaymentBackdrop} class="absolute z-0 left-0 top-0 size-full" />

	<!-- Text & Summary -->
	<Flex.Col class="gap-20 box-border h-full items-end justify-end z-1">
		{@render message()}
		{@render summary()}
	</Flex.Col>

	<Flex.Col class="z-1">
		<!-- Form -->
		<Form.Root
			bind:ref={ref_form}
			class="flex flex-col gap-6 bg-white p-5 rounded-[20px] h-fill overflow-y-scroll no-scrollbar box-border"
		>
			<!-- Apple Pay -->
			{@render special_payment('bg-black text-white/80', IconApple)}

			<!-- Google Pay -->
			{@render special_payment(
				'bg-white text-black shadow-[0_0_4px_0_rgba(0,0,0,0.25)]',
				IconGoogle
			)}

			<!-- Divider -->
			<Flex.Row class="w-full items-center justify-center gap-4 min-h-13.75">
				<Flex.Root class="w-full h-0.5 bg-black/60" />
				<span class="text-black/60 whitespace-nowrap">Or pay with card</span>
				<Flex.Root class="w-full h-0.5 bg-black/60" />
			</Flex.Row>

			{@render payment_input('Address', 'address')}
			{@render payment_input('Email', 'email', 'email')}
			{@render payment_input(
				'Card Number',
				'card-num',
				'text',
				'items-center gap-3',
				'',
				[IconVisa, IconMasterCard, IconAmex],
				'',
				19,
				'numeric'
			)}

			<Flex.Row class="w-full gap-3">
				{@render payment_input('Expiration', 'card-exp')}
				{@render payment_input(
					'CVC',
					'card-cvc',
					'tel',
					'justify-between w-full items-center py-1.5 box-border',
					'w-full',
					[IconCVC],
					'',
					4,
					'numeric'
				)}
			</Flex.Row>

			{@render payment_input('Zip', 'zip')}

			<button type="submit" class={`bg-primary-950 cursor-pointer rounded-[10px] text-white py-3`}
				>Pay ${sessionStorage.getItem('total-cost')}</button
			>
		</Form.Root>
	</Flex.Col>
</Flex.Row>
