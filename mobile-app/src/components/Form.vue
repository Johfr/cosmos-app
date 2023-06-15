<script setup>
import { ref, defineProps } from 'vue'
import Logo from '../components/Logo.vue'

const props = defineProps({
  type: {
    type: String,
    default: 'link'
  },
  content: {
    type: String,
    default: ''
  },
  animationDelay: {
    type: String,
    default: '3s'
  }
})
</script>

<template>
  <form class="form-container">    
    <input type="email" class="input-empty" placeholder="Email" autocomplete="current-email">
    <input type="password" class="input-empty" placeholder="Password" autocomplete="current-password">
  </form>
</template>

<style lang="scss">
$buttonGradient1: #535252;
$buttonGradient2: #444444;
$buttonGradient3: #262626;
.form-container {
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 15px;
	text-align: center;

	.input-empty {
    height: 40px;
    padding-left: 10px;
    background: unset;
    color: #fff;
		// background: linear-gradient(to right, $buttonGradient1, $buttonGradient2, $buttonGradient3);
		box-shadow: 0px 0px 1px 2px $buttonGradient3;
		border: unset;
    border-radius: 8px;
		opacity: 0;

    &:first-child {
      animation-name: slideLeft;
      animation-delay: 1s;
      animation-duration: .6s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
    }

    &:last-child {
      animation-name: slideRight;
      animation-delay: 1s;
      animation-duration: .6s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
    }

    &:not(:first-child) {
      margin-top: 20px;
    }
	}
}


</style>