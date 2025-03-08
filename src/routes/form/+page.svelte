<script lang="ts">
	import {
		deserializeData,
		parseForm,
		removeEmpty,
		removeUndefined,
		serializeData
	} from '@root/lib/internal';
	import { Flex, Form, Span } from '@ui';
	import { base } from '$app/paths';
	import { fade } from 'svelte/transition';
	import { expand } from '@root/lib/utils';
	import { onMount } from 'svelte';
	import { PriceHandler } from '@root/lib/components';
	import prices from '@root/lib/internal/prices';

	function onsubmit(event: SubmitEvent) {
		if (!event.target) return;
		const formData = parseForm(event.target as HTMLFormElement);

		const formString = serializeData(formData);

		// Route to Payments
		window.location.href = `${base}/form/payment/${formString}`;
	}

	function sift() {
		const search = removeUndefined(deserializeData(window.location.search));
		if (Object.keys(search).length === 0) {
			return;
		} // Empty

		for (const [key, value] of Object.entries(search)) {
			console.log(key, value);
			if (key == 'location') {
				// Different Functionality
				setTimeout(() => {
					(document.querySelector(`input[value="${value}"]`) as HTMLInputElement).checked = true;
				}, 150);
			} else {
				chosenPackage = value as string;
			}
		}
	}

	onMount(() => {
		sift();
	});

	// Binded Values
	let includeAirTravel: boolean = false;
	let chosenPackage: string | undefined = undefined;
</script>

<svelte:head>
	<title>form</title>
</svelte:head>

<Flex.Col class="size-full items-center justify-center py-20">
	<Form.Root
		class="p-20 bg-white h-full w-120 max-w-3/4 gap-8 overflow-y-scroll no-scrollbar rounded-md shadow-md"
		{onsubmit}
	>
		<Form.Input
			type="text"
			name="first-name"
			label="First Name:"
			placeholder="Insert your first name here"
			required
		/>

		<Form.Input
			type="text"
			name="last-name"
			label="Last Name: "
			placeholder="Insert your last name here"
			required
			classLabel="text-black"
		/>

		<Form.Input
			type="number"
			name="party-size"
			label="Party Size: "
			value="1"
			min="1"
			max="100"
			step="1"
			pattern="^[0-9]"
			required
		/>
		<!-- Tour Package Selector-->
		<Flex.Col class="gap-2 text-black/80">
			<label for="Tour-Package">Select Tour Package:</label>
			<select name="tour-package" bind:value={chosenPackage}>
				<!--Fill out the options once we decide what we need to add-->
				<option value="beach">Beach Package</option>
				<option value="city">City Package</option>
				<option value="volcano">Volcano Package</option>
			</select>

			<!-- If Beach is Chosen-->
			{#if chosenPackage == 'beach'}
				<fieldset transition:expand={{ offset: 0 }} class="flex flex-col mt-2">
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5 "
						class="size-4 border-0"
						type="checkbox"
						name="location"
						value="kaanapali-beach"
						label="Kaanapali Beach"
					>
						<PriceHandler price={prices.package.beach.locations.kaanapali} />
					</Form.Input>
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5"
						class="size-4 border-0"
						type="checkbox"
						name="location"
						value="wailea-beach"
						label="Wailea Beach"
					>
						<PriceHandler price={prices.package.beach.locations.wailea} />
					</Form.Input>
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5"
						class="size-4 border-0"
						type="checkbox"
						name="location"
						value="hookipa-beach"
						label="Hookipa Beach"
					>
						<PriceHandler price={prices.package.beach.locations.hookipa} />
					</Form.Input>
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5"
						class="size-4 border-0"
						type="checkbox"
						name="location"
						value="kapalua-beach"
						label="Kapalua Beach"
					>
						<PriceHandler price={prices.package.beach.locations.kapalua} />
					</Form.Input>
				</fieldset>
			{:else if chosenPackage == 'city'}
				<fieldset transition:expand={{ offset: 0 }} class="flex flex-col mt-2">
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5"
						class="size-4 border-0"
						type="checkbox"
						name="location"
						value="kahului-city"
						label="Kahului"
					>
						<PriceHandler price={prices.package.city.locations.kahului} />
					</Form.Input>
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5"
						class="size-4 border-0"
						type="checkbox"
						name="location"
						value="lahina-city"
						label="Lahina"
					>
						<PriceHandler price={prices.package.city.locations.lahina} />
					</Form.Input>
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5"
						class="size-4 border-0"
						type="checkbox"
						name="location"
						value="kihei-city"
						label="Kihei"
					>
						<PriceHandler price={prices.package.city.locations.kihei} />
					</Form.Input>
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5"
						class="size-4 border-0"
						type="checkbox"
						name="location"
						value="wailuku-city"
						label="Wailuku"
					>
						<PriceHandler price={prices.package.city.locations.wailuku} />
					</Form.Input>
				</fieldset>
			{:else if chosenPackage == 'volcano'}
				<fieldset transition:expand={{ offset: 0 }} class="mt-2">
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5"
						class="size-4 border-0"
						type="checkbox"
						name="location"
						value="mauna-kahalawai-volcano"
						label="Mauna Kahalawai"
					>
						<PriceHandler price={prices.package.volcano.locations.maunaKahalawai} />
					</Form.Input>
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5"
						class="size-4 border-0"
						type="checkbox"
						name="location"
						value="haleakala-volcano"
						label="Haleakala Volcano"
					>
						<PriceHandler price={prices.package.volcano.locations.haleakala} />
					</Form.Input>
				</fieldset>
			{/if}
		</Flex.Col>

		<Flex.Col class="gap-0">
			<Form.Checkbox
				classContainer="w-full justify-between"
				label="Include Air Travel"
				name="air-travel"
				bind:value={includeAirTravel}
			/>

			{#if includeAirTravel}
				<div class="flex flex-col mt-2" transition:expand>
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5"
						class="size-4 border-0"
						type="radio"
						name="air-type"
						value="first-class"
						label="First Class"
					>
						<PriceHandler price={prices.airTravel.firstClass} />
					</Form.Input>
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5"
						class="size-4 border-0"
						type="radio"
						name="air-type"
						value="business"
						label="Business"
					>
						<PriceHandler price={prices.airTravel.businessClass} />
					</Form.Input>
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5"
						class="size-4 border-0"
						type="radio"
						name="air-type"
						value="economy"
						label="Economy"
					>
						<PriceHandler price={prices.airTravel.economy} />
					</Form.Input>
				</div>
			{/if}
		</Flex.Col>

		<Form.Checkbox classContainer="w-full justify-between" label="Meals" name="meals">
			<Flex.Col class="justify-start w-full">
				<PriceHandler price={prices.extra.meals} />
			</Flex.Col>
		</Form.Checkbox>
		<Form.Checkbox classContainer="w-full justify-between" label="Evening Wine" name="wine">
			<Flex.Col class="justify-start w-full">
				<PriceHandler price={prices.extra.eveningWine} />
			</Flex.Col>
		</Form.Checkbox>
		<Form.Checkbox classContainer="w-full justify-between" label="Car Rental" name="car" >
			<Flex.Col class="justify-start w-full">
				<PriceHandler price={prices.extra.carRental} />
			</Flex.Col>
		</Form.Checkbox>

		<button
			type="submit"
			value="Submit"
			class="text-white px-6 py-2 rounded-sm bg-primary-600 cursor-pointer">Process Request</button
		>
	</Form.Root>
</Flex.Col>
