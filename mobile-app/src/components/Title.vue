<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  first: {
    type: String,
    default: ''
  },
  last: {
    type: String,
    default: ''
  },
  display: {
    type: String,
    default: 'initial'
  },
  delayFirstTitlePart: {
	type: String,
	default: '1s'
  },
  delaySecondTitlePart: {
	type: String,
	default: '1s'
  },
  
})
</script>

<template>
  <h1>
    <span>
      {{ first }}
    </span>
    <span>
      {{ last }}
    </span>
  </h1>
</template>

<style lang="scss">
$primary: #6c6b6b;
h1 {
	margin-top: 40px;
	margin-bottom: 40px;
	max-width: 300px;
	font-size: 40px;
	font-weight: 400;

	span {
    	display: v-bind(display);
		opacity: 0;

		&:first-child {
			animation-delay: v-bind(delayFirstTitlePart);
			animation-name: fade;
			animation-duration: 1s;
			animation-timing-function: ease;
			animation-fill-mode: forwards;
		}

		&:last-child {
			color: $primary;
			font-weight: 400;
			animation-delay: v-bind(delaySecondTitlePart);
			animation-name: fade;
			animation-duration: 1s;
			animation-timing-function: ease;
			animation-fill-mode: forwards;
		}
	}
}

@keyframes fade {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

</style>