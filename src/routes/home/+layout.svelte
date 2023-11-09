<script lang="ts">
	import { fade } from 'svelte/transition';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	let menuOpened = false;
	$: typeof window !== 'undefined' && menuOpened && window.scrollTo(0, 0);
	$: typeof window !== 'undefined' &&
		(window.onscroll = menuOpened ? () => window.scrollTo(0, 0) : () => {});
</script>

<Header bind:sideMenuOpened={menuOpened} />
{#if menuOpened}
	<div class="dark" transition:fade={{ duration: 400 }} on:click={() => (menuOpened = false)} role="presentation"></div>
{/if}
<slot />
<Footer />

<style>
	.dark {
		background-color: rgba(0, 0, 0, 0.5);
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 1;
	}
</style>
