

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.y0fyTQDC.js","_app/immutable/chunks/scheduler.kAlY8CUs.js","_app/immutable/chunks/index.TfFf6-Tf.js","_app/immutable/chunks/entry.N8p-dE83.js"];
export const stylesheets = [];
export const fonts = [];
