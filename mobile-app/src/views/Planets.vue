<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import BackButton from '../components/BackButton.vue'
import RightArrow from '../components/RightArrow.vue'

const route = useRoute()

const planet = route.query
let animationFinished = ref(false)
const timer = setTimeout(() => animationFinished.value = true, 2000)
let animationFinished2 = ref(false)
const timer2 = setTimeout(() => animationFinished2.value = true, 5000)

const planetInfos = {
	mercury: {
		distanceText: 'Distance from Earth',
		distanceValue: '8.2446e-12 Earth Years',
		place: 'Mercury is the first planet from sun',
		AdjectivesText: 'Adjectives',
		AdjectivesValue: 'Mercurian',
		aphelion: 'Aphelion',
		aphelionValue: '249261000',
		eccentricity: 'Eccentricity',
		eccentricityValue: '0.0934',
	},
	venus: {
		distanceText: 'Distance from Earth',
		distanceValue: '4.33 Earth Years',
		place: 'Venus is the second planet from sun',
		AdjectivesText: 'Adjectives',
		AdjectivesValue: 'Venusian',
		aphelion: 'Aphelion',
		aphelionValue: '108939000',
		eccentricity: 'Eccentricity',
		eccentricityValue: '0.0068',
	},
	earth: {
		distanceText: 'Distance from Earth',
		distanceValue: '0 Earth Years',
		place: 'Earth is the third planet from sun',
		AdjectivesText: 'Adjectives',
		AdjectivesValue: 'Earthly',
		aphelion: 'Aphelion',
		aphelionValue: '152100000',
		eccentricity: 'Eccentricity',
		eccentricityValue: '0.0167',
	},
	mars: {
		distanceText: 'Distance from Earth',
		distanceValue: '8.2446e-12 Earth Years',
		place: 'Mars is the fourth planet from sun',
		AdjectivesText: 'Adjectives',
		AdjectivesValue: 'Marsian',
		aphelion: 'Aphelion',
		aphelionValue: '249261000',
		eccentricity: 'Eccentricity',
		eccentricityValue: '0.0934',
	},
	jupiter: {
		distanceText: 'Distance from Earth',
		distanceValue: '8.2446e-12 Earth Years',
		place: 'Jupiter is the Fifth planet from sun',
		AdjectivesText: 'Adjectives',
		AdjectivesValue: 'Marsian',
		aphelion: 'Aphelion',
		aphelionValue: '249261000',
		eccentricity: 'Eccentricity',
		eccentricityValue: '0.0934',
	},
	saturn: {
		distanceText: 'Distance from Earth',
		distanceValue: '8.2446e-12 Earth Years',
		place: 'Saturn is the Sixth planet from sun',
		AdjectivesText: 'Adjectives',
		AdjectivesValue: 'Marsian',
		aphelion: 'Aphelion',
		aphelionValue: '249261000',
		eccentricity: 'Eccentricity',
		eccentricityValue: '0.0934',
	},
	uranus: {
		distanceText: 'Distance from Earth',
		distanceValue: '8.2446e-12 Earth Years',
		place: 'Uranus is the Seventh planet from sun',
		AdjectivesText: 'Adjectives',
		AdjectivesValue: 'Marsian',
		aphelion: 'Aphelion',
		aphelionValue: '249261000',
		eccentricity: 'Eccentricity',
		eccentricityValue: '0.0934',
	},
	neptune: {
		distanceText: 'Distance from Earth',
		distanceValue: '8.2446e-12 Earth Years',
		place: 'Neptune is the Eighth planet from sun',
		AdjectivesText: 'Adjectives',
		AdjectivesValue: 'Marsian',
		aphelion: 'Aphelion',
		aphelionValue: '249261000',
		eccentricity: 'Eccentricity',
		eccentricityValue: '0.0934',
	}
}
</script>

<template>
	<div class="container position-relative">
		<div class="button-container" @click="$router.back()">
			<BackButton class="back-button" />
		</div>

		<p class="planet-title">
			<span>
				{{ planet.name }}
			</span>
			<span>
				{{ planet.description }}
			</span>
		</p>

		<div
			:class="['home-background', planet.name.toLowerCase(), { normal: animationFinished, resize: animationFinished2 }]" />

		<div class="planet-info" v-if="animationFinished2">
			<div class="distance-container">
				<p>{{ planetInfos[planet.name.toLowerCase()].distanceText }}</p>
				<p>{{ planetInfos[planet.name.toLowerCase()].distanceValue }}</p>
			</div>
			<div class="planet-position-container">
				<p>{{ planetInfos[planet.name.toLowerCase()].place }}</p>
				<RouterLink to="/">
					Visit
					<RightArrow class="arrow-icon" />
				</RouterLink>
			</div>
			<ul class="planet-descriptif-container">
				<li>
					<p>{{ planetInfos[planet.name.toLowerCase()].AdjectivesText }}</p>
					<p>{{ planetInfos[planet.name.toLowerCase()].AdjectivesValue }}</p>
				</li>
				<li>
					<p>{{ planetInfos[planet.name.toLowerCase()].aphelion }}</p>
					<p>{{ planetInfos[planet.name.toLowerCase()].aphelionValue }}</p>
				</li>
				<li>
					<p>{{ planetInfos[planet.name.toLowerCase()].eccentricity }}</p>
					<p>{{ planetInfos[planet.name.toLowerCase()].eccentricityValue }}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped>
$buttonGradient1: #535252;
$buttonGradient2: #444444;
$buttonGradient3: #262626;

.button-container {
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	padding: 15px;
	background-color: $buttonGradient3;
	cursor: pointer;

	.back-button {
		fill: #fff;
		width: 7px;
	}
}

.planet-title {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-top: 20px;
	line-height: 1;

	span {
		&:first-child {
			font-size: 3rem;
			font-weight: 400;
		}

		&:last-child {
			font-size: 1.2rem;
			font-weight: 100;
		}
	}
}

.container {
	height: 100vh;
}

.home-background {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	height: 90vh;
	height: 1000px;
	width: 1000px;

	background-size: 1000px;
	background-repeat: no-repeat;
	background-position: center 0;
	animation-name: translateBgX;
	animation-duration: 5s;
	animation-fill-mode: forwards;
	transition: 3s;
		background-size: cover;

	&.normal {
		height: 300px;
		width: 300px;
		left: 0;
		right: 0;
		margin: 0 auto;
		transform: unset;
	}

	&.resize {
		animation-name: rotate;
		animation-duration: 60s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		transition: 3s;
		position: static; // important
	}

	&.mercury {
		background-image: url('../assets/planets/mercury.png');
	}

	&.neptune {
		background-image: url('../assets/planets/neptune.png');
	}

	&.mars {
		background-image: url('../assets/planets/mars.png');
	}

	&.earth {
		background-image: url('../assets/planets/earth.png');
	}

	&.venus {
		background-image: url('../assets/planets/venus.png');
	}

	&.saturn {
		background-image: url('../assets/planets/saturn.png');
		animation: unset;
	}

	&.jupiter {
		background-image: url('../assets/planets/jupiter.png');
	}

	&.uranus {
		background-image: url('../assets/planets/uranus.png');
	}
}

@keyframes translateBgX {
	from {
		background-position: center 200px;
	}

	to {
		background-position: top 0px;
	}
}

.planet-info {
	margin-top: 30px;
	animation-name: fade;
	animation-duration: 2s;
	transition: 3s;
}

.distance-container {
	padding-bottom: 10px;
	border-bottom: 1px solid $buttonGradient1;
	p {
		margin-top: 0;
		margin-bottom: 0;
		&:first-child {
			font-size: .8rem;
			font-weight: 400;
			color: $buttonGradient1;
		}

		&:last-child {
			font-size: .9rem;
			font-weight: 400;
		}
	}
}

.planet-position-container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	p {
		max-width: 33%;
		font-size: .8rem;
		font-weight: 300;
	}
	a {
		font-size: .8rem;
		font-weight: 300;
	}
}

.planet-descriptif-container {
	display: flex;
	justify-content: space-between;
	gap: 8px;
	margin-top: 30px;
	li {
		width: 100%;
		p {
			
			&:first-child {
				margin-top: 0;
				margin-bottom: 0;
				padding-left: 5px;
				font-size: .7rem;
				font-weight: 400;
				color: $buttonGradient1;
			}

			&:last-child {
				margin-top: 5px;
				padding: 5px 10px;
				border-radius: 8px;
				font-size: .9rem;
				font-weight: 400;
				background: linear-gradient(to bottom, #000, $buttonGradient3);
			}
		}
	}
}
</style>
