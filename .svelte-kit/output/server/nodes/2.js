

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.5hr1Q2-z.js","_app/immutable/chunks/scheduler.kAlY8CUs.js","_app/immutable/chunks/index.TfFf6-Tf.js"];
export const stylesheets = ["_app/immutable/assets/2.GOeRoO18.css"];
export const fonts = [];
