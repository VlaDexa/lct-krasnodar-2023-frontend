<script lang="ts">
	import { fade } from 'svelte/transition';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import { onMount } from 'svelte';
	import { get, set } from 'idb-keyval';
	let menuOpened = false;
	$: typeof window !== 'undefined' && menuOpened && window.scrollTo(0, 0);
	$: typeof window !== 'undefined' &&
		(window.onscroll = menuOpened ? () => window.scrollTo(0, 0) : () => {});
	onMount(() => {
		navigator.serviceWorker.ready
			.then(async function (registration) {
				// Use the PushManager to get the user's subscription to the push service.
				let subscription = await registration.pushManager.getSubscription();
				// If a subscription was found, return it.
				if (subscription) {
					return subscription;
				}
				// Get the server's public key
				const response = await fetch('/api/vapidKey');
				const vapidPublicKey = await response.text();
				subscription = await registration.pushManager.subscribe({
					userVisibleOnly: true,
					applicationServerKey: vapidPublicKey
				});
				let pushId = await get('push-id');
				if (pushId) await fetch('/api/registerPush', { method: 'delete', body: pushId.toString() });
				const register = await fetch('/api/registerPush', {
					method: 'post',
					body: JSON.stringify(subscription.toJSON()),
					headers: { 'Content-Type': 'application/json' }
				});
				const id = parseInt(await register.json());
				set('push-id', id);
				return subscription;
			})
			.then(async function (subscription) {
				fetch('/api/sendNotification', {
					method: 'post',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify({
						subscription: subscription,
						ttl: 500
					})
				});
			});
	});
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
