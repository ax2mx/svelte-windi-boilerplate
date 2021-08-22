<script>
	import 'virtual:windi.css';

	// if you want to enable windi devtools
	import { browser } from '$app/env';
	if (browser) import('virtual:windi-devtools');
</script>

<div class="p-8 mx-auto w-full">
	<slot />
</div>
