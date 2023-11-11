<script>
	import arrowShort from '$lib/images/arrow-short.svg';

	export let title = '';
	export let content = '';
</script>

<li class="shdw flex flex-row gap-5 rounded-[20px] px-4 py-3">
	<div class="flex grow flex-col gap-1">
		<h3 class="text-[12px] lg:text-[24px]">{title}</h3>
		<p class="text-sm font-medium lg:text-[28px]">{content}</p>
	</div>
	<button class="shdw rounded-2xl bg-[#1570EF] px-5 py-[7px]"
		><img src={arrowShort} alt="Перейти" /></button
	>
</li>

<style>
	.shdw {
		box-shadow:
			0px 1px 2px 0px rgba(79, 79, 79, 0.1),
			0px 3px 3px 0px rgba(79, 79, 79, 0.09),
			0px 6px 4px 0px rgba(79, 79, 79, 0.05),
			0px 11px 4px 0px rgba(79, 79, 79, 0.01),
			0px 17px 5px 0px rgba(79, 79, 79, 0);
	}
</style>
