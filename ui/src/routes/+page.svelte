<script lang="ts">
	import PostPreview from '$lib/postPreview.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>SuperSeller</h1>

{#await data.posts}
	<p>Loading posts...</p>
{:then posts}
	<ul>
		{#each posts.items as post}
			{#if post.body}
				<PostPreview id={post.id} body={post.body}></PostPreview>
			{/if}
		{/each}
	</ul>
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
