<script lang="ts">
	let { id, body } = $props();
</script>

<a href={`/posts/${id}`}>
	<h2>{body.title || "no title"}</h2>
	<ul>
		{#each body.tags as tag}
			<li>{tag.name}</li>
		{/each}
	</ul>
</a>
