<script lang="ts">
	// --- Components
	import { Flex, FScrollable, Span } from '@ui';
	import { Card } from '@components';

	// --- Images
	import Image_MauiMaui1 from '@assets/backdrop/maui-city-1.png';

	// --- --- Package Images
	import Image_PackageCity1 from '@assets/backdrop/maui-p-city-1.png';
	import Image_PackageCity2 from '@assets/backdrop/maui-p-city-2.png';
	import Image_PackageCity3 from '@assets/backdrop/maui-p-city-3.png';
	import Image_PackageCity4 from '@assets/backdrop/maui-p-city-4.png';

	// --- Logic
	import { clamp } from '@root/lib/internal';
</script>

<FScrollable.Root class="bg-black">
	<FScrollable.View class="flex flex-col items-center">
		<FScrollable.Affected
			class="w-[100%] h-[100%] bg-cover ease-out bg-no-repeat bg-center flex items-center justify-center"
			style="background-image: url('{Image_MauiMaui1}')"
			out_start={2}
			out_end={2}
			in_transition={(p: number) =>
				` background-position: 40% 70%; height: ${clamp((1 - p) * 100, 10, 100)}%`}
			><h1 class="text-white text-5xl whitespace-nowrap">City</h1></FScrollable.Affected
		>
		<FScrollable.Affected
			class="flex flex-row gap-5 animate ease-out w-full box-border items-start justify-center bg-primary-300 dark:bg-primary-700 overflow-hidden"
			out_start={1}
			out_end={2}
			in_transition={(p: number) => `height: ${p * 100}%`}
		>
			<Flex.Row class="size-full box-border pt-20 px-20 gap-12 items-start justify-center">
				<!-- First Card-->
				<Card
					class="bg-white dark:bg-white text-black/80 dark:text-black/80 w-full"
					classContainer="gap-4"
				>
					{#snippet slot_image()}
						<img alt="" src={Image_PackageCity1} class="size-full" />
					{/snippet}

					<Span class="text-black/80 dark:text-black/80 text-xl">Kahului</Span>

					<Span class="text-black/60 dark:text-black/60">Location: Central Maui</Span>
					<Span class="text-black/60 dark:text-black/60">
						Population: Approximately 26,000 people (as of the last census)
					</Span>
					<Span class="text-black/60 dark:text-black/60">
						Significance: Kahului is Maui’s commercial hub and the island’s largest town. It serves
						as the main gateway for most visitors, with Kahului Airport (OGG) being the primary
						airport for domestic and international flights.
					</Span>
					<Span class="text-black/60 dark:text-black/60">
						Key Features: Business & Industry, Shopping & Dining, Harbor, and Nearby Attraction
					</Span>
				</Card>

				<!-- Second Card -->
				<Card
					class="bg-white dark:bg-white text-black/80 dark:text-black/80 w-full"
					classContainer="gap-4"
				>
					<!--Change Image, Richard. You're Welcome. -Seth -->
					{#snippet slot_image()}
						<img alt="" src={Image_PackageCity2} class="size-full" />
					{/snippet}

					<Span class="text-black/80 dark:text-black/80 text-xl">Lahina</Span>

					<Span class="text-black/60 dark:text-black/60">Location: West Maui</Span>
					<Span class="text-black/60 dark:text-black/60">
						Population: Approximately 13,000 People
					</Span>
					<Span class="text-black/60 dark:text-black/60">
						Significance: Lahaina is a historic town known for its vibrant arts scene, lively
						atmosphere, and rich cultural history. Once the capital of the Kingdom of Hawaii,
						Lahaina was also a bustling whaling port during the 19th century.
					</Span>
					<Span class="text-black/60 dark:text-black/60"
						>Key Features: Historic Sites, Front Streets, Whale Watching, Maui Ocean Center, and
						Beaches.
					</Span>
				</Card>

				<!-- Third Card -->
				<Card
					class="bg-white dark:bg-white text-black/80 dark:text-black/80 w-full"
					classContainer="gap-4"
				>
					<!--Change Image, Richard. You're Welcome. -Seth -->
					{#snippet slot_image()}
						<img alt="" src={Image_PackageCity3} class="size-full" />
					{/snippet}

					<Span class="text-black/80 dark:text-black/80 text-xl">Kihei</Span>

					<Span class="text-black/60 dark:text-black/60">Location: South Maui</Span>
					<Span class="text-black/60 dark:text-black/60">
						Population: Approximately 22,000 People
					</Span>
					<Span class="text-black/60 dark:text-black/60">
						Significance: Kihei is a laid-back beach town located on the southern shores of Maui.
						It’s known for its sunny weather, relaxed atmosphere, and affordable accommodations.
						Kihei is also one of the fastest-growing areas on the island.
					</Span>
					<Span class="text-black/60 dark:text-black/60"
						>Key Features: Beaches, Outdoor Activities, Shopping & Dining, and Affordable
						Accommodation.
					</Span>
				</Card>

				<!-- Fourth Card -->
				<Card
					class="bg-white dark:bg-white text-black/80 dark:text-black/80 w-full"
					classContainer="gap-4"
				>
					<!--Change Image, Richard. You're Welcome. -Seth -->
					{#snippet slot_image()}
						<img alt="" src={Image_PackageCity4} class="size-full" />
					{/snippet}

					<Span class="text-black/80 dark:text-black/80 text-xl">Wailuku</Span>

					<Span class="text-black/60 dark:text-black/60">Location: Central Maui, near Kahului</Span>
					<Span class="text-black/60 dark:text-black/60">
						Population: Approximately 15,000 people
					</Span>
					<Span class="text-black/60 dark:text-black/60">
						Significance: Wailuku is the county seat of Maui County and serves as the administrative
						center of the island. It has a small-town feel with a historic charm, and it is located
						near the island’s main transportation hub, Kahului.
					</Span>
					<Span class="text-black/60 dark:text-black/60"
						>Key Features: Historic Town, Iao valley, and Local Government & Services.
					</Span>
				</Card>
			</Flex.Row>

			<!-- End of Page Content-->
		</FScrollable.Affected>
	</FScrollable.View>
</FScrollable.Root>
