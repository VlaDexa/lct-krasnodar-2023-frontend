<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Войти</title>
	<meta name="description" content="Вход на сайт" />
</svelte:head>

<section class="fancy-bg h-[100dvh] flex flex-col-reverse px-4">
	<form
		method="POST"
		novalidate
		class="flex flex-col py-6 px-[46px] bg-white rounded-t-3xl items-center"
	>
		<h1 class="text-center font-semibold text-2xl text-[#475467]">Добро пожаловать!</h1>
		<div class="my-[34px] flex flex-col items-center gap-1 w-full">
			<label class="gap-[2px] flex flex-col w-full">
				<h2 class="font-medium text-lg text-[#667085]">Корпоративная почта</h2>
				<div class="flex gap-1">
					<input
						type="email"
						placeholder="xxxx@work.ru"
						name="email"
						id="email"
						value={form?.email || ''}
						class={`min-w-0 flex-grow rounded-lg bg-[#F2F4F7] pl-1 py-2 ${
							form?.email_error ? `outline outline-1 outline-[#FDA29B]` : ``
						}`}
					/>
					<img alt="!" src="/alert-circle.svg" class={form?.email_error ? `` : `opacity-0`} />
				</div>
				<span class="text-sm text-[#D92D20] ml-1">
					{#if form?.email_error}
						{form.email_error}
					{:else}
						&nbsp;
					{/if}
				</span>
			</label>
			<label class="gap-[2px] flex flex-col w-full">
				<h2 class="font-medium text-lg text-[#667085]">Пароль</h2>
				<div class="flex gap-1">
					<input
						type="password"
						name="password"
						id="password"
						class={`min-w-0 flex-grow rounded-lg bg-[#F2F4F7] pl-1 py-2 ${
							form?.password_error ? `outline outline-1 outline-[#FDA29B]` : ``
						}`}
					/>
					<img alt="!" src="/alert-circle.svg" class={form?.password_error ? `` : `opacity-0`} />
				</div>
				<span class="text-sm text-[#D92D20] ml-1">
					{#if form?.password_error}
						{form.password_error}
					{:else}
						&nbsp;
					{/if}
				</span>
			</label>
		</div>
		<button class="text-white bg-[#1570EF] rounded-[14px] py-3 w-4/5 text-lg font-medium shdw"
			>Войти</button
		>
		<ul class="mt-4 text-center text-sm font-normal text-[#98A2B3] flex flex-col gap-2 mb-4">
			<li class="underline underline-offset-[3px]">Забыли пароль?</li>
			<li>Техническая поддержка</li>
		</ul>
	</form>
	<div
		style:contain="paint"
		style:view-transition-name="round"
		class="grow flex justify-center"
		style:background="no-repeat center/contain url(/favicon.svg)"
	>
	</div>
</section>

<style>
	.fancy-bg {
		background-image: url('/login-bd.svg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
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
