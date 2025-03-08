<script lang="ts">
	// --- Components
	import { Flex, FScrollable, Span } from '@ui';
	import { Card } from '@components';

	// --- Images
	import Image_MauiBeaches1 from '@assets/backdrop/maui-beaches-1.jpg';

	// --- --- Package Images
	import Image_PackageBeach1 from '@assets/backdrop/maui-p-beach-1.png';
	import Image_PackageBeach2 from '@assets/backdrop/maui-p-beach-2.png';
	import Image_PackageBeach3 from '@assets/backdrop/maui-p-beach-3.png';
	import Image_PackageBeach4 from '@assets/backdrop/maui-p-beach-4.png';

	// --- Logic
	import { clamp } from '@root/lib/internal';
	import { reference_package_to_form } from '@root/lib/utils';
</script>

<FScrollable.Root class="bg-black">
	<FScrollable.View class="flex flex-col items-center">
		<FScrollable.Affected
			class="w-[100%] h-[100%] bg-cover ease-out bg-no-repeat bg-center flex items-center justify-center"
			style="background-image: url('{Image_MauiBeaches1}')"
			out_start={2}
			out_end={2}
			in_transition={(p: number) =>
				` background-position: 40% 70%; height: ${clamp((1 - p) * 100, 10, 100)}%`}
			><h1 class="text-white text-5xl whitespace-nowrap">Beaches</h1></FScrollable.Affected
		>
		<FScrollable.Affected
			class="flex flex-row gap-5 animate ease-out w-full box-border items-start justify-center bg-primary-300 dark:bg-primary-700 overflow-hidden"
			out_start={1}
			out_end={2}
			in_transition={(p: number) => `height: ${p * 100}%`}
		>
			<Flex.Row class="size-full box-border pt-20 px-10 gap-12 items-start justify-center">
				<!-- First Card-->
				<Card
					class="bg-white dark:bg-white text-black/80 dark:text-black/80"
					classContainer="gap-4"
				>
					{#snippet slot_image()}
						<img alt="" src={Image_PackageBeach1} class="size-contain" />
					{/snippet}

					<Span class="text-black/80 dark:text-black/80 text-xl">Kaanapali Beach</Span>

					<Span class="text-black/60 dark:text-black/60">Location: West Maui, near Lahaina</Span>
					<Span class="text-black/60 dark:text-black/60">
						Features: Kaanapali is one of Maui's most popular beaches, known for its clear waters,
						golden sand, and excellent facilities. It’s lined with luxury resorts, restaurants, and
						shopping areas.
					</Span>
					<Span class="text-black/60 dark:text-black/60">
						Activities: Perfect for swimming, snorkeling, and lounging. The beach is also known for
						the Black Rock at its northern end, which is a popular spot for cliff diving and
						snorkeling
					</Span>
					<Span class="text-black/60 dark:text-black/60"
						>Best For: Families, water sports, and sunset views.</Span
					>
					<Flex.Row
						class="px-6 py-2 rounded-md cursor-pointer text-white bg-primary-500 hover:bg-primary-600"
						onclick={() => reference_package_to_form("beach", "kaanapali-beach")}
					>
						<span class="text-lg text-white">Tour Kaanapali</span>
					</Flex.Row>
				</Card>

				<!-- Second Card -->
				<Card
					class="bg-white dark:bg-white text-black/80 dark:text-black/80"
					classContainer="gap-4"
				>
					{#snippet slot_image()}
						<img alt="" src={Image_PackageBeach2} />
					{/snippet}

					<Span class="text-black/80 dark:text-black/80 text-xl">Wailea Beach</Span>

					<Span class="text-black/60 dark:text-black/60">Location: South Maui, near Wailea</Span>
					<Span class="text-black/60 dark:text-black/60">
						Features: Wailea Beach is known for its calm, turquoise waters and fine, golden sand.
						It’s surrounded by upscale resorts, making it a more peaceful beach compared to some
						others on Maui.
					</Span>
					<Span class="text-black/60 dark:text-black/60">
						Activities: Ideal for swimming, sunbathing, and snorkeling. The waters are generally
						calm, which makes it great for families and beginners.
					</Span>
					<Span class="text-black/60 dark:text-black/60"
						>Best For: Snorkeling, luxury resort stays, and relaxation.</Span
					>
					<Flex.Row
						class="px-6 py-2 rounded-md cursor-pointer text-white bg-primary-500 hover:bg-primary-600"
						onclick={() => reference_package_to_form("beach", "wailea-beach")}
					>
						<span class="text-lg text-white">Tour Wailea</span>
					</Flex.Row>
				</Card>

				<!-- Third Card -->
				<Card
					class="bg-white dark:bg-white text-black/80 dark:text-black/80"
					classContainer="gap-4"
				>
					{#snippet slot_image()}
						<img alt="" src={Image_PackageBeach3} />
					{/snippet}

					<Span class="text-black/80 dark:text-black/80 text-xl">Hookipa Beach</Span>

					<Span class="text-black/60 dark:text-black/60">Location: North Shore, near Paia</Span>
					<Span class="text-black/60 dark:text-black/60">
						Features: Known as a world-renowned windsurfing and surfing beach, Hookipa is a beach
						where the ocean is often rough, with big waves and strong winds. It’s not ideal for
						swimming, but it’s perfect for watching skilled surfers and windsurfers.
					</Span>
					<Span class="text-black/60 dark:text-black/60">
						Activities: Windsurfing, surfing, kite-boarding, and watching the waves.
					</Span>
					<Span class="text-black/60 dark:text-black/60"
						>Best For: Surfing enthusiasts and spectators of water sports.</Span
					>
					<Flex.Row
						class="px-6 py-2 rounded-md cursor-pointer text-white bg-primary-500 hover:bg-primary-600"
						onclick={() => reference_package_to_form("beach", "hookipa-beach")}
					>
						<span class="text-lg text-white">Tour Hookipa</span>
					</Flex.Row>
				</Card>

				<!-- Fourth Card -->
				<Card
					class="bg-white dark:bg-white text-black/80 dark:text-black/80"
					classContainer="gap-4"
				>
					{#snippet slot_image()}
						<img alt="" src={Image_PackageBeach4} />
					{/snippet}

					<Span class="text-black/80 dark:text-black/80 text-xl">Kapalua Bay</Span>

					<Span class="text-black/60 dark:text-black/60">Location: West Maui</Span>
					<Span class="text-black/60 dark:text-black/60">
						Features: This sheltered bay is famous for its clear, calm waters, making it one of the
						best spots on Maui for snorkeling. It has crescent-shaped beach and is surrounded by
						rocky points, providing protection from strong winds and waves.
					</Span>
					<Span class="text-black/60 dark:text-black/60">
						Activities: Snorkeling, swimming, and kayaking. It’s a peaceful location with easy
						access to underwater marine life.
					</Span>
					<Span class="text-black/60 dark:text-black/60"
						>Best For: Snorkelers, families, and swimmers looking for a quieter, protected area.</Span
					>
					<Flex.Row
						class="px-6 py-2 rounded-md cursor-pointer text-white bg-primary-500 hover:bg-primary-600"
						onclick={() => reference_package_to_form("beach", "kapalua-beach")}
					>
						<span class="text-lg text-white">Tour Kapalua</span>
					</Flex.Row>
				</Card>
			</Flex.Row>

			<!-- End of Page Content-->
		</FScrollable.Affected>
	</FScrollable.View>
</FScrollable.Root>
