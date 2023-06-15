<script setup>
import { ref, defineProps } from 'vue'
import RightArrow from '../components/RightArrow.vue'
import SearchIcon from './SearchIcon.vue'
import BurgerMenu from './BurgerMenu.vue'

const navbarMenuLinks = [
  {
    name: 'Home',
    route: '/'
  },
  {
    name: 'Planets',
    route: '/'
  },
  {
    name: 'Asteroids',
    route: '/'
  },
  {
    name: 'Comets',
    route: '/'
  },
  {
    name: 'Meteors',
    route: '/'
  },
  {
    name: 'Milky Way',
    route: '/'
  },
]
const showMenuBar = ref(false)
</script>

<template>
  <nav class="navbar">
    <div class="user-info">
      <div class="user-image rounded-bordered">
        <img src="../assets/hendrix.jpg" alt="user picture" />
      </div>
      <p>
        <RouterLink to="/" title="back to home" >
          <span>
            Hey
          </span>
          <span>
            Jimmy
          </span>
        </RouterLink>
      </p>
    </div>

    <div class="menu-container">
      <div class="search rounded-bordered">
        <SearchIcon />
      </div>
      <div class="menu rounded-bordered" @click="showMenuBar = !showMenuBar">
        <BurgerMenu />
      </div>
    </div>

    <div class="overlay" @click="showMenuBar = !showMenuBar" :class="{show : showMenuBar}" v-if="showMenuBar" />
    <div class="menu-links-container container" :class="{show : showMenuBar}" >
      <!-- <h2>Menu</h2> -->
      <ul class="menu-list" v-if="showMenuBar">
        <li class="menu-item" v-for="link in navbarMenuLinks" :key="link.id">
          <RouterLink :to="link.route">
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
$primary: #6c6b6b;
$buttonGradient1: #535252;
$buttonGradient2: #444444;
$buttonGradient3: #262626;

.rounded-bordered {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid $buttonGradient1;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user-info {
  display: flex;
  align-items: center;
  .user-image {
    width: 40px;
    height: 40px;
    object-fit: cover;

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }

  p {
    margin-left: 10px;
    span {
      &:first-child {
        font-weight: 100;
      }
      &:last-child {
        font-weight: 300;
      }
    }
  }
}

.menu-container {
  display: flex;

  svg {
    width: 18px;
    height: 18px;
    path {
      fill: rgba(255, 255, 255, 0.7)
    }
  }
  
  .search {
    margin-right: 5px;
  }

  .search, .menu {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
}

.overlay {
  display: none;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0, .5);

  &.show {
    display: block;
  }
}
.menu-links-container {
  width: 80%;
  height: 100vh;
  position: absolute;
  right: -80%;
  top: 0;
  bottom: 0;
  transition: .4s ease;
  background-color: $buttonGradient3;
  z-index: 2;

  // h2 {
  //   font-size: 4rem;
  //   margin-top: 0;
  //   // margin-bottom: 0;
  //   font-weight: 100;
  // }
  .menu-list {
    padding-top: 10vh;
  }

  .menu-item {
    font-size: 2rem;
    margin-bottom: 15px;
    font-family: 'Gasoek One', sans-serif;
    letter-spacing: 3px;
    opacity: 0;

    @for $i from 1 through 6 {
      &:nth-child(#{$i}) {
        animation-name: slideLeft;
        animation-delay: #{$i * 0.2}s;
        animation-duration: 1s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
      }
    }
  }

  &.show {
    right: 0;
  }
}
</style>