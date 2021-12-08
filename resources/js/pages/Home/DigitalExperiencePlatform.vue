<template>
  <div class="parent">
    <div class="child">
      <div class="content">
        <h2>Digital Experience Platform</h2>
        <p>
          MediaPal DXP harmonies the power of the Demand Side, Data Management Platforms to achieve campaign objectives impacting return on Ad spend for brands and Supply Side which enables publishers to better yield and monetize their inventory.
        </p>
      </div>

      <div class="image-div">
        <img
          :src="
            require('../../../assets/images/mediapal-ecosystem.png').default
          "
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DigitalExperiencePlatform",
};
</script>

<style lang="scss" scoped>
.parent {
  /* border: 2px solid black; */
  /* padding: 3rem 0 2rem 0; */
}

.child {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  /* padding: 2rem 0 0 0; */
  /* border: 2px solid blue; */

  .content {
    /* margin: 2rem 0; */
    width: 56%;
    margin: 5rem auto 3rem auto;
    /* border: 1px solid red; */

    h2 {
      font-size: 3rem;
      letter-spacing: 0.1rem;
      /* color: #ecf4f6; */
      /* margin: 3rem 1rem 1rem 1rem; */
    }

    p {
      text-align: center;

      margin: 0 auto;
    }
  }
}

.image-div {
  width: 50%;
  /* border: 1px solid red; */
  margin: auto;

  img {
    width: 100%;
    display: block;
    /* border: 1px solid blue; */
  }
}

@media (max-width: 480px) {
  .child {
    width: 90%;
    margin: 3rem auto 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    /* padding: 2rem 0 0 0; */
    /* border: 2px solid blue; */

    .content {
      /* margin: 2rem 0; */
      width: 100%;
      margin: 0 auto 2rem;
      text-align: center;
      /* border: 1px solid red; */

      h2 {
        font-size: 2.5rem;
        letter-spacing: 0.15rem;
        /* border: 1px solid red; */
      }

      p {
        font-size: 0.8rem;
        width: 100%;
        /* border: 1px solid blue; */
        margin: auto;
      }
    }
  }

  .image-div {
    width: 100%;
    /* border: 1px solid green; */
    margin: auto;
  }
}
</style>