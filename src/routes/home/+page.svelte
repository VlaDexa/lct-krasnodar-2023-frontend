<script lang="ts"></script>

<svelte:head>
	<title>Главная</title>
	<meta name="description" content="Главная страница" />
</svelte:head>

<!-- Level circle -->
<section
	style:contain="paint"
	style:view-transition-name="round"
	style:background-image="url(/level.svg)"
	style:background-position="50% 100%"
	style:background-repeat="no-repeat"
	style:line-height="28px"
	class="my-[30px] py-32 text-center flex-col justify-center flex text-[#1570EF] font-normal"
>
	<h1 style:font-size="32px" style:font-family="Igra Sans">
		<span style:font-size="64px">0</span><br />уровень
	</h1>
	<p aria-label="Количество опыта" class="text-base">100 xp осталось</p>
</section>

<main class="fancy-bg pt-[10px] pb-10 flex flex-col gap-5 px-2">
	<section class="px-6 py-[10px] rounded-3xl bg-white">
		<h2 style:line-height="28px" class="text-2xl text-[#475467] font-semibold">Мои достижения</h2>
		<p class="text-sm text-[#667085] font-normal mt-1">
			У тебя пока нет достижений, но вместе со стараниями приходит успех!
		</p>
		<ul class="flex justify-evenly mt-2 gap-2">
			<li class="leaf shdw achiv">Первые побеги</li>
			<li class="xp shdw achiv">Stonks!</li>
			<li class="trophy shdw achiv">И другие</li>
		</ul>
		<a
			href="http://google.com"
			class="ml-auto mt-4 flex gap-[6px] w-fit items-center px-[18px] py-[6px] bg-[#1570EF] text-white text-lg font-medium rounded-xl shdw"
		>
			Перейти
			<img src="/arrow-right.svg" alt="" class="" />
		</a>
	</section>
	<section class="px-6 py-[10px] rounded-3xl bg-white">
		<h2 style:line-height="28px" class="text-2xl text-[#475467] font-semibold">Календарь</h2>
		<img src="/calendar.webp" alt="Calendar" class="mt-3" />
		<a
			href="http://google.com"
			class="ml-auto mt-4 flex gap-[6px] w-fit items-center px-[18px] py-[6px] bg-[#1570EF] text-white text-lg font-medium rounded-xl shdw"
		>
			Перейти
			<img src="/arrow-right.svg" alt="" class="" />
		</a>
	</section>
</main>

<style>
	@font-face {
		font-family: 'Igra Sans';
		src: url('/IgraSans.otf') format('opentype');
	}

	.leaf {
		background-image: url(/leaf.svg);
	}

	.xp {
		background-image: url(/xp.svg);
		background-repeat: no-repeat;
		background-position-x: center;
		background-position-y: 10%;
	}

	.trophy {
		background-image: url(/trophy.svg);
		background-repeat: no-repeat;
		background-position-x: right;
		background-position-y: 10%;
	}

	.fancy-bg {
		background-image: url('/home-bg.svg');
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
</style>
