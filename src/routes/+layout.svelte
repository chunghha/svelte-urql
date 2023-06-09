<script>
	import Nav from '$lib/components/nav.svelte';
	import '@fontsource/fira-mono/index.css';
	import '@fontsource/lora/index.css';
	import '@fontsource/nunito-sans/index.css';
	import '../app.css';
</script>

<div class="max-w-8xl mx-auto pb-8 pl-8 pr-8 pt-4">
	<Nav />
	<slot />
</div>

<style>
	:global(body) {
		overflow-x: hidden;
	}
</style>
