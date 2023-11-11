<script>
	import arrowRight from '$lib/images/arrow-right.svg';
	import calendar from '$lib/images/calendar.webp';
	import arrowShort from '$lib/images/arrow-short.svg';
</script>

<svelte:head>
	<title>Главная</title>
	<meta name="description" content="Главная страница" />
</svelte:head>

<!-- Desktop Layout -->
<div class="grid grid-cols-2 gap-[34px] px-5 py-10 max-lg:hidden xl:px-[100px] 2xl:px-[200px]">
	<section class="rounded-3xl bg-white px-12 py-[38px]">
		<h2 style:line-height="28px" class="text-4xl font-semibold text-[#475467]">Мои достижения</h2>
		<p class="font mt-5 text-2xl text-[#667085]">
			У тебя пока нет достижений, но вместе со стараниями приходит успех!
		</p>
		<ul class="mt-14 flex justify-evenly gap-2">
			<li class="leaf shdw achiv">Первые побеги</li>
			<li class="xp shdw achiv">Stonks!</li>
			<li class="trophy shdw achiv">И другие</li>
		</ul>
		<a
			href="http://google.com"
			class="shdw ml-auto mt-8 flex w-fit items-center gap-[6px] rounded-xl bg-[#1570EF] px-[18px] py-[6px] text-4xl font-medium text-white"
		>
			Перейти
			<img src={arrowRight} alt="" class="" />
		</a>
	</section>
	<section
		class="round-desktop flex flex-col justify-center py-32 text-center font-normal text-[#1570EF]"
	>
		<h1 style:font-size="54px" style:font-family="Igra Sans">
			<span style:font-size="108px">0</span><br />уровень
		</h1>
		<p aria-label="Количество опыта" class="text-2xl">100 xp осталось</p>
	</section>
	<section class="flex flex-col gap-8 rounded-[48px] bg-white px-[60px] py-12 text-[#475467]">
		<h2 class="text-4xl font-medium">Уведомления</h2>
		<ul class="flex flex-col gap-4">
			<li class="shdw flex flex-row gap-5 rounded-[20px] px-4 py-3">
				<div class="flex grow flex-col gap-1">
					<h3 class="text-[12px] lg:text-[24px]">Новый курс:</h3>
					<p class="text-sm font-medium lg:text-[28px]">Вся информация о компании</p>
				</div>
				<button class="shdw rounded-2xl bg-[#1570EF] px-5 py-[7px]"
					><img src={arrowShort} alt="Перейти" /></button
				>
			</li>
			<li class="shdw flex flex-row gap-5 rounded-[20px] px-4 py-3">
				<div class="flex grow flex-col gap-1">
					<h3 class="text-[12px] lg:text-[24px]">Проверено:</h3>
					<p class="text-sm font-medium lg:text-[28px]">Тестовое задание</p>
				</div>
				<button class="shdw rounded-2xl bg-[#1570EF] px-5 py-[7px]"
					><img src={arrowShort} alt="Перейти" /></button
				>
			</li>
			<li class="shdw flex flex-row gap-5 rounded-[20px] px-4 py-3">
				<div class="flex grow flex-col gap-1">
					<h3 class="text-[12px] lg:text-[24px]">Новое задание:</h3>
					<p class="text-sm font-medium lg:text-[28px]">Прочитать материал о компании</p>
				</div>
				<button class="shdw rounded-2xl bg-[#1570EF] px-5 py-[7px]"
					><img src={arrowShort} alt="Перейти" /></button
				>
			</li>
		</ul>
	</section>
	<section class="flex flex-col gap-8 rounded-[48px] bg-white px-[60px] py-12 text-[#475467]">
		<h2 class="text-4xl font-medium">Календарь</h2>
	</section>
</div>

<!-- Mobile Layout -->
<div class="lg:hidden">
	<section
		class="level-round flex flex-col justify-center py-32 text-center font-normal text-[#1570EF]"
	>
		<h1 style:font-size="32px" style:font-family="Igra Sans">
			<span style:font-size="64px">0</span><br />уровень
		</h1>
		<p aria-label="Количество опыта" class="text-base">100 xp осталось</p>
	</section>

	<main class="fancy-bg flex flex-col gap-5 px-2 pb-10 pt-[10px]">
		<section class="rounded-3xl bg-white px-6 py-[10px]">
			<h2 style:line-height="28px" class="text-2xl font-semibold text-[#475467]">Мои достижения</h2>
			<p class="mt-1 text-sm font-normal text-[#667085]">
				У тебя пока нет достижений, но вместе со стараниями приходит успех!
			</p>
			<ul class="mt-2 flex justify-evenly gap-2">
				<li class="leaf shdw achiv">Первые побеги</li>
				<li class="xp shdw achiv">Stonks!</li>
				<li class="trophy shdw achiv">И другие</li>
			</ul>
			<a
				href="http://google.com"
				class="shdw ml-auto mt-4 flex w-fit items-center gap-[6px] rounded-xl bg-[#1570EF] px-[18px] py-[6px] text-lg font-medium text-white"
			>
				Перейти
				<img src={arrowRight} alt="" class="" />
			</a>
		</section>
		<section class="rounded-3xl bg-white px-6 py-[10px]">
			<h2 style:line-height="28px" class="text-2xl font-semibold text-[#475467]">Календарь</h2>
			<img src={calendar} alt="Calendar" class="mt-3" />
			<a
				href="http://google.com"
				class="shdw ml-auto mt-4 flex w-fit items-center gap-[6px] rounded-xl bg-[#1570EF] px-[18px] py-[6px] text-lg font-medium text-white"
			>
				Перейти
				<img src={arrowRight} alt="" class="" />
			</a>
		</section>
	</main>
</div>

<style>
	@font-face {
		font-family: 'Igra Sans';
		src: url('$lib/fonts/IgraSans.otf') format('opentype');
	}

	.round-desktop {
		background-image: url($lib/images/round-desktop.svg);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center 30%;
		view-transition-name: round;
	}

	.level-round {
		contain: paint;
		view-transition-name: round;
		background-image: url($lib/images/level.svg);
		background-position: 50% 100%;
		background-repeat: no-repeat;
		line-height: 28px;
	}

	.leaf {
		background-image: url($lib/images/leaf.svg?width=100);
		background-repeat: no-repeat;
		background-position-x: right;
	}

	.xp {
		background-image: url($lib/images/xp.svg?width=100);
		background-repeat: no-repeat;
		background-position-x: center;
		background-position-y: 10%;
	}

	.trophy {
		background-image: url($lib/images/trophy.svg?width=100);
		background-repeat: no-repeat;
		background-position-x: right;
		background-position-y: 10%;
	}

	.fancy-bg {
		background-image: url('$lib/images/home-bg.svg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center top;
	}

	.shdw {
		box-shadow:
			0px 1px 2px 0px rgba(79, 79, 79, 0.1),
			0px 3px 3px 0px rgba(79, 79, 79, 0.09),
			0px 6px 4px 0px rgba(79, 79, 79, 0.05),
			0px 11px 4px 0px rgba(79, 79, 79, 0.01),
			0px 17px 5px 0px rgba(79, 79, 79, 0);
	}

	.achiv {
		display: flex;
		flex-direction: column-reverse;
		padding: 16px 10px;
		border-radius: 20px;
		background-color: #e4e7ec;
		color: #667085;
		font-weight: 400;
		font-size: 14px;
		width: 100px;
		height: 100px;
	}

	@media only screen and (min-width: 1024px) {
		.fancy-bg {
			background-image: url($lib/images/background.webp);
		}

		.achiv {
			width: 200px;
			height: 200px;
			font-size: 28px;
		}

		.xp,
		.leaf,
		.trophy {
			background-size: 100%;
		}
	}
</style>
