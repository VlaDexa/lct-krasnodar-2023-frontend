<script lang="ts">
	console.log('something');
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
</script>

<svelte:head>
	<title>Лапша</title>
	<meta name="description" content="MISIS Харбинская лапша" />
</svelte:head>

<section>
	{#if granted}
		<button class="border-2 border-green-500 rounded-full p-2" on:click={sendNotif}
			>Отправить уведомление</button
		>
	{:else if granted === undefined}
		<button class="border-2 border-green-500 rounded-full p-2" on:click={handleClick}>
			Включить оповещения
		</button>
	{:else}
		<p>Ты зачем от уведомлений отказался</p>
	{/if}
</section>

<style>
</style>
