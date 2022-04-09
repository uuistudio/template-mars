module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
    presets: [
        require('./cruip-simple-preset.cjs'),
        require('./flex-preset.cjs'),
    ],
    corePlugins: {},
    plugins: [],
}
