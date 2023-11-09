<script lang="ts">
	import { slide } from "svelte/transition";

	let profileMenuOpened = false;
</script>

<nav class="py-2 px-[30px] flex flex-row border-b border-[#98A2B3] relative">
	<img src="/menu.svg" alt="Menu" />
	<img src="/bell.svg" alt="Notifications" class="ml-auto" />
	<button
		class="ml-[22px] flex gap-2 group"
		on:click={() => (profileMenuOpened = !profileMenuOpened)}
	>
		<img class:blueit={profileMenuOpened} src="/profile.svg" alt="Profile" />
		<img
			src="/chevron.svg"
			alt="Exit"
			class:blueit={profileMenuOpened}
			class:rotate-180={profileMenuOpened}
			class="transition-all"
		/>
	</button>
	{#if profileMenuOpened}
		<nav class="profileNav" transition:slide={{duration: 300, axis: 'y'}}>
			<ul class="flex flex-col gap-[14px]">
				<li>Достижения</li>
				<li>Заметки</li>
				<li>Настройки</li>
				<li>Выход</li>
			</ul>
		</nav>
	{/if}
</nav>

<style>
	.blueit {
		filter: brightness(0) saturate(100%) invert(40%) sepia(85%) saturate(4575%) hue-rotate(205deg)
			brightness(96%) contrast(96%);
	}

	.profileNav {
		position: absolute;
		top: calc(100% + 4px);
		right: 30px;
		color: #667085;
		font-size: 14px;
		font-weight: 400;
		z-index: 1;
		padding: 10px 16px;
		border-radius: 10px;
		background: #fff;
		box-shadow:
			0px 1px 2px 0px rgba(79, 79, 79, 0.1),
			0px 3px 3px 0px rgba(79, 79, 79, 0.09),
			0px 6px 4px 0px rgba(79, 79, 79, 0.05),
			0px 11px 4px 0px rgba(79, 79, 79, 0.01),
			0px 17px 5px 0px rgba(79, 79, 79, 0);
	}
</style>
