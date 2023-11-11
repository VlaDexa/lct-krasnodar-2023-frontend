<script>
	import secHeader from '$lib/images/sec-header.svg';
	import clock from '$lib/images/clock.svg';
	import leafBlue from '$lib/images/leaf-blue.svg';
	import xpBlue from '$lib/images/xp-blue.svg';
	import arrowShort from '$lib/images/arrow-short.svg';
	import bigSec from '$lib/images/big-sec.svg';
	import xClose from '$lib/images/x-close.svg';
	import bigSecText from '$lib/images/big-sec-text.svg';
	import { fade } from 'svelte/transition';

	let closed = false;
</script>

<div class="grid grid-cols-3 gap-14 py-10 lg:px-5 xl:px-[100px] 2xl:px-[200px]">
	<section class="flex flex-col">
		<img src={secHeader} alt="" />
		<div class="px-7 py-5">
			<h2 style:view-transition-name="adapt-header">Вся информация о компании</h2>
			<p class="awards">Награды</p>
			<ul class="mt-5 flex flex-row gap-5">
				<li><img src={leafBlue} alt="Первые побеги" /></li>
				<li><img src={xpBlue} alt="Максимум опыта" /></li>
			</ul>
			<p class="closest">Ближайший срок</p>
			<div class="mt-4 flex flex-row justify-between">
				<div class="deadline flex flex-row p-2">
					<img src={clock} alt="" />
					<p>22 ноября</p>
					<p>23:59</p>
				</div>
				<a href="adaptation/inner/module" class="arrow"><img src={arrowShort} alt="" /></a>
			</div>
		</div>
	</section>
	{#if !closed}
		<section transition:fade={{}} class="col-span-2 flex">
			<img src={bigSec} alt="" class="h-full" />
			<div class="flex grow flex-col pt-9">
				<div class="flex flex-row justify-between pr-[30px]">
					<h2>Награды и опыт</h2>
					<button on:click={() => (closed = true)}> <img src={xClose} alt="Close" /> </button>
				</div>
				<div class="grow">
					<img class="h-full w-full" src={bigSecText} alt="Just close it" />
				</div>
			</div>
		</section>
	{:else}
		<section></section>
		<section class="min-h-[441px]"></section>
	{/if}
	<section class="min-h-[441px]"></section>
	<section></section>
	<section></section>
</div>

<style>
	section {
		box-shadow:
			0px 1px 2px 0px rgba(79, 79, 79, 0.1),
			0px 3px 3px 0px rgba(79, 79, 79, 0.09),
			0px 6px 4px 0px rgba(79, 79, 79, 0.05),
			0px 11px 4px 0px rgba(79, 79, 79, 0.01),
			0px 17px 5px 0px rgba(79, 79, 79, 0);
		background-color: white;
		border-radius: 16px;
	}

	.awards {
		color: var(--gray-7-aa, #667085);
		font-family: Inter;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin-top: 24px;
	}
	h2 {
		color: var(--gray-8-aaa, #475467);
		font-family: Inter;
		font-size: 36px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}

	.closest {
		color: var(--gray-7-aa, #667085);
		font-family: Inter;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.deadline {
		border-radius: 12px;
		background: var(--main-2, #eff8ff);
		display: flex;
		align-items: center;
		gap: 6px;
		color: var(--gray-8-aaa, #475467);
		font-family: Inter;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.arrow {
		border-radius: 16px;
		background: var(--main-8-aa, #1570ef);
		box-shadow:
			0px 2px 4px 0px rgba(79, 79, 79, 0.1),
			0px 6px 6px 0px rgba(79, 79, 79, 0.09),
			0px 12px 8px 0px rgba(79, 79, 79, 0.05),
			0px 22px 8px 0px rgba(79, 79, 79, 0.01),
			0px 34px 10px 0px rgba(79, 79, 79, 0);
		padding: 8px 20px;
	}
</style>
