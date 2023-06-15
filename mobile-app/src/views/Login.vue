<script setup>
import MobileAppIcon from '../components/MobileAppIcon.vue';
import Buttons from '../components/Buttons.vue';
import Title from '../components/Title.vue';
import Form from '../components/Form.vue';
</script>

<template>
	<div class="container">
        <MobileAppIcon />
        <Title first="Welcome" last ="Back" display="block" delayFirstTitlePart=".5s" delaySecondTitlePart="1s" />
        <Form />
        <div class="login_buttons-container">
            <Buttons type="fill" content="Sign In" animationDelay="1s" LinkTo="landing" />
            <Buttons type="empty" content="Face Id" animationDelay="1.5s" LinkTo="/" />
            <Buttons type="link" content="I don't have an account" animationDelay="2s" LinkTo="/" />
        </div>
	</div>
</template>

<style lang="scss" scoped>
.login_buttons-container {
    width: 360px;
    margin: 0 auto;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 50px;
}
</style>
