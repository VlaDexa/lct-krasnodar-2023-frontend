<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<main class="flex min-h-[100dvh] w-[100vi] flex-col">
	<slot />
</main>

<style>
</style>
