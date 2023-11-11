<script>
	import chevronLeftDouble from '$lib/images/chevron-double-left.svg';

	import { page } from '$app/stores';
	const links = [
		['module', 'Модуль'],
		['notes', 'Заметки'],
		['tasks', 'Задания'],
		['files', 'Файлы'],
		['stats', 'Статистика']
	];
</script>

<div class="flex flex-row px-5 py-10 xl:px-[100px] 2xl:px-[200px]">
	<nav class="flex flex-col gap-5" style:view-transition-name="adapt-nav">
		<a href="/home/adaptation" class="back flex flex-row gap-3 px-5 py-1">
			<img src={chevronLeftDouble} alt="Back" />
			Адаптация
		</a>
		<nav class="nav flex flex-col gap-8">
			{#each links as link}
				<!-- content here -->
				<a
					class:text-[#1570EF]={$page.url.pathname === `/home/adaptation/inner/${link[0]}`}
					class:[font-weight:500]={$page.url.pathname === `/home/adaptation/inner/${link[0]}`}
					href={`${link[0]}`}>{link[1]}</a
				>
			{/each}
		</nav>
	</nav>
	<div class="grow">
		<slot />
	</div>
</div>

<style>
	.back {
		border-radius: 16px;
		background: var(--White, #fff);
		box-shadow:
			0px 2px 4px 0px rgba(79, 79, 79, 0.1),
			0px 12px 8px 0px rgba(79, 79, 79, 0.05),
			0px 22px 8px 0px rgba(79, 79, 79, 0.01),
			0px 34px 10px 0px rgba(79, 79, 79, 0);
		color: var(--gray-7-aa, #667085);
		font-family: Inter;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 56px; /* 233.333% */
	}

	.nav {
		border-radius: 16px;
		background: var(--White, #fff);
		padding: 30px 20px;
		box-shadow:
			0px 1px 2px 0px rgba(79, 79, 79, 0.1),
			0px 3px 3px 0px rgba(79, 79, 79, 0.09),
			0px 6px 4px 0px rgba(79, 79, 79, 0.05),
			0px 11px 4px 0px rgba(79, 79, 79, 0.01),
			0px 17px 5px 0px rgba(79, 79, 79, 0);
		color: var(--gray-7-aa, #667085);
		font-family: Inter;
		font-size: 32px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
</style>
