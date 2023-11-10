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
	class="fancy-bg h-[100dvh] flex flex-col-reverse lg:flex-row lg:items-center lg:px-[200px] lg:gap-[15%] px-4"
>
	<form
		method="POST"
		novalidate
		class="flex flex-col py-6 lg:py-[48px] px-[46px] lg:px-[76px] bg-white rounded-t-3xl lg:rounded-b-3xl lg:h-fit items-center"
	>
		<h1 class="text-center font-semibold text-2xl lg:text-5xl text-[#475467]">Добро пожаловать!</h1>
		<div class="my-[34px] lg:my-[68px] flex flex-col items-center gap-1 w-full">
			<label class="gap-[2px] flex flex-col w-full">
				<h2 class="font-medium text-lg lg:text-4xl text-[#667085]">Корпоративная почта</h2>
				<div class="flex gap-1 lg:mt-1">
					<input
						type="email"
						placeholder="xxxx@work.ru"
						name="email"
						id="email"
						value={form?.email || ''}
						class={`min-w-0 flex-grow rounded-lg lg:rounded-2xl bg-[#F2F4F7] pl-1 lg:pl-2 py-2 lg:text-[28px] ${
							form?.email_error ? `outline outline-1 outline-[#FDA29B]` : ``
						}`}
					/>
					<img
						alt="!"
						src={alertCircle}
						class={form?.email_error ? `lg:w-[48px] lg:py-1` : `opacity-0`}
					/>
				</div>
				<span class="text-sm lg:text-[28px] text-[#D92D20] ml-1 lg:mt-[10px]">
					{#if form?.email_error}
						{form.email_error}
					{:else}
						&nbsp;
					{/if}
				</span>
			</label>
			<label class="gap-[2px] flex flex-col w-full">
				<h2 class="font-medium text-lg lg:text-4xl text-[#667085] lg:[line-height:56px]">Пароль</h2>
				<div class="flex gap-1 lg:mt-1">
					<input
						type="password"
						name="password"
						id="password"
						class={`min-w-0 flex-grow rounded-lg lg:rounded-2xl bg-[#F2F4F7] pl-1 lg:pl-2 py-2 lg:text-[28px] ${
							form?.password_error ? `outline outline-1 outline-[#FDA29B]` : ``
						}`}
					/>
					<img
						alt="!"
						src={alertCircle}
						class={form?.password_error ? `lg:w-[48px] lg:py-1` : `opacity-0`}
					/>
				</div>
				<span class="text-sm lg:text-[28px] text-[#D92D20] ml-1 lg:mt-[10px]">
					{#if form?.password_error}
						{form.password_error}
					{:else}
						&nbsp;
					{/if}
				</span>
			</label>
		</div>
		<button
			class="text-white bg-[#1570EF] rounded-[14px] lg:rounded-[28px] py-3 lg:py-4 w-4/5 text-lg lg:text-4xl font-medium shdw"
			>Войти</button
		>
		<ul
			class="mt-4 lg:mt-8 text-center text-sm lg:text-2xl font-normal text-[#98A2B3] flex flex-col gap-2 lg:gap-6 mb-4"
		>
			<li class="underline underline-offset-[3px]">Забыли пароль?</li>
			<li>Техническая поддержка</li>
		</ul>
	</form>
	<div class="grow lg:align-middle lg:items-center flex flex-col">
		<div
			style:contain="paint"
			style:view-transition-name="round"
			class="grow flex justify-center lg:grow-0 lg:h-[400px] lg:w-full lg:max-w-[559px]"
			style:background="no-repeat center/contain url(/favicon.svg)"
		></div>
		<img
			class="hidden lg:block max-w-[559px]"
			src={cards}
			alt="Ускоренная адапатция! Система геймификации. Отслеживание результатов. Настройка индивидуального плана адаптации."
		/>
	</div>
</section>

<style>
	.fancy-bg {
		background-image: url('$lib/images/login-bd.svg');
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
