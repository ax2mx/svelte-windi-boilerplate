<script>
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	const THEME_KEY = 'theme';
	let isDark, store;

	const toggle = () => window.document.body.classList.toggle('dark');

	onMount(() => {
		store = window.localStorage;

		if (Object.keys(store).includes(THEME_KEY)) {
			isDark = store.getItem(THEME_KEY) === 'true';
		} else {
			isDark = false;
			store.setItem(THEME_KEY, isDark);
		}
		if(isDark) toggle();
	});

	const handleTheme = () => {
		if (browser) {
			isDark = !isDark;
			store.setItem(THEME_KEY, isDark);
			toggle();
		}
	};
</script>

<button on:click={handleTheme}>
	{#if isDark}
		Light up
	{:else}
		Get dark
	{/if}
</button>
