<script lang="ts">
	import { getContextClient, queryStore, setContextClient } from '@urql/svelte';
	import { AllCountriesDocument } from '../../gql/queries/all-countries';
	import { client } from './country.graph';

	setContextClient(client);

	const urql = queryStore({
		client: getContextClient(),
		query: AllCountriesDocument
	});
</script>

<svelte:head>
	<title>GraphQL</title>
</svelte:head>

<section>
	<div class="mt-4 mr-2 mb-2 ml-2">
		{#if $urql.fetching}fetching...{/if}
	</div>
	{#if $urql.data}
		{#if $urql.data.countries.length}
			<div class="w-full  overflow-x-auto">
				<table class="table-zebra table w-full table-auto">
					<thead>
						<tr>
							<th>Flag</th>
							<th>Name</th>
							<th>Capital</th>
							<th>Currency</th>
							<th>Native</th>
							<th>Code</th>
							<th>Phone</th>
						</tr>
					</thead>
					<tbody>
						{#each $urql.data.countries as c}
							<tr>
								<td class="text-xl">{c.emoji}</td>
								<td>{c.name}</td>
								<td>{c.capital}</td>
								<td>{c.currency}</td>
								<td>{c.native}</td>
								<td>{c.code}</td>
								<td>{c.phone}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{:else}
			<div class="font-semibold">no results</div>
		{/if}
	{/if}
</section>
