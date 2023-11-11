<script>
	import Notification from '$lib/Notification.svelte';
	import mail from '$lib/images/mail-1.svg';
	import send from '$lib/images/send.svg';
	import phone from '$lib/images/phone.svg';
	import clock from '$lib/images/clock.svg';
</script>

<svelte:head>
	<title>Модуль</title>
</svelte:head>

<section>
	<div class="w-[65%]">
		<h2 class="mt-10">Задания</h2>
		<ul class="mt-6 flex flex-col gap-4">
			<Notification title="Новое задание:" content="Прочитать материал о компании" />
		</ul>
	</div>
	<div>
		<ul>
			<li>
				<h4>Ближайший срок</h4>
				<div class="medium container flex items-center justify-between">
					<img src={clock} alt="" />
					<span>22 ноября</span>
					<span>23:59</span>
				</div>
				<h5>До сдачи остаслось</h5>
				<div class="medium container flex items-center justify-between">
					<span>0 дней</span>
					<span>14 ч.</span>
					<span>43 мин.</span>
				</div>
			</li>
			<li>
				<h4>Текущий статус</h4>
				<div class="container flex items-center justify-between">
					<span>Заработано</span>
					<span class="big">0 xp</span>
				</div>
				<div class="flex flex-col">
					<span class="text-lg">Максимально возможно:</span>
					<span class="text-xl font-medium">40 px</span>
				</div>
			</li>
			<li>
				<h4>Куратор</h4>
				<p class="fio">Моисейченко Кирилл Антонович</p>
				<address>
					<a href="mailto:vgrechannik@gmail.com"><img src={mail} alt="Mail" />Написать на почту</a>
					<a href="https://t.me/horoshii_ml_ds"><img src={send} alt="telegram" />@horoshii_ml_ds</a>
					<a href="tel:+79530278979"><img src={phone} alt="call" />8(953)027-89-79</a>
				</address>
			</li>
		</ul>
	</div>
</section>

<style>
	h2 {
		color: var(--gray-8-aaa, #475467);

		/* PC/H3 */
		font-family: Inter;
		font-size: 36px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}

	h5 {
		color: var(--gray-7-aa, #667085);
		font-family: Inter;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	li {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	.fio {
		color: var(--gray-7-aa, #667085);
		font-family: Inter;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	p {
		color: var(--gray-7-aa, #667085);

		/* PC/text */
		font-family: Inter;
		font-size: 28px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.container {
		border-radius: 12px;
		background: var(--main-2, #eff8ff);
		padding: 5px 20px;
		color: var(--gray-7-aa, #667085);
		font-family: Inter;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.container.medium {
		color: var(--gray-8-aaa, #475467);
		font-family: Inter;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.container .big {
		color: var(--gray-8-aaa, #475467);
		font-family: Inter;
		font-size: 32px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}

	h4 {
		color: var(--gray-8-aaa, #475467);

		/* PC/H4(?) */
		font-family: Inter;
		font-size: 24px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}

	address {
		gap: 14px;
		display: flex;
		flex-direction: column;
		color: var(--gray-7-aa, #667085);
		font-family: Inter;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	address a:hover {
		text-decoration-line: underline;
	}

	address a {
		display: flex;
		gap: 8px;
	}

	section {
		border-radius: 16px;
		background: var(--White, #fff);
		margin-left: 20px;
		padding: 60px 40px;
		display: flex;
		flex-direction: row;
		gap: 134px;
		flex-grow: 1;
		box-shadow:
			0px 1px 2px 0px rgba(79, 79, 79, 0.1),
			0px 3px 3px 0px rgba(79, 79, 79, 0.09),
			0px 6px 4px 0px rgba(79, 79, 79, 0.05),
			0px 11px 4px 0px rgba(79, 79, 79, 0.01),
			0px 17px 5px 0px rgba(79, 79, 79, 0);
	}

	ul {
		color: var(--gray-8-aaa, #475467);
		/* Mobile/Descr_main */
		font-family: Inter;
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		flex-direction: column;
		display: flex;
		gap: 40px;
	}
</style>
