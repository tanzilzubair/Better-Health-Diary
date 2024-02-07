import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const css$1 = {
  code: "div.svelte-osv2n0{height:15vh;width:90vw;display:flex;justify-content:center;align-items:center;margin-top:4vh}@media(min-width: 600px){div.svelte-osv2n0{height:20vh}}img.svelte-osv2n0{max-height:100%;max-width:100%}",
  map: null
};
const TitleHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="svelte-osv2n0" data-svelte-h="svelte-ae1lrk"><img src="./header.svg" alt="BETTER HEALTH" class="svelte-osv2n0"> </div>`;
});
const css = {
  code: 'section.svelte-18vlk9m{width:100vw;display:flex;flex-direction:column;justify-content:center;align-items:center}.body-text.svelte-18vlk9m{margin-top:3vh;padding-left:7.5vw;padding-right:7.5vw;width:clamp(25ch, 100%, 75ch);font-family:"IBM Plex Sans", sans-serif;font-size:1.35rem;font-weight:400;color:#000000}.desktop-section.svelte-18vlk9m{margin-top:4vh;width:100vw;padding-right:5vw;display:flex;justify-content:center;align-items:center}.desktop-text-section.svelte-18vlk9m{height:100%;width:100%;padding-left:7.55vw;padding-right:4.5vw;width:clamp(25ch, 100%, 50ch);font-family:"IBM Plex Sans", sans-serif;font-size:1.35rem;font-weight:400;color:#000000;display:flex;justify-content:center;align-items:center}.desktop-book-section.svelte-18vlk9m{height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.copyright.svelte-18vlk9m{height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding-left:7.5vw;padding-right:7.5vw;font-family:"IBM Plex Sans", sans-serif;font-size:1rem;font-weight:400;color:#000000}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="svelte-18vlk9m">${validate_component(TitleHeader, "TitleHeader").$$render($$result, {}, {}, {})} ${``} ${``}</section> <section class="svelte-18vlk9m">${``} ${``}</section> <section class="svelte-18vlk9m" data-svelte-h="svelte-vy7fdk"><p class="body-text svelte-18vlk9m"><strong style="font-weight: 900;">This project was supported by the Fogarty International Center of the National Institutes of
			Health under award number: <a href="https://reporter.nih.gov/project-details/9773492">R21TW011339</a>.</strong></p></section> <section class="svelte-18vlk9m" data-svelte-h="svelte-1idv8du"><p class="body-text svelte-18vlk9m"><br><br> <strong style="font-weight: 900;">For more information</strong>
		about Type 1 Diabetes in Kenya contact the Kenya Diabetes Management and Information Centre. +254
		722 755828. https://dmi.or.ke
		<br><br> <strong style="font-weight: 900;">For more information</strong>
		about this research project contact <a href="https://www.susanwyche.com/">Dr. Susan Wyche</a> at
		<a href="mailto:spwyche@msu.edu">spwyche@msu.edu</a>.
		<br><br> <strong style="font-weight: 900;">Citation</strong>
		: Wyche, Susan; Olson, Jennifer; Omondi, Eric; Karekezi, Catherine and Ngugi, Nancy. 2023.
		<strong style="font-style: italic;">My Journal to Better Health: Type 1 Diabetes (T1D) for Kenya Youth. East Lansing, Michigan,
			USA.</strong></p></section> <section style="height: 15vh;" class="svelte-18vlk9m" data-svelte-h="svelte-1bydzvs"><div class="copyright svelte-18vlk9m">Copyright 2024 Susan Wyche, Jennifer Olson, and Michigan State University</div></section> <section style="height: 2.5vh;" class="svelte-18vlk9m"></section>`;
});
export {
  Page as default
};
