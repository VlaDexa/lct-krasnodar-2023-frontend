<script lang="ts">
	import type { ActionData, PageData } from './$types';

	export let data: PageData;

	export let form: ActionData;
</script>

<section class="flex w-screen flex-col gap-4 pt-40">
	<form method="POST" class="flex justify-center gap-2">
		<input
			type="text"
			name="tag"
			required
			id="tag"
			class="rounded-full border-2 border-green-500 px-2 py-1"
			placeholder="Крутой текст"
		/>
		<button
			type="submit"
			class="rounded-full border-2 border-green-500 px-2 py-1 transition-colors hover:bg-gray-100"
		>
			->
		</button>
	</form>
	{#if form?.incorrect}
		<p class="text-center">{JSON.stringify(form)}</p>
	{:else if form?.success}
		<p class="text-center">Success</p>
	{/if}
	<ul class="flex flex-wrap justify-center gap-2">
		{#each data.tags as tag (tag.id)}
			<li class="rounded-full border-2 border-green-500 px-2 py-1">
				{tag.tag_name}
			</li>
		{:else}
			<li>EMPTY</li>
		{/each}
	</ul>
</section>

<style>
</style>
