<script lang="ts">
	// --- Components
	import { Flex, Page, Span, Drawer, FScrollable } from '@ui';

	// --- Images
	import Image_MauiMountains from '@assets/backdrop/maui-mountains-1.jpg';
	import Image_MauiBeaches1 from '@assets/backdrop/maui-beaches-1.jpg';
	import Image_MauiBeaches2 from '@assets/backdrop/maui-beaches-2.jpg';
	import Image_MauiNapili1 from '@assets/backdrop/maui-napili-1.jpg';
	import { clamp } from '@root/lib/internal';

	import IconLogo from '~icons/local/logo';
	import { Affected } from '@root/lib/ui/fscrollable';

	// This is where functional logic is, for main pages this might not be used
</script>

<svelte:head>
	<title>Main Page</title>
</svelte:head>

<FScrollable.Root class="bg-black">
	<!-- First View -->
	<FScrollable.View classContainer="items-center pt-20">
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
			class="animate ease-out size-full absolute items-center pt-40 flex flex-col opacity-100"
			in_start={0}
			in_end={0.1}
			out_start={0.2}
			out_end={0.3}
			in_transition={(p: number) => `top: ${10 * (1 - p)}%; opacity: 1`}
			out_transition={(p: number) => `top: -10%;`}
		>
			<FScrollable.Affected
				class="animate"
				out_start={0.5}
				out_end={1}
				in_transition={(p: number) => `opacity: 1`}
				out_transition={(p: number) => `opacity: ${p}`}
			>
				<h1 class="text-white text-3xl whitespace-nowrap underline font-bold">Maui Travels</h1>
			</FScrollable.Affected>
			<FScrollable.Affected
				out_start={0.2}
				out_end={0.3}
				in_transition={(p: number) => `opacity: 1`}
				out_transition={(p: number) => `opacity: ${p}`}
				class="opacity-100 w-120 text-center"
			>
				<span class="text-lg text-white">
					Maui is the second-largest island in Hawaii and is known for its stunning landscapes,
					diverse ecosystems, and rich cultural heritage.
				</span>
			</FScrollable.Affected>
		</FScrollable.Affected>
	</FScrollable.View>
</FScrollable.Root>
