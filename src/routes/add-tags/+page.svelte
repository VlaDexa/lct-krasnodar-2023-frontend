<script lang="ts">
	import type { ActionData, PageData } from './$types';

	export let data: PageData;

	export let form: ActionData;
</script>

<section class="w-screen gap-4 flex flex-col pt-40">
	<form method="POST" class="flex gap-2 justify-center">
		<input
			type="text"
			name="tag"
			required
			id="tag"
			class="border-2 border-green-500 px-2 py-1 rounded-full"
		/>
		<button
			type="submit"
			class="border-2 rounded-full px-2 py-1 border-green-500 hover:bg-gray-100 transition-colors"
		>
			->
		</button>
	</form>
	{#if form?.incorrect}
		<p class="text-center">{JSON.stringify(form)}</p>
	{:else if form?.success}
		<p class="text-center">Success</p>
	{/if}
	<ul class="flex justify-center flex-wrap gap-2">
		{#each data.tags as tag (tag.id)}
			<li class="border-2 border-green-500 rounded-full px-2 py-1">
				{tag.tag_name}
			</li>
		{:else}
			<li>EMPTY</li>
		{/each}
	</ul>
</section>

<style>
</style>
