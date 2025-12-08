<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h2>{data.body.title || 'no title'}</h2>
<div>{data.body.description || 'no description'}</div>

{#if data.media.length == 0}
	<div>no images!</div>
{:else}
	{#each data.media as imageLink}
		<img src={imageLink} alt=""/>
	{/each}
{/if}

<style>
	img {
		width: min(80ch, 100%);
	}
</style>