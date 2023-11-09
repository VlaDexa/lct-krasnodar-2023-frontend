<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import bell from '$lib/images/bell.svg';
	import chevron from '$lib/images/chevron.svg';
	import profile from '$lib/images/profile.svg';
	import menu from '$lib/images/menu.svg';

	export let sideMenuOpened = false;
	let profileMenuOpened = false;
	$: profileMenuOpened && sideMenuOpened && (profileMenuOpened = !sideMenuOpened);
</script>

<nav class="py-2 px-[30px] flex flex-row border-b border-[#98A2B3] relative">
	<button on:click={() => (sideMenuOpened = !sideMenuOpened)}
		><img src={menu} alt="Menu" class="transition-all" class:blueit={sideMenuOpened} /></button
	>
	<img src={bell} alt="Notifications" class="ml-auto" />
	<button
		class="ml-[22px] flex gap-2 group"
		on:click={() => (profileMenuOpened = !profileMenuOpened)}
	>
		<img class:blueit={profileMenuOpened} src={profile} alt="Profile" />
		<img
			src={chevron}
			alt="Exit"
			class:blueit={profileMenuOpened}
			class:rotate-180={profileMenuOpened}
			class="transition-all"
		/>
	</button>
	{#if profileMenuOpened}
		<nav class="profileNav" transition:slide={{ duration: 300, axis: 'y' }}>
			<ul class="flex flex-col gap-[14px]">
				<li>Достижения</li>
				<li>Заметки</li>
				<li>Настройки</li>
				<li>Выход</li>
			</ul>
		</nav>
	{:else if sideMenuOpened}
		<nav class="sideNav">
			<ul>
				<li transition:fly={{ delay: 0, x: -100 }}>Главная</li>
				<li transition:fly={{ delay: 50, x: -100 }}>Моя адаптация</li>
				<li transition:fly={{ delay: 100, x: -100 }}>Файлы</li>
				<li transition:fly={{ delay: 150, x: -100 }}>Календарь</li>
			</ul>
		</nav>
	{/if}
</nav>

<style>
	.blueit {
		filter: brightness(0) saturate(100%) invert(40%) sepia(85%) saturate(4575%) hue-rotate(205deg)
			brightness(96%) contrast(96%);
	}

	.sideNav {
		position: absolute;
		top: calc(100% + 8px);
		left: 0px;
		font-size: 14px;
		font-weight: 400;
		color: #475467;
		z-index: 2;
	}

	.sideNav ul {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.sideNav > ul > li {
		background-color: white;
		border-radius: 0px 10px 10px 0px;
		padding: 4px 30px;
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
