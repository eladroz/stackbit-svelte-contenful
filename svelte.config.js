import adapter from '@sveltejs/adapter-auto';

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
						ctx.server.ws.send({
							type: 'custom',
							event: 'sb-invalidate',
						});
					},
				},
			]
		},
	},

};

export default config;
