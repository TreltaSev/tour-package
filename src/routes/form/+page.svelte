<script lang="ts">
	import {
		deserializeData,
		parseForm,
		removeEmpty,
		removeUndefined,
		serializeData
	} from '@root/lib/internal';
	import { Flex, Form } from '@ui';
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
		class="p-20 bg-primary-700 h-full w-120 max-w-3/4 gap-8 overflow-y-scroll no-scrollbar rounded-md"
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
		<Flex.Col class="gap-2">
			<label for="Tour-Package" style="color:white;">Select Tour Package:</label>
			<select name="tour-package" style="color: white;" bind:value={chosenPackage}>
				<!--Fill out the options once we decide what we need to add-->
				<option value="beach" style="color: black;">Beach Package</option>
				<option value="city" style="color: black;">City Package</option>
				<option value="volcano" style="color: black;">Volcano Package</option>
			</select>

			<!-- If Beach is Chosen-->
			{#if chosenPackage == 'beach'}
				<fieldset transition:expand={{ offset: 0 }} class="flex flex-col mt-2">
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5 "
						labelClass="text-white/80"
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
						labelClass="text-white/80"
						class="size-4 border-0"
						type="checkbox"
						name="location"
						value="wailea-beach"
						label="Wailea Beach"
					/>
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5"
						labelClass="text-white/80"
						class="size-4 border-0"
						type="checkbox"
						name="location"
						value="hookipa-beach"
						label="Hookipa Beach"
					/>
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5"
						labelClass="text-white/80"
						class="size-4 border-0"
						type="checkbox"
						name="location"
						value="kapalua-beach"
						label="Kapalua Beach"
					/>
				</fieldset>
			{:else if chosenPackage == 'city'}
				<fieldset transition:expand={{ offset: 0 }} class="flex flex-col mt-2">
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5"
						labelClass="text-white/80"
						class="size-4 border-0"
						type="checkbox"
						name="location"
						value="kahului-city"
						label="Kahului"
					/>
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5"
						labelClass="text-white/80"
						class="size-4 border-0"
						type="checkbox"
						name="location"
						value="lahina-city"
						label="Lahina"
					/>
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5"
						labelClass="text-white/80"
						class="size-4 border-0"
						type="checkbox"
						name="location"
						value="kihei-city"
						label="Kihei"
					/>
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5"
						labelClass="text-white/80"
						class="size-4 border-0"
						type="checkbox"
						name="location"
						value="wailuku-city"
						label="Wailuku"
					/>
				</fieldset>
			{:else if chosenPackage == 'volcano'}
				<fieldset transition:expand={{ offset: 0 }} class="mt-2">
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5"
						labelClass="text-white/80"
						class="size-4 border-0"
						type="checkbox"
						name="location"
						value="mauna-kahalawai-volcano"
						label="Mauna Kahālāwai"
					/>
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5"
						labelClass="text-white/80"
						class="size-4 border-0"
						type="checkbox"
						name="location"
						value="haleakala-volcano"
						label="Haleakalā Volcano"
					/>
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
						labelClass="text-white/80"
						class="size-4 border-0"
						type="radio"
						name="air-type"
						value="first-class"
						label="First Class"
					/>
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5"
						labelClass="text-white/80"
						class="size-4 border-0"
						type="radio"
						name="air-type"
						value="business"
						label="Business"
					/>
					<Form.Input
						containerClass="flex-row-reverse items-center justify-end gap-2 pl-5"
						labelClass="text-white/80"
						class="size-4 border-0"
						type="radio"
						name="air-type"
						value="economy"
						label="Economy"
					/>
				</div>
			{/if}
		</Flex.Col>

		<Form.Checkbox classContainer="w-full justify-between" label="Meals" name="meals" />
		<Form.Checkbox classContainer="w-full justify-between" label="Evening Wine" name="wine" />
		<Form.Checkbox classContainer="w-full justify-between" label="Car Rental" name="car" />

		<button
			type="submit"
			value="Submit"
			class="text-white px-6 py-2 rounded-sm bg-primary-600 cursor-pointer">Process Request</button
		>
	</Form.Root>
</Flex.Col>
