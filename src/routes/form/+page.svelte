<script>
	import { Page } from '@ui';
</script>

<svelte:head>
	<title>form</title>
</svelte:head>

<h1 class="text-center" style="font-size:48px">Tour Package Registration</h1>

<form>
	<input type="hidden" name="labcode" value="3287" />
	<label for="first" style="color: white;">First Name: </label>
	<input
		type="text"
		id="first"
		placeholder="Insert your First Name here"
		style="color: white;"
		size="25"
	/>
	<label for="last" style="color: white;">Last Name: </label>
	<input
		type="text"
		id="last"
		placeholder="Insert your Last Name here"
		style="color: white;"
		size="25"
	/>
	<!--First Name and Last Name Fields-->
	<br /><br />
	<!--Party Size-->
	<label for="party-size" style="color: white;">Number of people in party:</label>
	<select id="party-size" name="party-size" style="color: white;">
		<option value="1" style="color: black;">1</option>
		<option value="2" style="color: black;">2</option>
		<option value="3" style="color: black;">3</option>
		<option value="4" style="color: black;">4</option>
	</select>
	<!--Tour Package without option to select multiple-->
	<label for="Tour-Package" style="color:white;">Select Tour Package:</label>
	<select id="Tour-Package" name="Tour-Package" style="color: white;" multiple="multiple">
		<!--Fill out the options once we decide what we need to add-->
		<option value="1tour" style="color: white;">1</option>
		<option value="2tour" style="color: white;">2</option>
		<option value="3tour" style="color: white;">3</option>
		<option value="4tour" style="color: white;">4</option>
	</select>
	<br /><br />
	<label for="Air" style="color:white;">Include Air Travel: </label>
	<input type="radio" id="Yes" name="Air" />
	<label for="Yes" style="color:white;">Yes</label>
	<input type="radio" id="No" name="Air" />
	<label for="No" style="color:white;">No</label>
	<br /><br />
	<!--Options in package-->
	<label for="Options" style="color:white;">Select Options to include in package: </label>
	<input type="checkbox" id="meals" name="meals" value="meals" />
	<label for="meals" style="color:white;">Meals</label>
	<input type="checkbox" id="wine" name="wine" value="wine" />
	<label for="wine" style="color:white;">Evening Wine</label>
	<input type="checkbox" id="car" name="car" value="car" />
	<label for="car" style="color:white;">Car Rental</label>
	<br /><br />
	<button type="submit" value="Submit" style="color:white;">Process Request</button>
</form>
