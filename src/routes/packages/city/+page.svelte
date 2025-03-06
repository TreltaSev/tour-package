<script lang="ts">
	// --- Components
	import { FScrollable, Span } from '@ui';

	// --- Images
	import Image_MauiMaui1 from '@assets/backdrop/maui-city-1.png';


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
			class="flex animate ease-out w-full items-center justify-center bg-primary-100 dark:bg-black overflow-hidden"
			out_start={1}
			out_end={2}
			in_transition={(p: number) => `height: ${p * 100}%`}
		>
			<Span>Page Content</Span>
		</FScrollable.Affected>
	</FScrollable.View>
</FScrollable.Root>
