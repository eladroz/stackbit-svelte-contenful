import adapter from '@sveltejs/adapter-netlify';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [
				{
					name: 'watch-content',
					configureServer(server) {
						server.watcher.add('./contentful/');
					},
					handleHotUpdate(ctx) {
						if (ctx.file.includes('contentful')) {
							ctx.server.ws.send({
								type: 'custom',
								event: 'sb-invalidate',
							});
						}
					},
				},
			]
		},
	},

};

export default config;
