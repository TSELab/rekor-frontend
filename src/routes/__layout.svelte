<script>
  import "../app.css";
  let showheader = false;
</script>

<!-- Navbar -->
<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="font-semibold text-xl tracking-tight">Purdue</span>
  </div>
  <div class="block lg:hidden sg:{() => showheader = false} mg:{() => showheader = false}">
    <button on:click="{() => showheader = !showheader}" class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto {showheader ? 'hidden' : ''}">
    <div class="text-sm lg:flex-grow">
      <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Rekor Monitor
      </a>
      <a href="/people" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        People
      </a>
      <a href="/documentation" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        API Documentation
      </a>
    </div>
    <div>
      <a href="https://github.com/alanssitis/rekor-monitor" target="_blank" rel="noopener noreferrer" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">Source</a>
    </div>
  </div>
</nav>

<!-- Content -->
<slot />

<!-- Footer -->
<div>
  <p>[[!! Footer !!]]</p>
  <a href="/">Rekor Monitor</a>
  <a href="/people">People</a>
  <a href="/documentation">API Documentation</a>
  <a href="https://github.com/alanssitis/rekor-monitor">Source</a>
</div>
