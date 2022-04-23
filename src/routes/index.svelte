<script>
	import { onMount } from 'svelte';

	const entries_endpoint = 'http://localhost:443/api/';

	let newestEntry = {};
	let test_graphs = [];

	onMount(async () => {
		fetch(entries_endpoint + "entries").then((resp) => {
			resp
				.json()
				.then((data) => {
					newestEntry = data;
				})
				.catch((err) => {
					console.error(err);
				});
		});
	});
</script>

<!-- Top Section -->
<div
	class="grid grid-cols-1 2xl:grid-cols-2 gap-4 lg:gap-6 2xl:gap-8 lg:gap-24 p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24"
>
	<div class="flex flex-col px-0 xl:px-8">
		<h1 class="text-4xl sm:text-7xl text-center font-bold">Rekor Monitor</h1>
		<p class="text-lg sm:text-3xl grow m-2 md:m-4 lg:m-8">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Tortor pretium viverra suspendisse potenti nullam ac tortor
			vitae purus. Est ante in nibh mauris. Vitae ultricies leo integer malesuada nunc vel risus
			commodo viverra. Non quam lacus suspendisse faucibus interdum. Aenean vel elit scelerisque
			mauris pellentesque pulvinar pellentesque habitant. Tellus in hac habitasse platea dictumst
			vestibulum.
		</p>
		<p class="text-steel text-sm sm:text-xl text-right sm:text-lg px-6 m-2">
        Hash: {newestEntry.hashVal ? newestEntry.hashVal.slice(0, 32) : newestEntry.hashVal}
		</p>
		<div
			class="bg-rush rounded-lg bottom-0 text-3xl lg:text-4xl flex flex-col sm:flex-row px-6 lg:px-8 py-8 m-4"
		>
			<h3 class="text-black font-bold">Signatures:</h3>
			<h3 class="text-black font-bold grow text-right">{newestEntry.idx}</h3>
		</div>
	</div>
	<div
		class="relative w-full bg-field rounded-xl flex justify-center items-center"
		style="padding-top: 45%; padding-bottom: 45%;"
	>
		<p class="">Big Plot</p>
	</div>
</div>

<!-- Subsections -->
{#each test_graphs as { section, graphs }, i}
	<div class="{i % 2 ? 'bg-dust' : 'bg-steam'} p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 m-0">
		<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">{section}</h2>
		<div class="grid grid-cols-1 2xl:grid-cols-2 gap-16">
			{#each graphs as { title, plot, text }}
				<div class="flex flex-col justify-items-center m-2 sm:m-4">
					<h3 class="text-2xl sm:text-3xl md:text-4xl mb-2">{title}</h3>
					<div
						class="grow bg-white rounded-xl flex justify-center items-center mx-0 sm:mx-3 md:mx-6 lg:mx-8 my-2 sm:my-6 md:my-8"
						style="padding-top: 35%; padding-bottom: 35%;"
					>
						<p class="">{plot}</p>
					</div>
					<p>{text}</p>
				</div>
			{/each}
		</div>
	</div>
{/each}
