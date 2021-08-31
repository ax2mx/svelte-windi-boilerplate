<script>
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
		if (isDark) toggle();
	});

	const handleTheme = () => {
		store.setItem(THEME_KEY, `${(isDark = !isDark)}`);
		toggle();
	};
</script>

<button on:click={handleTheme}>
	{#if isDark}
		<svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path d="M12 17.625C15.1066 17.625 17.625 15.1066 17.625 12C17.625 8.8934 15.1066 6.375 12 6.375C8.8934 6.375 6.375 8.8934 6.375 12C6.375 15.1066 8.8934 17.625 12 17.625Z" />
			<path d="M12 3.375V1.5" />
			<path d="M5.90102 5.90126L4.5752 4.57544" />
			<path d="M3.375 12H1.5" />
			<path d="M5.90102 18.0989L4.5752 19.4247" />
			<path d="M12 20.625V22.5" />
			<path d="M18.0986 18.0989L19.4245 19.4247" />
			<path d="M20.625 12H22.5" />
			<path d="M18.0986 5.90126L19.4245 4.57544" />
		</svg>
	{:else}
		<svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M15.8076 14.3422C17.2853 14.7308 18.8398 14.72 20.3121 14.3109C19.9081 15.7631 19.1307 17.0837 18.0573 18.1419C16.9839 19.2 15.652 19.9585 14.1943 20.3417C12.7365 20.7248 11.2038 20.7194 9.74885 20.3258C8.29387 19.9322 6.96741 19.1643 5.90161 18.0985C4.83581 17.0327 4.06787 15.7063 3.67428 14.2513C3.2807 12.7963 3.27522 11.2636 3.65838 9.80586C4.04155 8.34811 4.79998 7.0162 5.85813 5.94281C6.91629 4.86943 8.23698 4.09195 9.6891 3.68799C9.28 5.16025 9.26923 6.71475 9.6579 8.19253C10.0466 9.67032 10.8207 11.0184 11.9012 12.0989C12.9817 13.1793 14.3298 13.9535 15.8076 14.3422Z"
			/>
		</svg>
	{/if}
</button>

<style>
	.icon {
		@apply w-8 h-8 stroke-current fill-none stroke-2;
		stroke-linecap: round;
		stroke-linejoin: round;
	}
</style>
