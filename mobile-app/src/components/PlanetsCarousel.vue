<script setup>
import { ref, defineProps } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import RightArrow from '../components/RightArrow.vue'

const planets = [
  {
    name: "Mercury",
    description: "Small rocky planet",
    img: "src/assets/planets/mercury.png",
  },
  {
    name: "Venus",
    description: "Dense and hot atmosphere",
    img: "src/assets/planets/venus.png",
  },
  {
    name: "Earth",
    description: "Our inhabited planet",
    img: "src/assets/planets/earth.png",
  },
  {
    name: "Mars",
    description: "Terrestrial Planet",
    img: "src/assets/planets/mars.png",
  },
  {
    name: "Jupiter",
    description: "Largest gas giant",
    img: "src/assets/planets/jupiter.png",
  },
  {
    name: "Saturn",
    description: "Impressive rings, gaseous atmosphere",
    img: "src/assets/planets/saturn.png",
  },
  {
    name: "Uranus",
    description: "Icy, tilted planet",
    img: "src/assets/planets/uranus.png",
  },
  {
    name: "Neptune",
    description: "Blue planet, strong winds",
    img: "src/assets/planets/neptune.png",
  },
]

const learnMore =  [
  {
    title: "Explore in more detail",
    content: "Asteroids, comets & meteors"
  },
  {
    title: "Learn new about",
    content: "Moons"
  }
]

const currentPlanet = ref(0)

const handleSlide = (data) => {
  currentPlanet.value = data.currentSlideIndex
}
</script>

<template>
  <section class="planets-carousel">
    <h1>Planets</h1>

    <div class="planets-carousel-container">
      <carousel :items-to-show="3" wrapAround @slide-end="handleSlide">
        <slide v-for="planet in planets" :key="planet">
          <RouterLink :to="{name : 'Planet', params: { id: planet.name}, query: {name: planet.name, description: planet.description}}">
          <!-- <div @click="$router.push({ path: 'planets/' + planet.name, params: { id: planet.name, img: planet.img, description: planet.description }, props: {planet}, meta: {planet: planet} })"> -->
            <img :src="planet.img" :alt="'image of ' + planet.name" />
          <!-- </div> -->
          </RouterLink>
        </slide>
      </carousel>
    </div>
    
    <div class="planet-detail_container">
      <p class="planet-title">
        <span>
          {{ planets[currentPlanet].name }}
        </span>
        <span>
          {{ planets[currentPlanet].description }}
        </span>
      </p>
      <ul class="list">
        <li class="item" v-for="(detail, detailIndex) in learnMore" :key="detailIndex">
          <p>
            {{ detail.title }}
          </p>
          <p>
            {{ detail.content }}
          </p>
          <RightArrow class="arrow-icon" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
$primary: #6c6b6b;
$buttonGradient1: #535252;
$buttonGradient2: #444444;
$buttonGradient3: #262626;

.planets-carousel {
	margin-top: 4vh;
  opacity: 0;
  animation-name: fade;
  animation-delay: 2.5s;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;

  h1 {
    font-size: 1.6rem;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 300;
  }
}

.planet-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;

  span {
    &:first-child {
      font-size: 1.5rem;
      font-weight: 400;
    }
    &:last-child {
      font-size: .7rem;
      font-weight: 100;
    }
  }
}

.planets-carousel-container {
  margin-left: -30px;
  margin-right: -30px;

  ol {
    height: 172px;
  }
  img {
    width: auto;
    height: 80px;
    transition: .4s ease;
  }
  .carousel__slide--active {
    img {
      width: auto;
      height: 160px;
    }
  }
}

.list {
  margin-top: 30px;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid $buttonGradient3;

  p {
    margin-top: 5px;
    margin-bottom: 5px;
    &:first-child {
      min-width: 50%;
      font-size: .7rem;
      font-weight: 100;
    }
    &:nth-child(2) {
      min-width: 33%;
      max-width: 33%;
      font-size: .8rem;
      font-weight: 400;
    }
  }

  .arrow-icon {
    margin-top: 10px;
  }
}

</style>