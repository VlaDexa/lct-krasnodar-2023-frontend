<script lang="ts">
	import { fade } from 'svelte/transition';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	let menuOpened = false;
	$: typeof window !== 'undefined' && menuOpened && window.scrollTo(0, 0);
	$: typeof window !== 'undefined' &&
		(window.onscroll = menuOpened ? () => window.scrollTo(0, 0) : () => {});
</script>

<div class="bigScreenBg block">
	<Header bind:sideMenuOpened={menuOpened} />
	{#if menuOpened}
		<div
			class="dark"
			transition:fade={{ duration: 400 }}
			on:click={() => (menuOpened = false)}
			role="presentation"
		></div>
	{/if}
	<slot />
</div>
<Footer />

<style>
	@media only screen and (min-width: 1024px) {
		.bigScreenBg {
			background-image: url($lib/images/background.webp);
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		}
	}

	.dark {
		background-color: rgba(52, 64, 84, 0.2);
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 1;
	}
</style>
