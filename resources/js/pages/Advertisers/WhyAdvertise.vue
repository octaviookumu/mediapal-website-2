<template>
  <section>
    <img
      class="dotted-grid"
      :src="require('../../../assets/images/dotted-grid.png').default"
      alt=""
    />

    <div class="parent">
      <h2>Why advertise with MediaPal Digital Experience Platform</h2>
      <div class="grid">
        <div class="reason">
          <div class="image-div">
            <img
              :src="
                require('../../../assets/images/advertisers-mockup-1.png')
                  .default
              "
              alt=""
            />
          </div>
          <h3>Omnichannel Platform</h3>
          <p>
            Access the world through <br />
            MediaPal
          </p>
        </div>

        <div class="reason">
          <div class="image-div">
            <img
              :src="
                require('../../../assets/images/advertisers-mockup-2.png')
                  .default
              "
              alt=""
            />
          </div>
          <h3>Premium Publishers</h3>
          <p>Get the best local and international publishers on MediaPal</p>
        </div>

        <div class="reason">
          <div class="image-div">
            <img
              :src="
                require('../../../assets/images/advertisers-mockup-3.png')
                  .default
              "
              alt=""
            />
          </div>
          <h3>Data Powered Creatives</h3>
          <p>
            Experience the best Ad creativity on MediaPal that are unique and
            captivating to the users
          </p>
        </div>

        <div class="reason">
          <div class="image-div">
            <img
              :src="
                require('../../../assets/images/advertisers-mockup-4.png')
                  .default
              "
              alt=""
            />
          </div>
          <h3>Precise Audience Targeting</h3>
          <p>
            Take full audience of perspective customers and segment it into
            groups; behaviours, demographics; interests etc
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhyAdvertise",
  mounted() {
    gsap.to(".dotted-grid", {
      x: 100,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: ".dotted-grid",
        start: "top center",
        end: "top 300px",
        scrub: true,
      },
    });
  },
};
</script>

<style lang="scss" scoped>
section {
  position: relative;
  /* border: 1px solid blue; */

  .dotted-grid {
    position: absolute;
    transform: rotate(90deg);
    /* bottom: 2rem; */
    top: -3rem;
    left: 9%;
    width: 2.5rem;
    visibility: hidden;
    /* border: 1px solid red; */

    img {
      width: 100%;
    }
  }
}

.parent {
  /* border: 1px solid black; */
  height: 100vh;
  position: relative;
  text-align: center;

  h2 {
    font-size: 3.2rem !important;
    letter-spacing: 0.1rem;
    margin: 5rem auto 3rem;
    width: 38%;
    /* border: 1px solid blue; */
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
  column-gap: 50px;
  width: 60%;
  margin: auto;
  text-align: center;
}

.reason {
  /* border: 1px solid green; */
  text-align: center;

  h3 {
    font-size: 2.5rem;
    letter-spacing: 0.1rem;
  }

  p {
    width: 80%;
    font-size: 1rem !important;
    margin: auto;
    color: #69a1ab;
  }

  .image-div {
    /* border: 1px solid red; */
    width: 40%;
    margin: auto;

    img {
      width: 100%;
      /* border: 1px solid black; */
    }
  }
}

@media (max-width: 480px) {
  .parent {
    border: 1px solid black;
    height: 100%;
  }

  section {
    height: 100%;

    h2 {
      text-align: center;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    width: 100%;
    margin: auto;
    text-align: center;
  }
}
</style>