<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>Hardly Used</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<h1>Hardly Used</h1>
</header>

{@render children()}

<style>
	header {
		background-color: lightgray;
		position:sticky;
		top: 0;
	}

	h1 {
		margin: 0;
	}

	:global(body) {
		margin: 0;
	}
</style>
