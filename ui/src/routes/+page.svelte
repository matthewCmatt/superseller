<script lang="ts">
	import pb from '$lib/pb';
	import PostPreview from '$lib/postPreview.svelte';
	let posts = pb.collection('posts').getList();
</script>

<h1>SuperSeller</h1>

{#await posts}
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
