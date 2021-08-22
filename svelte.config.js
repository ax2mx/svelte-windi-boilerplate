/** @type {import('@sveltejs/kit').Config} */
import WindiCSS from 'vite-plugin-windicss';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: () => ({
			plugins: [WindiCSS.default()]
		})
	}
};

export default config;
