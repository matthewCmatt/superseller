<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>{data.body.title || "no title"}</h1>
<div>{data.body.description || "no description"}</div>