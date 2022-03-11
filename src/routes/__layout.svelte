<script>
	import '../app.css';
	let hidden = false;

	let partners = [
		{
			alt: 'Chainguard',
			src: 'partners/chainguard.svg',
			href: 'https://chainguard.dev/'
		},
		{
			alt: 'Cisco',
			src: 'partners/cisco.png',
			href: 'https://www.cisco.com/'
		},
		{
			alt: 'Google',
			src: 'partners/googlelogo.png',
			href: 'https://about.google/'
		},
		{
			alt: 'HP Enterprise',
			src: 'partners/hpe.png',
			href: 'https://www.hpe.com/'
		},
		{
			alt: 'Linux Foundation',
			src: 'partners/linuxfoundationlogo.png',
			href: 'https://linuxfoundation.org/'
		},
		{
			alt: 'Purdue University',
			src: 'partners/purdueunilogo.png',
			href: 'https://www.purdue.edu/'
		},
		{
			alt: 'Red Hat',
			src: 'partners/redhatlogo.png',
			href: 'https://www.redhat.com/'
		},
		{
			alt: 'VMware',
			src: 'partners/vmware.png',
			href: 'https://www.vmware.com/'
		}
	];
</script>

<!-- Navbar -->
<nav class="flex items-center justify-between flex-wrap bg-purdue-gold px-8 md:px-16 py-4">
	<div class="flex items-center flex-shrink-0 mr-6">
		<a href="https://lab.seal.purdue.wtf/">
			<img
				id="logo"
				alt="TSE Lab Logo"
				src="tse-logo-full.png"
				class="hidden md:block max-h-16 object-cover mr-2 p-0.5"
			/>
			<img
				id="logo"
				alt="TSE Lab Logo"
				src="tse-logo-part.png"
				class="md:hidden max-h-16 object-cover mr-2 p-0.5"
			/>
		</a>
	</div>
	<div class="block lg:hidden">
		<button
			on:click={() => (hidden = !hidden)}
			class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
		>
			<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
				><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg
			>
		</button>
	</div>
	<div
		class="w-full block flex-grow text-black text-md lg:flex lg:items-center lg:w-auto"
		class:hidden
	>
		<div class="lg:flex-grow">
			<a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-aged mr-6">
				Monitor
			</a>
			<a
				href="/about"
				class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-aged mr-6"
			>
				About
			</a>
			<a
				href="/people"
				class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-aged mr-6"
			>
				People
			</a>
		</div>
		<div>
			<a
				href="https://github.com/alanssitis/rekor-monitor"
				target="_blank"
				rel="noopener noreferrer"
				class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-aged"
			>
				Source
			</a>
		</div>
	</div>
</nav>

<!-- Content -->
<div class="flex-auto">
	<slot />
</div>

<!-- Footer -->
<footer class="shrink-0 m-0">
	<div class="bg-rush text-black px-16 lg:px-28 py-20">
		<h2 class="text-3xl font-bold">Partners</h2>
		<div class="grid items-center grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-1 xl:gap-2 m-2">
			{#each partners as { alt, src, href }, i}
				<div class="p-1 md:p-2 2xl:p-4">
					<a {href} target="_blank" rel="noopener noreferrer">
						<img id={'partner' + i} {alt} {src} />
					</a>
				</div>
			{/each}
		</div>
	</div>
	<div class="bg-steel text-white text-lg px-16 lg:px-24 pt-10 pb-12">
		<ul>
			<li class="my-3">
				<a href="/" class="hover:text-dust">Monitor</a>
			</li>
			<li class="my-3">
				<a href="/about" class="hover:text-dust">About</a>
			</li>
			<li class="my-3">
				<a href="/people" class="hover:text-dust">People</a>
			</li>
			<li class="my-3">
				<a
					href="https://github.com/alanssitis/rekor-monitor"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-dust">Source</a
				>
			</li>
		</ul>
	</div>
</footer>
