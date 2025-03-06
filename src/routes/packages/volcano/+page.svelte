<script lang="ts">
	// --- Components
	import { Flex, FScrollable, Span } from '@ui';
	import { Card } from '@components';

	// --- Images
	import Image_MauiVolcanos1 from '@assets/backdrop/maui-volcano-1.jpg';

	// --- --- Package Images
	import Image_PackageVolcano1 from '@assets/backdrop/maui-p-volcano-1.png';
	import Image_PackageVolcano2 from '@assets/backdrop/maui-p-volcano-2.jpg';

	// --- Logic
	import { clamp } from '@root/lib/internal';
</script>

<FScrollable.Root class="bg-black">
	<FScrollable.View class="flex flex-col items-center">
		<FScrollable.Affected
			class="w-[100%] h-[100%] bg-cover ease-out bg-no-repeat bg-center flex items-center justify-center"
			style="background-image: url('{Image_MauiVolcanos1}')"
			out_start={2}
			out_end={2}
			in_transition={(p: number) =>
				` background-position: 40% 70%; height: ${clamp((1 - p) * 100, 10, 100)}%`}
			><h1 class="text-white text-5xl whitespace-nowrap">Volcano</h1></FScrollable.Affected
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
						<img alt="" src={Image_PackageVolcano1} class="size-full" />
					{/snippet}

					<Span class="text-black/80 dark:text-black/80 text-xl">Haleakalā Volcano</Span>

					<Span class="text-black/60 dark:text-black/60">Location: East Maui</Span>
					<Span class="text-black/60 dark:text-black/60">
						Height: 10,023 feet (3,055 meters) above sea level, making it the highest point on Maui
					</Span>
					<Span class="text-black/60 dark:text-black/60">
						Type of Volcano: Shield Volcano - Haleakalā is a massive shield volcano that formed over
						millions of years through continuous eruptions of low-viscosity lava that spread out in
						broad layers.
					</Span>
					<Span class="text-black/60 dark:text-black/60"
						>Last Eruption: Around 1790 with the most recent activity being in the 18th century.
						However, the volcano is considered dormant with no significant eruption in modern times.
						Scientists continue to monitor it closely</Span
					>
				</Card>

				<!-- Second Card -->
				<Card
					class="bg-white dark:bg-white text-black/80 dark:text-black/80 w-full"
					classContainer="gap-4"
				>
					{#snippet slot_image()}
						<img alt="" src={Image_PackageVolcano2} class="size-full" />
					{/snippet}

					<Span class="text-black/80 dark:text-black/80 text-xl">Mauna Kahālāwai</Span>

					<Span class="text-black/60 dark:text-black/60">Location: West Maui</Span>
					<Span class="text-black/60 dark:text-black/60">
						Height: The highest peak in the West Maui Mountains is Pu’u Kukui, which reaches 5,788
						feet (1,764 meters) above sea level.
					</Span>
					<Span class="text-black/60 dark:text-black/60">
						Type of Volcano: Eroded Shield Volcano - Unlike Haleakalā, the West Maui Mountains are
						an older and highly eroded shield volcano. Erosion from weather, wind, and water has
						shaped the mountains into jagged ridges and valleys, giving it a dramatic and rugged
						appearance.
					</Span>
					<Span class="text-black/60 dark:text-black/60"
						>Last Eruption: Mauna Kahālāwai is considered extinct. The last eruption occurred
						approximately 2 million years ago. The volcano is thought to have stopped being active
						long before Haleakalā formed.</Span
					>
				</Card>
			</Flex.Row>

			<!-- End of Page Content-->
		</FScrollable.Affected>
	</FScrollable.View>
</FScrollable.Root>
