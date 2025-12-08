<script lang="ts">
	import PostPreview from './PostPreview.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

{#await data.posts}
	<p>Loading posts...</p>
{:then posts}
	<ul>
		{#each posts.items as post}
			{#if post.body}
				<li>
					<PostPreview id={post.id} body={post.body}></PostPreview>
				</li>
			{/if}
		{/each}
	</ul>
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}

<style>
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, 40ch);
	}
</style>
