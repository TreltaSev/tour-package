<script lang="ts">
	import { parseForm, serializeData } from '@root/lib/internal';
	import { Flex, Form } from '@ui';

	function onsubmit(event: SubmitEvent) {
		if (!event.target) return;
		const formData = parseForm(event.target as HTMLFormElement);
		const formString = serializeData(formData);

		// Route to Payments
		window.location.href = `/form/payment/${formString}`;
	}
</script>

<svelte:head>
	<title>form</title>
</svelte:head>

<Flex.Col class="size-full items-center">
	<Flex.Col class="p-20 w-fit bg-primary-700 rounded-md mt-20">
		<Form.Root class="w-80 gap-8" {onsubmit}>
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


			<Form.Checkbox label="Include Air Travel" name="air-travel" />

			<Form.Checkbox label="Meals" name="meals" />
			<Form.Checkbox label="Evening Wine" name="wine" />
			<Form.Checkbox label="Car Rental" name="car" />

			<button
				type="submit"
				value="Submit"
				class="text-white px-6 py-2 rounded-sm bg-primary-600 cursor-pointer"
				>Process Request</button
			>
		</Form.Root>
	</Flex.Col>
</Flex.Col>
