<template>
    <section>
      <div class="content">
        <h1>ADVERTISERS</h1>
        <h2>Reach your audience <br> to precision.</h2>
        <p>Access over 1.5 Billion Profiled Users.</p>
      </div>
    </section>
</template>

<script>
export default {
  name: "AdvertisersLandingPage",
};
</script>

<style lang="scss" scoped>
section {
  /* border: 1px solid black; */
  height: 100vh;
  position: relative;

  background: url("../../../assets/images/advertisers-bg.png");
  background-repeat: no-repeat;
  background-size: cover;

  .content {
    /* border: 1px solid red; */
    top: 40%;
    position: absolute;
    transform: translateY(-40%);
    left: 11%;
    width: 600px;

    h1 {
      font-size: 1.8rem !important;
      color: #257282;
      letter-spacing: 0.3rem;
      text-transform: uppercase;
      /* font-weight: 300 !important; */
    }

    h2 {
      /* font-weight: 100; */
      color: #257282;
      font-size: 6rem !important;
      line-height: 6rem;
      /* border: 1px solid red; */
      max-width: 700px;
      letter-spacing: 0.2rem;
    }
  }
}


@media (max-width: 480px) {
  section {
    background-size: 100% 40%;

    .content {
      text-align: center;
      left: initial;
      transform: initial;
    }
  }
}
</style>