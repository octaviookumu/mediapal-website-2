<template>
    <cookie-law buttonText="Accept" :buttonDecline="true">
      <template v-slot:message>
        <p>
          We and our partners use cookies on our website to give you the most relevant experience by remembering your preferences, analyzing site usage and enhancing site navigation. By clicking “Accept”, you consent to the storing of cookies on your device for these purposes. <router-link :to="{ name: 'privacy' }">More information</router-link>
        </p>
      </template>
    </cookie-law>
</template>

<script>
import CookieLaw from 'vue-cookie-law'
    export default {
        name: 'CookiePopUp',
        components: { CookieLaw },
        
    }
</script>

<style lang="scss" scoped>
p{
  font-size: .8rem;
}
</style>