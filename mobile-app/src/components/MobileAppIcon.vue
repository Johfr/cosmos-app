<script setup>
import Logo from '../components/Logo.vue'
</script>

<template>
  <RouterLink to="/">
      <div class="mobile-app-container">
          <div class="logo-border">
              <Logo class="logo" />
          </div>
          <div class="mobile-app-title-container">
              <span>Cosmo</span>
              <span>App</span>
          </div>
      </div>
  </RouterLink>
</template>

<style lang="scss">
$primary: #6c6b6b;
.mobile-app-container {
  display: flex;
  margin-top: 30px;
.logo-border {
  display: flex;
  align-items: center;
  width: 53px;
  height: 53px;
  
  position: relative;
  box-sizing: border-box;

  $border: 1px;
  color: #FFF;
  background: #000;
  background-clip: padding-box;
  border: solid $border transparent;
  border-radius: 15px;

  &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: -$border;
      border-radius: inherit;
      background: linear-gradient(to right, #535252, #444444, #262626);
  }
}
.logo {
    width: 50px;
    height: 50px;
    padding: 5px;
    box-sizing: border-box;
    fill: #fff;
    background-color: #000;
    border-radius: 15px;
    position: relative;
}
.mobile-app-title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    padding-left: 10px;
    font-size: 15px;

    span {
        line-height: 1;
        &:first-child {
            font-weight: 700;
        }
        &:last-child {
            font-weight: 400;
            color: $primary;
        }
      }
  }
}
  </style>