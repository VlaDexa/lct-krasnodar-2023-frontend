<script lang="ts">
	import { onMount } from 'svelte';
	let granted: boolean | undefined;
	async function handleClick(event: MouseEvent) {
		const promise = await Notification.requestPermission();
		if (promise === 'granted') {
			const not = new Notification('Пасяб');
			granted = true;
		} else if (promise === 'denied') {
			granted = false;
		}
	}
	function sendNotif() {
		const not = new Notification('Not');
	}
	onMount(() => {
		if (Notification.permission !== 'default') {
			granted = Notification.permission === 'granted';
		}
		navigator.serviceWorker.ready
			.then(async function (registration) {
				// Use the PushManager to get the user's subscription to the push service.
				const subscription = await registration.pushManager.getSubscription();
				// If a subscription was found, return it.
				if (subscription) {
					return subscription;
				}
				// Get the server's public key
				const response = await fetch('/api/vapidKey');
				const vapidPublicKey = await response.text();
				// Chrome doesn't accept the base64-encoded (string) vapidPublicKey yet
				// urlBase64ToUint8Array() is defined in /tools.js
				// const convertedVapidKey = atob(vapidPublicKey);
				return await registration.pushManager.subscribe({
					userVisibleOnly: true,
					applicationServerKey: vapidPublicKey
				});
			})
			.then(function (subscription) {
				fetch('/api/sendNotification', {
					method: 'post',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify({
						subscription: subscription,
						delay: 0,
						ttl: 500
					})
				});
			});
	});
</script>

<svelte:head>
	<title>Лапша</title>
	<meta name="description" content="MISIS Харбинская лапша" />
</svelte:head>

<section class="px-[40vw] py-[47vh]">
	{#if granted}
		<button class="w-full border-2 border-green-500 rounded-full p-2" on:click={sendNotif}
			>Отправить уведомление</button
		>
	{:else if granted === undefined}
		<button class="w-full border-2 border-green-500 rounded-full p-2" on:click={handleClick}>
			Включить оповещения
		</button>
	{:else}
		<p>Ты зачем от уведомлений отказался</p>
	{/if}
</section>

<style>
</style>
