<script lang="ts">
	import pb from '$lib/pb';
	let email = '';
	let password = '';
	let error = '';

	async function login() {
		error = '';
		try {
			const authData = await pb.collection('users').authWithPassword(email, password);

			console.log('Logged in:', authData);
			console.log('Token:', pb.authStore.token);
			console.log('User:', pb.authStore.record);
		} catch (err) {
			if (err instanceof Error) {
				error = err.message;
			} else {
				error = String(err);
			}
		}
	}

	async function logout() {
		pb.authStore.clear();
		
        console.log('Logged out');
		console.log('Token:', pb.authStore.token);
	}
</script>

<form on:submit|preventDefault={login}>
	<input type="email" bind:value={email} placeholder="Email" required />
	<input type="password" bind:value={password} placeholder="Password" required />
	<button type="submit">Login</button>

	{#if error}
		<p style="color:red">{error}</p>
	{/if}
</form>

<button on:click={() => logout()}>Logout</button>
