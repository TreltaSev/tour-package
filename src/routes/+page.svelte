<script lang="ts">
	// --- Components
	import { Flex, Page, Span, Drawer, FScrollable } from '@ui';

	// --- Images
	import Image_MauiMountains from '@assets/backdrop/maui-mountains-1.jpg';
	import Image_MauiBeaches1 from '@assets/backdrop/maui-beaches-1.jpg';
	import Image_MauiBeaches2 from '@assets/backdrop/maui-beaches-2.jpg';
	import Image_MauiNapili1 from '@assets/backdrop/maui-napili-1.jpg';
	import { clamp } from '@root/lib/internal';
	import { fade, fly } from 'svelte/transition';

	import IconLogo from "~icons/local/logo"

	// This is where functional logic is, for main pages this might not be used
</script>

<svelte:head>
	<title>Main Page</title>
</svelte:head>

<FScrollable.Root>
	<!-- First View -->
	<FScrollable.View classContainer="items-center pt-20" id="first one">
		{#snippet backdrop()}
			<FScrollable.Backdrop>
				<FScrollable.Affected
					class="size-full bg-cover ease-out bg-no-repeat bg-center"
					style="background-image: url('{Image_MauiNapili1}')"
					in_end={0.3}
					out_start={0.7}
					in_transition={(p: number) =>
						`background-size: ${120 + (1 - p) * 320}%; background-position: 50% ${50 + p * 50}%; opacity: ${clamp(1 - p, 0.5, 1)};`}
					out_transition={(p: number) =>
						`background-size: ${120}%; background-position: 50% 100%; opacity: ${clamp(p, 0, 0.5)}`}
				/>
			</FScrollable.Backdrop>
		{/snippet}
		<FScrollable.Affected
			class="animate ease-out size-full absolute top-0 left-0"
			in_end={0.3}
			out_start={0.7}
			in_transition={(p: number) => `top: ${p*280}px`}
			out_transition={(p: number) => `top: ${p*280}px;opacity: ${p};`}
		>
			<h1 class="text-white text-5xl absolute whitespace-nowrap top-[80px] left-[80px]">LOOK MA IM MOVING!</h1>
		</FScrollable.Affected>

		<FScrollable.Affected
			class="animate ease-out size-full absolute bottom-0 right-20"
			in_end={0.3}
			out_start={0.7}
			out_end={0.8}
			in_transition={(p: number) => `top: ${window.innerHeight-(280*p)}px`}
			out_transition={(p: number) => `top: ${window.innerHeight-280}px;opacity: ${p};`}
		>
			<h1 class="text-white text-5xl absolute whitespace-nowrap right-[80px]">im sneaky >:) and disappear faster</h1>
		</FScrollable.Affected>

		<FScrollable.Affected
			class="animate size-full absolute items-center justify-center flex flex-col"
			in_start={0.25}
			out_start={0.7}
			in_transition={(p: number) => `opacity: ${p*4}`}
			out_transition={(p: number) => `opacity: ${p*4}`}
		>
			<h1 class="text-white text-2xl absolute whitespace-nowrap">I appear half way through with a different easing function</h1>
		</FScrollable.Affected>
	</FScrollable.View>

	<!-- ======================== Second View ======================== -->
	<FScrollable.View classContainer="items-center pt-20" id="first one">
		{#snippet backdrop()}
			<FScrollable.Backdrop>
				<FScrollable.Affected
					class="size-full bg-cover ease-out bg-no-repeat bg-center"
					style="background-image: url('{Image_MauiMountains}')"
					in_end={0.3}
					out_start={0.7}
					in_transition={(p: number) =>
						`background-size: ${120 + (1 - p) * 320}%; background-position: ${50 + p * 50} 100%; opacity: ${clamp(p * 4, 0, 1)};`}
					out_transition={(p: number) =>
						`background-size: ${120}%; background-position: 50% 100%; opacity: ${clamp(p, 0, 0.5)}`}
				/>
			</FScrollable.Backdrop>
		{/snippet}


		<FScrollable.Affected
			class="animate ease-out size-full absolute bottom-0 right-20"
			in_end={0.3}
			out_start={0.7}
			out_end={0.8}
			in_transition={(p: number) => `top: ${window.innerHeight-(280*p)}px`}
			out_transition={(p: number) => `top: ${window.innerHeight-280}px;opacity: ${p};`}
		>
			<h1 class="text-white text-5xl absolute whitespace-nowrap right-[80px]">And I just exist...</h1>
		</FScrollable.Affected>


		<FScrollable.Affected
			class="animate size-full absolute items-center  flex flex-col"
			in_start={0.25}
			out_start={0.7}
			in_transition={(p: number) => `opacity: ${p*4}`}
			out_transition={(p: number) => `opacity: ${p*4}`}
		>
			<IconLogo class="size-80"/>
		</FScrollable.Affected>

	</FScrollable.View>
</FScrollable.Root>
