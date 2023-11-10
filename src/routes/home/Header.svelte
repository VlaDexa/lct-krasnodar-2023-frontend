<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import bell from '$lib/images/bell.svg';
	import chevron from '$lib/images/chevron.svg';
	import profile from '$lib/images/profile.svg';
	import menu from '$lib/images/menu.svg';
	import { get } from 'svelte/store';

	export let sideMenuOpened = false;
	let profileMenuOpened = false;
	$: profileMenuOpened && sideMenuOpened && (profileMenuOpened = !sideMenuOpened);
</script>

<nav class="lg:pt-5">
	<!-- PC Header -->
	<div
		class="shdw flex flex-row gap-12 bg-white max-lg:hidden lg:m-auto lg:mx-5 justify-center lg:rounded-3xl lg:py-[14px] xl:mx-[100px] xl:gap-[97px] 2xl:mx-[200px] 2xl:gap-[184px]"
	>
		<a href="/home" class="text-4xl font-medium text-[#1570EF]">growth</a>
		<div class="flex flex-row gap-9 text-3xl font-normal text-[#667085]">
			<a
				class:text-[#475467]={get(page).url.pathname === '/home'}
				class:font-medium={get(page).url.pathname === '/home'}
				href="/home">Главная</a
			>
			<a
				class:text-[#475467]={get(page).url.pathname === '/home/adaptation'}
				class:font-medium={get(page).url.pathname === '/home/adaptation'}
				href="/home/adaptation">Адаптация</a
			>
			<a
				class:text-[#475467]={get(page).url.pathname === '/home/files'}
				class:font-medium={get(page).url.pathname === '/home/files'}
				href="/home/files">Файлы</a
			>
			<a
				class:text-[#475467]={get(page).url.pathname === '/home/calendar'}
				class:font-medium={get(page).url.pathname === '/home/calendar'}
				href="/home/calendar">Календарь</a
			>
		</div>
		<button
			class="group ml-[22px] flex items-center gap-2 align-middle"
			on:click={() => (profileMenuOpened = !profileMenuOpened)}
		>
			<img class:blueit={profileMenuOpened} src={profile} alt="Profile" class="h-9 w-9" />
			<img
				src={chevron}
				alt="Exit"
				class:blueit={profileMenuOpened}
				class:rotate-180={profileMenuOpened}
				class="h-9 w-9 transition-all"
			/>
		</button>
	</div>
	<!-- Mobile Header -->
	<div class="relative flex flex-row border-[#98A2B3] px-[30px] py-2 max-lg:border-b lg:hidden">
		<button on:click={() => (sideMenuOpened = !sideMenuOpened)}
			><img src={menu} alt="Menu" class="transition-all" class:blueit={sideMenuOpened} /></button
		>
		<img src={bell} alt="Notifications" class="ml-auto" />
		<button
			class="group ml-[22px] flex gap-2"
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
	</div>
	{#if profileMenuOpened}
		<nav class="profileNav" transition:slide={{ duration: 300, axis: 'y' }}>
			<ul class="flex flex-col gap-[14px]">
				<li class="active:text-[#1570EF]">Достижения</li>
				<li class="active:text-[#1570EF]">Заметки</li>
				<li class="active:text-[#1570EF]">Настройки</li>
				<li class="active:text-[#1570EF]">Выход</li>
			</ul>
		</nav>
	{:else if sideMenuOpened}
		<nav class="sideNav">
			<ul>
				<li
					class:active={get(page).url.pathname === '/home'}
					transition:fly={{ delay: 0, x: -100 }}
				>
					Главная
				</li>
				<li
					class:active={get(page).url.pathname === '/home/adaptation'}
					transition:fly={{ delay: 50, x: -100 }}
				>
					Моя адаптация
				</li>
				<li
					class:active={get(page).url.pathname === '/home/files'}
					transition:fly={{ delay: 100, x: -100 }}
				>
					Файлы
				</li>
				<li
					class:active={get(page).url.pathname === '/home/calendar'}
					transition:fly={{ delay: 150, x: -100 }}
				>
					Календарь
				</li>
			</ul>
		</nav>
	{/if}
</nav>

<style>
	@media only screen and (min-width: 1024px) {
		.shdw {
			box-shadow:
				0px 2px 4px 0px rgba(79, 79, 79, 0.1),
				0px 12px 8px 0px rgba(79, 79, 79, 0.05),
				0px 22px 8px 0px rgba(79, 79, 79, 0.01),
				0px 34px 10px 0px rgba(79, 79, 79, 0);
		}
	}

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
		transition-property: color, background-color;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}

	.sideNav > ul > li:active,
	.sideNav > ul > li.active {
		background-color: #1570ef;
		color: white;
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
		transition-property: color;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}

	.profileNav li:active {
		color: #1570ef;
	}
</style>
