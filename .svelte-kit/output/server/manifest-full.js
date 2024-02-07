export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","Diary.pdf","PDF.png","book_straight.png","book_tilted.png","header.svg","kdmic.png","msu.png","nih.png","roa.png"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.skyDtAjo.js","app":"_app/immutable/entry/app.ujZ5jrFu.js","imports":["_app/immutable/entry/start.skyDtAjo.js","_app/immutable/chunks/entry.N8p-dE83.js","_app/immutable/chunks/scheduler.kAlY8CUs.js","_app/immutable/entry/app.ujZ5jrFu.js","_app/immutable/chunks/scheduler.kAlY8CUs.js","_app/immutable/chunks/index.TfFf6-Tf.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
