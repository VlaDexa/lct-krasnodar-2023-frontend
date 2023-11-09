<script lang="ts"></script>

<svelte:head>
	<title>Главная</title>
	<meta name="description" content="Главная страница" />
</svelte:head>

<div
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
</div>

<style>
	@font-face {
		font-family: 'Igra Sans';
		src: url('/IgraSans.otf') format('opentype');
	}
</style>
