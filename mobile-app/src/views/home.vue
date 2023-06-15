<script setup>
import MobileAppIcon from '../components/MobileAppIcon.vue'
import Title from '../components/Title.vue'
import Buttons from '../components/Buttons.vue'
</script>

<template>
	<div>
		<div class="home-background" />
		<div class="container">
			<MobileAppIcon />
			<Title first="Your personal guide" last =" to the universe" delayFirstTitlePart=".5s" delaySecondTitlePart="1s" />

			<div class="login_buttons-container">
				<Buttons type="fill" content="Get Started" animationDelay="2s" LinkTo="/landing" />
				<Buttons type="link" content="I already have an account" animationDelay="2.5s" LinkTo="/landing" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>

.home-background {
	height: 40vh;
	background-image: url('../assets/bg-1.jpg');
	background-position: center 0;
	animation-name: translateBgX;
	animation-duration: 8s;
	animation-fill-mode: forwards;
}

.login_buttons-container {
	width: 360px;
	margin: 0 auto;
	position: absolute;
	right: 0;
	left: 0;
	bottom: 50px;
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
