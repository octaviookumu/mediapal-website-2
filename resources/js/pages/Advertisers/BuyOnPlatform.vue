<template>
  <div class="parent">

    <div class="img-div">
      <img
      :src="require('../../../assets/images/advertisers-mockup-6.png').default"
      alt=""
    />
    </div>
    
    <img
      class="dotted-grid dotted-3"
      :src="require('../../../assets/images/dotted-grid.png').default"
      alt=""
    />
    <div class="content">
      <div class="content-section">
        <h2>How to buy on the platform</h2>
        <div class="cards">
            <p>Self-serve</p>
            <p>Managed Service</p>
        </div>
      </div>

      <div class="content-section">
        <h2>Inventory Access</h2>
        <div class="cards">
            <p>Private Marketplace</p>
            <p>Open Auction</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "BuyOnPlatform",
  mounted(){
    this.triggerAnimations()
  },
  methods:{
    triggerAnimations() {
      gsap.to(".dotted-3", {
        x: 20,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".dotted-3",
          start: "top center",
          end: "top 300px",
          scrub: true,
        },
      });
    },
  }
};
</script>

<style lang="scss" scoped>
.parent {
  position: relative;
  /* display: flex; */
  /* height: 90vh; */
  /* flex-direction: column;
  align-items: center;
  justify-content: center; */
  /* border: 1px solid red; */
  padding: 6rem 0;

  /* background: url("../../../assets/images/advertisers-mockup-6.png");
  background-repeat: no-repeat;
  background-size: contain; */

  h2{
    font-size: 3rem;
  }

  .img-div {
    position: absolute;
    z-index: -1;
    width: 25%;
    height: 70%;
    top: 0;
    left: 0;
    /* border: 1px solid black; */
    /* object-fit: cover; */

    img{
      width: 100%;
      height: 100%;
    }
  }

  .dotted-grid {
    position: absolute;
    transform: rotate(90deg);
    /* bottom: 2rem; */
    top: 58%;
    left: 10%;
    width: 2.5rem;
    visibility: hidden;
    /* border: 1px solid red; */
  }

  .content{
    width: 65%;
    margin: 0 15% 0 25%;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .content-section{
      /* border: 1px solid black; */
      width: 50%;

      h2{
        text-align: center;
        letter-spacing: .1rem;
      }

      &:last-of-type{
        margin-top: 1rem;
      }
    }

    .cards{
      display: flex;
      align-items: center;
      justify-content: space-around;
      /* border: 1px solid blue; */
      /* width: 100%; */
      /* border: 1px solid red; */
      

      p{
        flex-basis: 50%;
        padding: 1rem 1rem;
        text-align: center;
        font-family: "brigadiersansregular" !important;
        font-size: 1.9rem !important;
        letter-spacing: .1rem;

        border: 1px solid lightgrey;
    border-radius: 5px;
    background-color: #fff;

        &:first-of-type{
          margin-right: 1rem;
        }
        
      }
    }
  }
}


</style>