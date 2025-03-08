<script lang="ts">
	// --- Components
	import { Flex, Page, Span, Drawer, FScrollable } from '@ui';

	// --- Images
	import Image_MauiNapili1 from '@assets/backdrop/maui-napili-1.jpg';
	import Image_MauiBeaches1 from '@assets/backdrop/maui-root-beach-1.png';
	import Image_MauiVolcanos1 from '@assets/backdrop/maui-volcano-1.jpg';
	import Image_MauiCity1 from '@assets/backdrop/maui-city-1.png';
	import { clamp } from '@root/lib/internal';

	import IconLogo from '~icons/local/logo';
	import { Affected } from '@root/lib/ui/fscrollable';
	import { base } from '$app/paths';

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
					out_start={2}
					out_end={3}
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
				out_start={2}
				out_end={2}
				in_transition={(p: number) => `opacity: 1`}
				out_transition={(p: number) => `opacity: ${p}`}
			>
				<h1 class="text-white text-3xl whitespace-nowrap underline font-bold">Maui Travels</h1>
			</FScrollable.Affected>
			<FScrollable.Affected
				in_start={0}
				in_end={0}
				out_start={0.1}
				out_end={0.2}
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

		<FScrollable.Affected
			in_start={0.1}
			in_end={1}
			out_start={2}
			out_end={3}
			in_transition={(p: number) =>
				`opacity: 1; transform: translateY(${clamp((1 - p * 4) * 100, -50, 100)}%)`}
			out_transition={(p: number) => `opacity: ${p}; transform: translateY(-50%)`}
			class="animate-all duration-300 flex flex-col size-full text-center box-border px-[20%] items-center justify-center gap-20"
		>
			<FScrollable.Affected
				in_start={0.1}
				in_end={0.13}
				out_start={0.22}
				out_end={0.26}
				in_transition={(p: number) => `opacity: ${clamp(p * 4, 0, 1)};`}
				out_transition={(p: number) => `opacity: ${clamp(p * 4, 0, 1)};`}
			>
				<!-- Section Container -->
				<section class="flex flex-row gap-20 w-full items-center">
					<!-- Image -->
					<img alt="Maui Beaches" src={Image_MauiBeaches1} class="size-75 rounded-lg" />

					<!-- Content-->
					<Flex.Col class="gap-4 w-full text-left">
						<span class="text-white text-4xl">Beach Package</span>
						<span class="text-white text-3xl">
							Our beaches in Maui are glorious. Come visit our clean beaches and enjoy a trip around
							the outer areas of the island. You can also go out to sea for a day of whale watching.
							At the end of each day, you can enjoy a fine Luau on the beach.
						</span>
						<a class="text-primary-800 text-2xl" href={`${base}/packages/beach`}>Read More</a>
					</Flex.Col>
				</section>
			</FScrollable.Affected>

			<FScrollable.Affected
				in_start={0.26}
				in_end={0.34}
				out_start={0.34}
				out_end={0.49}
				in_transition={(p: number) => `opacity: ${clamp(p * 4, 0, 1)};a`}
				out_transition={(p: number) => `opacity: ${p / 4 - 0.2};`}
			>
				<!-- Section Container -->
				<section class="flex flex-row gap-20 w-full items-center">
					<!-- Content-->
					<Flex.Col class="gap-4 w-full text-left">
						<span class="text-white text-4xl">Volcano Package</span>
						<span class="text-white text-3xl">
							Our volcano, especially Haleakala, make up most of the island. Join us on this tour
							around the Haleakala volcano and learn more about it. You can also visit the mountain
							range on the west side of the island.
						</span>
						<a class="text-primary-800 text-2xl" href={`${base}/packages/volcano`}>Read More</a>
					</Flex.Col>

					<!-- Image -->
					<img alt="Maui Volcanos" src={Image_MauiVolcanos1} class="w-120 h-80 rounded-lg" />
				</section>
			</FScrollable.Affected>

			<FScrollable.Affected
				in_start={0.34}
				in_end={0.63}
				out_start={1}
				out_end={2}
				in_transition={(p: number) => `opacity: ${clamp(p * 4, 0, 1)};`}
				out_transition={(p: number) => `opacity: 1;`}
			>
				<!-- Section Container -->
				<section class="flex flex-row gap-20 w-full items-center">
					<!-- Image -->
					<img alt="Maui City" src={Image_MauiCity1} class="w-120 h-80 rounded-lg" />

					<!-- Content-->
					<Flex.Col class="gap-4 w-full text-left">
						<span class="text-white text-4xl">City Package</span>
						<span class="text-white text-3xl">
							The cities are full of places to visit. You can go for to eat fine, Hawaiian cuisine
							at restaurants. You can also go to parks for relaxing walks and have fun with others.
						</span>
						<a class="text-primary-800 text-2xl" href={`${base}/packages/city`}>Read More</a>
					</Flex.Col>
				</section>
			</FScrollable.Affected>
		</FScrollable.Affected>
	</FScrollable.View>
</FScrollable.Root>
