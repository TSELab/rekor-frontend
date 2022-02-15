<script>
	import '../app.css';
	let showheader = false;
</script>

<!-- Navbar -->
<nav class="flex items-center justify-between flex-wrap bg-purdue-gold p-6">
	<div class="flex items-center flex-shrink-0 text-black mr-6">
		<img id="logo" alt="TSE Lab Logo" src="tse-lab-logo.png" class="bg-white rounded-md mr-2 p-1" />
		<span class="font-semibold text-xl tracking-tight">TSE Labs</span>
	</div>
	<div class="block lg:hidden">
		<button
			on:click={() => (showheader = !showheader)}
			class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
		>
			<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
				><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg
			>
		</button>
	</div>
	<div
		class="w-full block flex-grow text-white lg:flex lg:items-center lg:w-auto {showheader
			? 'hidden'
			: ''}"
	>
		<div class="text-sm lg:flex-grow">
			<a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-aged mr-6">
				Home
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
			<a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-aged mr-6">
				Rekor Monitor
			</a>
		</div>
		<div>
			<a
				href="https://github.com/alanssitis/rekor-monitor"
				target="_blank"
				rel="noopener noreferrer"
				class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-aged">Source</a
			>
		</div>
	</div>
</nav>

<!-- Content -->
<div class="h-full m-6 flex-2">
	<slot />
</div>

<!-- Footer -->
<div class="bg-aged text-white p-6">
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/people">People</a>
		</li>
		<li>
			<a href="/">Rekor Monitor</a>
		</li>
	</ul>
</div>
