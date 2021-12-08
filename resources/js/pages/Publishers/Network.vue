<template>
  <div class="parent">
    <h2>Publishers, Apps and Games in our network</h2>
    <div class="logo-rows">
      <div class="logo-row row-1">
        <div class="logo-div">
          <img
            :src="
              require('../../../assets/images/publishers-logo-1.png').default
            "
            alt=""
          />
        </div>
        <div class="logo-div">
          <img
            :src="
              require('../../../assets/images/publishers-logo-2.png').default
            "
            alt=""
          />
        </div>
        <div class="logo-div">
          <img
            :src="
              require('../../../assets/images/publishers-logo-3.png').default
            "
            alt=""
          />
        </div>
        <div class="logo-div">
          <img
            :src="
              require('../../../assets/images/publishers-logo-4.png').default
            "
            alt=""
          />
        </div>
        <div class="logo-div">
          <img
            :src="
              require('../../../assets/images/publishers-logo-5.png').default
            "
            alt=""
          />
        </div>
        <div class="logo-div">
          <img
            :src="
              require('../../../assets/images/publishers-logo-6.png').default
            "
            alt=""
          />
        </div>
      </div>
      <div class="logo-row row-2">
        <div class="logo-div">
          <img
            :src="
              require('../../../assets/images/publishers-logo-7.png').default
            "
            alt=""
          />
        </div>
        <div class="logo-div">
          <img
            :src="
              require('../../../assets/images/publishers-logo-8.png').default
            "
            alt=""
          />
        </div>
        <div class="logo-div">
          <img
            :src="
              require('../../../assets/images/publishers-logo-9.png').default
            "
            alt=""
          />
        </div>
        <div class="logo-div">
          <img
            :src="
              require('../../../assets/images/publishers-logo-10.png').default
            "
            alt=""
          />
        </div>
      </div>
      <div class="logo-row row-3">
        <div class="logo-div">
          <img
            :src="
              require('../../../assets/images/publishers-logo-11.png').default
            "
            alt=""
          />
        </div>
        <div class="logo-div">
          <img
            :src="
              require('../../../assets/images/publishers-logo-12.png').default
            "
            alt=""
          />
        </div>
        <div class="logo-div">
          <img
            :src="
              require('../../../assets/images/publishers-logo-13.png').default
            "
            alt=""
          />
        </div>
        <div class="logo-div">
          <img
            :src="
              require('../../../assets/images/publishers-logo-14.png').default
            "
            alt=""
          />
        </div>
        <div class="logo-div">
          <img
            :src="
              require('../../../assets/images/publishers-logo-15.png').default
            "
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Network",
};
</script>

<style lang="scss" scoped>
.parent {
  padding: 6rem 0;
  background: #ecf4f6;

  h2 {
    text-align: center;
    font-size: 3rem;
    letter-spacing: 0.2rem;
  }

  .logo-rows {
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */

    .logo-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin: 3rem auto;

      .logo-div {
        img {
          width: 70%;
          margin: 0 auto;
          display: block;
          /* border: 1px solid blue; */
        }
      }
    }

    .row-1 {
      width: 70%;
    }

    .row-2 {
      width: 70%;
    }

    .row-3 {
      width: 65%;
    }
  }
}

@media (max-width: 480px) {
  .parent {
    .logo-rows {
      .logo-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin: 1rem auto;

        .logo-div {
          img {
            width: 100%;
            /* margin: 0 auto; */
            display: block;
            /* border: 1px solid blue; */
          }
        }
      }

      .row-1 {
        width: 100%;
      }

      .row-2 {
        width: 80%;
      }

      .row-3 {
        width: 75%;
      }
    }
  }
}
</style>