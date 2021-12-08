<template>
    <div>
        <img
      class="sidenav-hamburger"
      :src="require('../../assets/images/sidenav-hamburger.png').default"
      alt=""
      @click="showSideNav()"
    />

    <img
      class="sidenav-close"
      :src="require('../../assets/images/sidenav-close.png').default"
      alt=""
      @click="closeSideNav()"
    />

    <div class="side-container">
      <div class="presence">
        <div class="presence-header">
          <p>MediaPal Presence</p>
          <p>MediaPal runs ads in various markets across the world</p>
        </div>

        <div class="presence-footer">
          <ul>
            <li>Africa</li>
            <li>United States</li>
            <li>Europe</li>
            <li>Asia</li>
            <li>Australia</li>
            <li>Middle East</li>
          </ul>
        </div>

        <img
          :src="require('../../assets/images/mediapal-presence.png').default"
          alt=""
        />
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'MediapalPresence'
    }
</script>

<style lang="scss" scoped>

</style>