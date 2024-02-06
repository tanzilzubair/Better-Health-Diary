<script>
	import TitleBook from '../lib/components/TitleBook.svelte';
	import TitleHeader from '../lib/components/TitleHeader.svelte';
	import TitleLogos from '../lib/components/TitleLogos.svelte';
	import PdfButton from '../lib/components/PdfButton.svelte';

	import { onMount } from 'svelte';

	let device = '';

	onMount(() => {
		onResize();
		window.addEventListener('resize', onResize);
	});

	function onResize() {
		if (window.innerWidth > 900) {
			device = 'Desktop';
		} else {
			device = 'Mobile';
		}
	}
</script>

<section>
	<TitleHeader></TitleHeader>
	{#if device == 'Mobile'}
		<TitleBook></TitleBook>
		<PdfButton></PdfButton>
		<TitleLogos></TitleLogos>
	{/if}

	{#if device == 'Desktop'}
		<div class="desktop-section">
			<div class="desktop-text-section">
				<p>
					<strong style="font-weight: 900; font-style:italic;">
						My Journey to Better Health: Type 1 Diabetes (T1D) Diary for Kenyan Youth
					</strong>
					is the culmination of a two-year collaborative effort spanning from 2021 to 2023. This project
					engaged researchers from Michigan State University, the Kenya Diabetes Management and Information
					Centre, and Rural Outreach Africa, along with 24 Kenyan youths (aged 13 to 18) from Nairobi
					and Vihiga Counties, caregivers, diabetes experts, and designers.
					<br /><br />
					We used human-centered design methods to create this intervention. Every aspect, from the decision
					to develop a paper diary to the selection of emojis and the depiction of daily activities and
					food choices, was carefully considered. The outcome is a product that is both visually appealing,
					user-friendly, and that can used without having smartphone.
				</p>
			</div>
			<div class="desktop-book-section">
				<TitleBook></TitleBook>
				<PdfButton></PdfButton>
			</div>
		</div>
		<TitleLogos></TitleLogos>
	{/if}
</section>

<section>
	{#if device == 'Mobile'}
		<p class="body-text">
			<strong style="font-weight: 900; font-style:italic;">
				My Journey to Better Health: Type 1 Diabetes (T1D) Diary for Kenyan Youth
			</strong>
			is the culmination of a two-year collaborative effort spanning from 2021 to 2023. This project
			engaged researchers from Michigan State University, the Kenya Diabetes Management and Information
			Centre, and Rural Outreach Africa, along with 24 Kenyan youths (aged 13 to 18) from Nairobi and
			Vihiga Counties, caregivers, diabetes experts, and designers.
			<br /><br />
			We used human-centered design methods to create this intervention. Every aspect, from the decision
			to develop a paper diary to the selection of emojis and the depiction of daily activities and food
			choices, was carefully considered. The outcome is a product that is both visually appealing, user-friendly,
			and that can used without having smartphone.
			<br /><br />
			This diary also serves as a valuable educational tool for youth to gain a deeper understanding
			of themselves, particularly the connection between fluctuations in their blood sugar levels, insulin
			injections, dietary choices, physical activities, and emotional well-being. Additionally, healthcare
			professionals can utilize these diaries to access crucial information, including blood sugar readings
			and injection history, which was previously unavailable to them.
		</p>
	{/if}
	{#if device == 'Desktop'}
		<p class="body-text">
			This diary also serves as a valuable educational tool for youth to gain a deeper understanding
			of themselves, particularly the connection between fluctuations in their blood sugar levels,
			insulin injections, dietary choices, physical activities, and emotional well-being.
			Additionally, healthcare professionals can utilize these diaries to access crucial
			information, including blood sugar readings and injection history, which was previously
			unavailable to them.
		</p>
	{/if}
</section>

<section>
	<p class="body-text">
		<strong style="font-weight: 900;">
			This project was supported by the Fogarty International Center of the National Institutes of
			Health under award number: <a href="https://reporter.nih.gov/project-details/9773492"
				>R21TW011339</a
			>.
		</strong>
	</p>
</section>
<section>
	<p class="body-text">
		<br /><br />
		<strong style="font-weight: 900;"> For more information </strong>
		about Type 1 Diabetes in Kenya contact the Kenya Diabetes Management and Information Centre. +254
		722 755828. https://dmi.or.ke
		<br /><br />
		<strong style="font-weight: 900;"> For more information </strong>
		about this research project contact <a href="https://www.susanwyche.com/">Dr. Susan Wyche</a> at
		<a href="mailto:spwyche@msu.edu">spwyche@msu.edu</a>.
		<br /><br />
		<strong style="font-weight: 900;"> Citation </strong>
		: Wyche, Susan; Olson, Jennifer; Omondi, Eric; Karekezi, Catherine and Ngugi, Nancy. 2023.
		<strong style="font-style: italic;"
			>My Journal to Better Health: Type 1 Diabetes (T1D) for Kenya Youth. East Lansing, Michigan,
			USA.
		</strong>
	</p>
</section>
<section style="height: 15vh;">
	<div class="copyright">
		Copyright 2024 Susan Wyche, Jennifer Olson, and Michigan State University
	</div>
</section>
<section style="height: 2.5vh;"></section>

<style lang="scss">
	section {
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.body-text {
		margin-top: 3vh;
		padding-left: 7.5vw;
		padding-right: 7.5vw;
		width: clamp(25ch, 100%, 75ch);
		@include body-text;
	}

	.desktop-section {
		margin-top: 4vh;
		width: 100vw;
		padding-right: 5vw;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.desktop-text-section {
		height: 100%;
		width: 100%;
		padding-left: 7.55vw;
		padding-right: 4.5vw;
		width: clamp(25ch, 100%, 50ch);
		@include body-text;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.desktop-book-section {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.copyright {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding-left: 7.5vw;
		padding-right: 7.5vw;
		@include body-text($font-size: 1rem);
	}
</style>
