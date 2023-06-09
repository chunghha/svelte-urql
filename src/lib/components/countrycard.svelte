<script lang="ts">
	import type { Country } from '$lib/models/country';

	export let country: Country;
</script>

<div
	class="w-84 card-compact card bg-base-100 shadow-xl transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
>
	<figure><img src={country.flags.svg} alt={country.name.official} /></figure>
	<div class="card-body">
		<h2 class="font-lora card-title text-secondary">{country.name.official}</h2>
		<p class="font-nunito-sans text-xl text-warning">{country.capital ?? ''}</p>
		{#if country.population > 0}
			<p class="font-nunito-sans text-lg text-info">{country.population.toLocaleString()}</p>
		{/if}
		<div class="card-actions justify-end">
			<button class="font-lora btn-neutral btn">Details</button>
		</div>
	</div>
</div>
