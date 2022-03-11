<script>
    let today = new Date();
    let height = 1619055;
    let hash = "e93921fa451f164857a29f06e2dac1c39b65c0116f21eb241e65f065690690d8";
	let test_graphs = [
		{
			section: 'Section 1',
			graphs: [
				{
					title: 'Title 1.1',
					plot: 'plot 1',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				},
				{
					title: 'Title 1.2',
					plot: 'plot 2',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				}
			]
		},
		{
			section: 'Section 2',
			graphs: [
				{
					title: 'Title 2.1',
					plot: 'plot 3',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				},
				{
					title: 'Title 2.2',
					plot: 'plot 4',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				}
			]
		},
		{
			section: 'Section 3',
			graphs: [
				{
					title: 'Title 3.1',
					plot: 'plot 5',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				},
				{
					title: 'Title 3.2',
					plot: 'plot 6',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				}
			]
		}
	];
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
		<div
			class="bg-rush rounded-lg bottom-0 text-3xl lg:text-4xl flex flex-col sm:flex-row px-6 lg:px-8 py-8 m-4"
		>
			<h3 class="text-black font-bold">Signatures:</h3>
            <h3 class="text-black font-bold grow text-right">{height.toLocaleString()}</h3>
		</div>
        <p class="text-steel text-sm sm:text-xl text-right sm:text-lg px-6 m-2">
            Hash: {hash.slice(0,32)}
        </p>
        <p class="text-steel text-xs sm:text-xl text-right sm:text-lg px-6 m-2">
            Last updated: {today.toUTCString()}
        </p>
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
