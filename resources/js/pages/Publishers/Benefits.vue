<template>
  <section>
    <img
      class="dotted-grid"
      :src="require('../../../assets/images/dotted-grid.png').default"
      alt=""
    />
    <h2>Benefits to Publishers</h2>
    <div class="grid">
      <div class="benefit">
        <div class="image-div">
          <img
            :src="
              require('../../../assets/images/publishers-mockup-1.png').default
            "
            alt=""
          />
        </div>
        <div>
          <h3>Campaign Management</h3>
          </div>
      </div>
      <div class="benefit">
        <div class="image-div">
          <img
            :src="
              require('../../../assets/images/publishers-mockup-2.png').default
            "
            alt=""
          />
        </div>
        <div>
          <h3>Detailed Reporting</h3>
          </div>
      </div>
      <div class="benefit">
        <div class="image-div">
          <img
            :src="
              require('../../../assets/images/publishers-mockup-3.png').default
            "
            alt=""
          />
        </div>
        <div><h3>Creative Studio</h3></div>
      </div>
      <div class="benefit">
        <div class="image-div">
          <img
            :src="
              require('../../../assets/images/publishers-mockup-4.png').default
            "
            alt=""
          />
        </div>
        <div><h3>User Friendly UI/UX</h3></div>
      </div>
      <div class="benefit">
        <div class="image-div">
          <img
            :src="
              require('../../../assets/images/publishers-mockup-5.png').default
            "
            alt=""
          />
        </div>
        <div><h3>Increased Revenue</h3></div>
      </div>
      <div class="benefit">
        <div class="image-div">
          <img
            :src="
              require('../../../assets/images/publishers-mockup-6.png').default
            "
            alt=""
          />
        </div>
        <div><h3>Ad Yield Optimization</h3></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Benefits",
};
</script>

<style lang="scss" scoped>
section {
  /* border: 1px solid black; */
  position: relative;
  text-align: center;
  padding: 3rem 0;

  h2 {
    font-size: 3rem;
    letter-spacing: .1rem;
    margin: 2rem;
  }

  .dotted-grid {
    position: absolute;
    transform: rotate(90deg);
    /* bottom: 2rem; */
    top: -2.9rem;
    left: 17%;
    width: 2.5rem;
    /* border: 1px solid red; */
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* gap: 50px; */
  column-gap: 40px;
  row-gap: 50px;
  width: 60%;
  margin: auto;
  text-align: center;
  /* border: 1px solid red; */
}

.benefit {
  /* border: 1px solid green; */

  h3{
    font-size: 2.4rem !important;
    letter-spacing: .1rem;
  }

  .image-div {
    /* border: 1px solid red; */

    img {
      width: 60%;
      /* border: 1px solid black; */
    }
  }
}

@media (max-width: 480px) {
  section {
    /* border: 1px solid black; */
    height: 100%;
    /* position: relative; */

    h2 {
      text-align: center;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
    width: 90%;
    margin: auto;
    text-align: center;
  }
}
</style>