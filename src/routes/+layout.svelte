<script>
	import Nav from '$lib/components/nav.svelte';
	import '@fontsource/fira-mono/index.css';
	import '@fontsource/inter/index.css';
	import '@fontsource/poppins/index.css';
	import '../app.css';
</script>

<div class="max-w-8xl mx-auto pt-4 pr-8 pb-8 pl-8">
	<Nav />
	<slot />
</div>

<style>
	:global(body) {
		overflow-x: hidden;
	}
</style>
