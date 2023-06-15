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
  LinkTo: {
    type: String,
    default: '/'
  },
  animationDelay: {
    type: String,
    default: '3s'
  }
})
</script>

<template>
  <div class="btns-container">    
    <button class="btn" v-if="type === 'fill'">
      <RouterLink :to="LinkTo">
        {{ content }}
      </RouterLink>
    </button>

    <button :class="['btn', { 'btn-empty': type === 'empty'}]" v-if="type === 'empty'">
      <RouterLink :to="LinkTo">
        {{ content }}
      </RouterLink>
    </button>

    <RouterLink :to="LinkTo" v-else-if="type === 'link'">
      {{ content }}
    </RouterLink>
  </div>
</template>

<style lang="scss">
$buttonGradient1: #535252;
$buttonGradient2: #444444;
$buttonGradient3: #262626;
.btns-container {
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 15px;
	text-align: center;

	.btn {
		color: #fff;
		background: linear-gradient(to right, $buttonGradient1, $buttonGradient2, $buttonGradient3);
		box-shadow: 0px 0px 0px 2px $buttonGradient3;
		border: unset;
		opacity: 0;
		animation-name: slideUp;
		animation-delay: v-bind(animationDelay);
		animation-duration: .6s;
		animation-timing-function: ease;
		animation-fill-mode: forwards;

		& > a {
			display: block;
			width: 100%;
			height: 100%;
			font-weight: 300;
      animation: unset;
      opacity: 1;
		}

    &.btn-empty {
      background: unset;
      color: #fff;

      & > a {
        display: block;
        width: 100%;
        height: 100%;
        font-weight: 300;
        animation: unset;
        opacity: 1;
      }
    }
	}

	@keyframes slideUp {
		from {
			transform: translateY(100px);
			opacity: 0;
		}

		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
}

a {
  color: #fff;
  opacity: 0;
  animation-name: slideUp;
  animation-delay: v-bind(animationDelay);
  animation-duration: .6s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

</style>