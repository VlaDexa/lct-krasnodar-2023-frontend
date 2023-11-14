<script lang="ts">
	import type { ActionData } from './$types';
	import alertCircle from '$lib/images/alert-circle.svg';
	import cards from '$lib/images/cards.svg';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Войти</title>
	<meta name="description" content="Вход на сайт" />
</svelte:head>

<section
	class="fancy-bg flex h-[100dvh] flex-col-reverse px-4 lg:flex-row lg:items-center lg:gap-[5%] lg:px-5 xl:gap-[10%] xl:px-[100px] 2xl:gap-[15%] 2xl:px-[200px]"
>
	<form
		method="POST"
		novalidate
		class="flex flex-col items-center rounded-t-3xl bg-white px-[46px] py-6 lg:h-fit lg:rounded-b-3xl lg:px-[76px] lg:py-[48px]"
	>
		<h1 class="text-center text-2xl font-semibold text-[#475467] lg:text-5xl">Добро пожаловать!</h1>
		<div class="my-[34px] flex w-full flex-col items-center gap-1 lg:my-[68px]">
			<label class="flex w-full flex-col gap-[2px]">
				<h2 class="text-lg font-medium text-[#667085] lg:text-4xl">Корпоративная почта</h2>
				<div class="flex gap-1 lg:mt-1">
					<input
						type="email"
						placeholder="xxxx@work.ru"
						name="email"
						id="email"
						value={form?.email || ''}
						class={`min-w-0 flex-grow rounded-lg bg-[#F2F4F7] py-2 pl-1 lg:rounded-2xl lg:pl-2 lg:text-[28px] ${
							form?.email_error ? `outline outline-1 outline-[#FDA29B]` : ``
						}`}
					/>
					<img
						alt="!"
						src={alertCircle}
						class={form?.email_error ? `lg:w-[48px] lg:py-1` : `opacity-0`}
					/>
				</div>
				<span class="ml-1 text-sm text-[#D92D20] lg:mt-[10px] lg:text-[28px]">
					{#if form?.email_error}
						{form.email_error}
					{:else}
						&nbsp;
					{/if}
				</span>
			</label>
			<label class="flex w-full flex-col gap-[2px]">
				<h2 class="text-lg font-medium text-[#667085] lg:text-4xl lg:[line-height:56px]">Пароль</h2>
				<div class="flex gap-1 lg:mt-1">
					<input
						type="password"
						name="password"
						id="password"
						class={`min-w-0 flex-grow rounded-lg bg-[#F2F4F7] py-2 pl-1 lg:rounded-2xl lg:pl-2 lg:text-[28px] ${
							form?.password_error ? `outline outline-1 outline-[#FDA29B]` : ``
						}`}
					/>
					<img
						alt="!"
						src={alertCircle}
						class={form?.password_error ? `lg:w-[48px] lg:py-1` : `opacity-0`}
					/>
				</div>
				<span class="ml-1 text-sm text-[#D92D20] lg:mt-[10px] lg:text-[28px]">
					{#if form?.password_error}
						{form.password_error}
					{:else}
						&nbsp;
					{/if}
				</span>
			</label>
		</div>
		<button
			class="shdw w-4/5 rounded-[14px] bg-[#1570EF] py-3 text-lg font-medium text-white lg:rounded-[28px] lg:py-4 lg:text-4xl"
			>Войти</button
		>
		<ul
			class="mb-4 mt-4 flex flex-col gap-2 text-center text-sm font-normal text-[#98A2B3] lg:mt-8 lg:gap-6 lg:text-2xl"
		>
			<li class="underline underline-offset-[3px]">Забыли пароль?</li>
			<li>Техническая поддержка</li>
		</ul>
	</form>
	<div class="flex grow flex-col lg:items-center lg:align-middle">
		<div
			style:contain="paint"
			style:view-transition-name="round"
			class="flex grow justify-center lg:h-[400px] lg:w-full lg:max-w-[559px] lg:grow-0"
			style:background="no-repeat center/contain url(/favicon.svg)"
		></div>
		<img
			class="hidden max-w-[559px] lg:block"
			src={cards}
			alt="Ускоренная адапатция! Система геймификации. Отслеживание результатов. Настройка индивидуального плана адаптации."
		/>
	</div>
</section>

<style>
	.fancy-bg {
		background-image: url('$lib/images/login-bd.webp');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	@media only screen and (min-width: 1024px) {
		.fancy-bg {
			background-image: url($lib/images/login.png);
		}
	}

	.shdw {
		box-shadow:
			0px 1px 2px 0px rgba(79, 79, 79, 0.1),
			0px 3px 3px 0px rgba(79, 79, 79, 0.09),
			0px 6px 4px 0px rgba(79, 79, 79, 0.05),
			0px 11px 4px 0px rgba(79, 79, 79, 0.01),
			0px 17px 5px 0px rgba(79, 79, 79, 0);
	}
</style>
