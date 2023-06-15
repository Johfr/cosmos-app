<script setup>
import Title from '../components/Title.vue'
import RightArrow from '../components/RightArrow.vue'
import PlanetsCarousel from '../components/PlanetsCarousel.vue'
import Navbar from '../components/Navbar.vue';
</script>

<template>
	<div class="container position-relative">
		<Navbar />
		<Title class="title-h1" first="Your personal guide" last=" to the universe" delayFirstTitlePart=".5s" delaySecondTitlePart="1s" />

		<div class="landing-tool">
			<p>
				<RouterLink to="/">
					Start Explore
					<RightArrow class="arrow-icon" />
				</RouterLink>
			</p>
			<p>
				Perfect tool for discovering the wonders of the univers !
			</p>
		</div>

		<PlanetsCarousel />

	</div>
</template>

<style lang="scss" scoped>
.title-h1 {
	margin: 4vh 20px 10px 0;
}
.landing-tool {
	display: flex;
	margin-top: 4vh;
	
	p {
		font-size: .9rem;
		font-weight: 300;
		opacity: 0;
		
		&:first-child {
			min-width: 50%;
			animation-name: slideRight;
			animation-delay: 1.5s;
			animation-duration: 1s;
			animation-timing-function: ease;
			animation-fill-mode: forwards;
		}
		
		&:last-child {
			padding-left: 30px;
			animation-name: fade;
			animation-delay: 2s;
			animation-duration: 1s;
			animation-timing-function: ease;
			animation-fill-mode: forwards;
		}

	}

	.arrow-icon {
		width: 20px;
		margin-left: 3px;
	}
}

@keyframes slideRight {
	from {
		transform: translateX(-100px);
		opacity: 0;
	}

	to {
		transform: translateX(0);
		opacity: 1;
	}
}
	
@keyframes translateBgX {
	from {
		background-position: center 0px;
	}

	to {
		background-position: center -200px;
	}
}
</style>
