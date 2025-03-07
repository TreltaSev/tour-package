<script lang="ts">
	import { parseForm, serializeData } from '@root/lib/internal';
	import { Flex, Form } from '@ui';
	import { base } from '$app/paths';
	import { fade } from 'svelte/transition';
	import { expand } from '@root/lib/utils';

	function onsubmit(event: SubmitEvent) {
		if (!event.target) return;
		const formData = parseForm(event.target as HTMLFormElement);
		const formString = serializeData(formData);

		// Route to Payments
		window.location.href = `${base}/form/payment/${formString}`;
	}

	// Binded Values
	let includeAirTravel: boolean = false;
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
			name="part-size"
			label="Party Size: "
			value="1"
			min="1"
			max="100"
			step="1"
			pattern="^[0-9]"
			required
		/>

		<!--Tour Package without option to select multiple-->
		<label for="Tour-Package" style="color:white;">Select Tour Package:</label>
		<select id="Tour-Package" name="Tour-Package" style="color: white;">
			<!--Fill out the options once we decide what we need to add-->
			<option value="Beach" style="color: black;">Beach Package</option>
			<option value="City" style="color: black;">City Package</option>
			<option value="Volcano" style="color: black;">Volcano Package</option>
		</select>

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
