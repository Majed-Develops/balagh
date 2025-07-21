export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.DwEUGBK2.js",app:"_app/immutable/entry/app.B-R-mwNr.js",imports:["_app/immutable/entry/start.DwEUGBK2.js","_app/immutable/chunks/D0EHdzbu.js","_app/immutable/chunks/CrVX9stK.js","_app/immutable/chunks/Bo7E7udZ.js","_app/immutable/entry/app.B-R-mwNr.js","_app/immutable/chunks/CrVX9stK.js","_app/immutable/chunks/CDqeNHGP.js","_app/immutable/chunks/BtRPhyV2.js","_app/immutable/chunks/Bo7E7udZ.js","_app/immutable/chunks/BeaLJaMG.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
