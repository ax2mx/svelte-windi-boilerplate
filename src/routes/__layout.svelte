<script>
	import 'virtual:windi.css';
	// Enable windi devtools
	import { browser } from '$app/env';
	if (browser) {
		import('virtual:windi-devtools');
	}

	import ThemeToggle from '$lib/ThemeToggle.svelte';
</script>

<div class="min-h-screen p-8 mx-auto w-full text-gray-900 bg-white dark:(bg-gray-900 text-white)">
	<ThemeToggle/>
	<slot />
</div>
