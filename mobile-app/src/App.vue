<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <main>
    <router-view v-slot="{Component}">
      <Transition name="fade" mode="out-in" >
        <component :is="Component" :key="$route.path"></component>
      </Transition>
    </router-view>
  </main>
</template>

<style>
  button {
    color: #fff;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
