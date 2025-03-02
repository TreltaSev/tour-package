import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import Icons from 'unplugin-icons/vite';
import { promises as fs } from 'node:fs'

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), Icons({ autoInstall: true, compiler: 'svelte', customCollections: {
		'local': {
			logo: () => fs.readFile('./src/assets/svg/logo.svg', 'utf-8')
		}
	} })]
});
