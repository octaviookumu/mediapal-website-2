<template>
  <div class="parent">
    <div class="home-landing-page">
      <!-- <div class="scroll-btn-overlay"></div> -->
      <div class="btn-div">
        <img
          class="down-btn"
          :src="require('../../../assets/images/scroll-down-btn.png').default"
          alt=""
        />
        <!-- <span class="ripple"></span> -->
      </div>

      <div class="ripple-line-1"></div>
      <div class="ripple-line-2"></div>
      <div class="ripple-line-3"></div>

      <video
        class="hero-video"
        src="https://demos.mediapal.net/videos/hero/hero.mp4"
        autoplay
        loop
        muted
        playsinline
      >
        <p>Your browser does not support HTML5 video.</p>
      </video>
      <div class="content">
        <h1>ADVERTISING ORCHESTRATED</h1>
        <p>
          Data Driven Omnichannel Programmatic <br />
          Digital Experience Platform with a Global Reach
        </p>
      </div>
    </div>

    <img
      class="sidenav-hamburger"
      :src="require('../../../assets/images/sidenav-hamburger.png').default"
      alt=""
      @click="showSideNav()"
    />

    <img
      class="sidenav-close"
      :src="require('../../../assets/images/sidenav-close.png').default"
      alt=""
      @click="closeSideNav()"
    />

    <div class="side-container">
      <div class="presence">
        <div class="presence-header">
          <h2>MediaPal Presence</h2>
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
          :src="require('../../../assets/images/mediapal-presence.png').default"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeLandingPage",
  mounted() {
    $(function () {
      $(".down-btn").click(function () {
        $("html, body").animate(
          { scrollTop: $(".brand-carousel").offset().top },
          "slow"
        );
        return false;
      });
    });
  },
  methods: {
    showSideNav() {
      let sideNav = document.querySelector(".side-container");
      let sideNavClose = document.querySelector(".sidenav-close");

      sideNav.style.cssText =
        "right: 0 !important; transition: right .7s ease-in-out";
      setTimeout(() => {
        sideNavClose.style.cssText =
          "display: block !important; transition: display .2s ease-in-out;";
      }, 500);
    },
    closeSideNav() {
      let sideNav = document.querySelector(".side-container");
      let sideNavHamburger = document.querySelector(".sidenav-hamburger");
      let sideNavClose = document.querySelector(".sidenav-close");

      sideNav.style.cssText =
        "right: -100% !important; transition: right .7s ease-in-out; ";
      sideNavHamburger.style.cssText =
        "display: block !important; transition: display .7s ease-in-out";
      sideNavClose.style.cssText =
        "display: none !important; transition: display .7s ease-in-out; transition-delay: .2s;";
    },
  },
};
</script>

<style lang="scss" scoped>
.parent {
  height: 100vh;
  position: relative;
  overflow: hidden;

  /* border: 1px solid red; */
}


.hero-video {
  width: 100%;
  height: 90vh;
  object-fit: cover;
  top: 0;
  left: 0;
  /* border-radius: 0% 0% 80% 80%; */
  border-radius: 100%/0 0 25% 25%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -6;
  /* border-bottom-left-radius: 30%;
    border-bottom-right-radius: 30%; */
}

.home-landing-page {
  /* display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center; */

  position: relative;
  /* border: 1px solid black; */
  /* border-radius: 0% 0% 20% 20%; */
  border-radius: 100%/0 0 25% 25%;
  /* border-bottom-left-radius: 30%;
    border-bottom-right-radius: 30%; */
  background: transparent;
  margin-bottom: 3rem;
  height: 90vh;

  .content {
    /* border: 1px solid red; */
    position: absolute;
    width: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    /* left: 10%; */
  }

  h1 {
    font-size: 5rem;
    letter-spacing: 0.8rem;
    color: #fff;
    /* font-weight: 300 !important; */
  }

  p {
    color: #fff;
    /* font-weight: 300; */
    font-size: 1.4rem;
    opacity: 0.8;
  }

 


  .btn-div {
    position: absolute;
    width: 50px;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 11;
  }

  

  .ripple-line-1{
      position: absolute;
    bottom: -2.5rem;
      width: 80px;
    height: 80px;
    border: 2px solid rgb(252, 223, 170);
    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: -7;
    opacity: 0;

    -webkit-animation: ripple-1 2s infinite 2s;
    animation: ripple-1 2s infinite 2s;
    -webkit-transition: transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;

    -webkit-animation-delay: 3s;
  -moz-animation-delay: 3s;
    }

    .ripple-line-2{
      position: absolute;
    bottom: -3.4rem;
      width: 110px;
    height: 110px;
    border: 2px solid rgb(252, 223, 170);
    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: -7;
    opacity: 0;

    -webkit-animation: ripple-1 2s infinite 2s;
    animation: ripple-1 2s infinite 2s;
    -webkit-transition: transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;

    -webkit-animation-delay: 3.2s;
  -moz-animation-delay: 3.2s;
    }

    .ripple-line-3{
      position: absolute;
    bottom: -4.4rem;
      width: 140px;
    height: 140px;
    border: 2px solid rgb(252, 223, 170);
    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: -7;
    opacity: 0;

    -webkit-animation: ripple-1 2s infinite 2s;
    animation: ripple-1 2s infinite 2s;
    -webkit-transition: transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;

    -webkit-animation-delay: 3.4s;
  -moz-animation-delay: 3.4s;
    }

  .down-btn {
    width: 50px;
    padding: 0.5rem;
    left: 50%;
    border-radius: 50%;
    background-color: #02090e;
    cursor: pointer;
    z-index: 11;

    -webkit-animation: bounce 2s infinite 2s;
    animation: bounce 2s infinite 2s;
    -webkit-transition: transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;

    /* .fa-arrow-circle-down{
      fill: orange;
    } */
  }
}


.ripple,
.ripple:before {
  display: block;
  border-radius: 2px;
  z-index: -7;

  width: 2px;
  height: 2px;
  -webkit-animation: rip 2s infinite ease-in-out;
  -moz-animation: rip 2s infinite ease-in-out;
  box-shadow:  transparent;
/* box-shadow: 0 20px 5px 40px rgb(253, 205, 114); */
}

.ripple:after {
  display: block;
  /* border-radius: 2px; */
  /* border-color: red; */
  /* z-index: 4; */

  width: 45px;
  height: 0px;
  /* box-shadow: 0 0 0 0 orange; */
  /* box-shadow: 0 0 5px 20px red; */
  /* -webkit-animation: rip 2s infinite ease-in-out;
  -moz-animation: rip 2s infinite ease-in-out; */
}

.ripple {
  position: absolute;
  z-index: -6;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.ripple:after {
  content: "";
  position: absolute;
}
.ripple:after {
  /* -webkit-animation-delay: 2s;
  -moz-animation-delay: 2s; */
  /* box-shadow: 0 0 0 0 red; */
  /* box-shadow: -22px -28px 0px 30px #001013; */
  top: 0px;
  left: 0px;
  /* border-radius: 20px 20px 0 0; */
  /* bottom: 6px; */
}
.ripple:before {
  content: "";
  position: absolute;
}
.ripple:before {
  -webkit-animation-delay: 2s;
  -moz-animation-delay: 2s;
  top: 0px;
  left: 0px;
}

.sidenav-hamburger {
  position: fixed;
  top: 2rem;
  right: 13%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  z-index: 180;
}

/* @media (max-width: 480px){
  .sidenav-hamburger {
  display: none;
}
} */


// TRY USING media screen and (max...) small
// min width 576px medium
// min width 767px
// min width 992px - large
// min width 1200px

/* @media screen and (min-width: 992px){
  .content{
    h1{
      font-size: 3rem;
    }
  }
} */


@-webkit-keyframes rip {
  0% {
    box-shadow: 0 0 0 0 transparent;
  }
  15% {
    box-shadow: 0 0 0 0 rgb(253, 205, 114);
  }
  100% {
    box-shadow: 0 25px 5px 50px transparent;
  }
}
@-moz-keyframes rip {
  0% {
    box-shadow: 0 0 0 0 transparent;
  }
  15% {
    box-shadow: 0 0 0 0 rgb(253, 205, 114);
  }
  100% {
    box-shadow: 0 25px 5px 50px transparent;
  }
}

@-webkit-keyframes ripple-1 {
  0% {
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes ripple-1 {
  0% {
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/* @keyframes ripple {
  from {
    opacity: 1;
    transform: scale3d(0.75, 0.75, 1);
  }

  to {
    opacity: 0;
    transform: scale3d(1.5, 1.5, 1);
  }
} */

@keyframes bounce {
  0%,
  100%,
  20%,
  50%,
  80% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  60% {
    -webkit-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    transform: translateY(-5px);
  }
}


@media (max-width: 768px){
  .sidenav-hamburger {
  display: none;
}
}

@media (max-width: 480px) {
  /* section {
    background-size: 100% 40%;

    .content {
      text-align: center;
      left: initial;
      transform: initial;
    }
  } */
  .parent {
  height: 90vh;
  position: relative;
  overflow: hidden;
  /* background: red; */

  /* border: 1px solid red; */
}

.hero-video {
  /* display: none; */
  border-radius: 0;
}




.home-landing-page {
  /* display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center; */

  position: relative;
  /* border: 1px solid black; */
  /* border-radius: 0% 0% 20% 20%; */
  border-radius: 100%/0 0 25% 25%;
  /* border-bottom-left-radius: 30%;
    border-bottom-right-radius: 30%; */
  background: transparent;
  margin-bottom: 3rem;
  height: 80vh;
  background: transparent;

  .content {
    /* border: 1px solid red; */
    /* position: absolute; */
    width: 80%;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -65%);
    /* text-align: center; */
    /* border: 1px solid black; */
    /* left: 10%; */
  }

  h1 {
    font-size: 3rem;
    letter-spacing: 0.5rem;
    color: #fff;
    /* font-weight: 300 !important; */
  }

  p {
    color: #fff;
    /* font-weight: 300; */
    font-size: 1rem;
    opacity: 0.8;
    width: 90%;
    margin: 3rem auto 0;

    br{
      display: none;
    }
  }

 


  .btn-div {
    position: absolute;
    width: 60px;
    bottom: -3.5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 11;
  }

  

  .ripple-line-1{
      position: absolute;
    bottom: -2.5rem;
      width: 80px;
    height: 80px;
    border: 2px solid rgb(252, 223, 170);
    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: -7;
    opacity: 0;

    -webkit-animation: ripple-1 2s infinite 2s;
    animation: ripple-1 2s infinite 2s;
    -webkit-transition: transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;

    -webkit-animation-delay: 3s;
  -moz-animation-delay: 3s;
    }

    .ripple-line-2{
      position: absolute;
    bottom: -3.4rem;
      width: 110px;
    height: 110px;
    border: 2px solid rgb(252, 223, 170);
    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: -7;
    opacity: 0;

    -webkit-animation: ripple-1 2s infinite 2s;
    animation: ripple-1 2s infinite 2s;
    -webkit-transition: transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;

    -webkit-animation-delay: 3.2s;
  -moz-animation-delay: 3.2s;
    }

    .ripple-line-3{
      position: absolute;
    bottom: -4.4rem;
      width: 140px;
    height: 140px;
    border: 2px solid rgb(252, 223, 170);
    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: -7;
    opacity: 0;

    -webkit-animation: ripple-1 2s infinite 2s;
    animation: ripple-1 2s infinite 2s;
    -webkit-transition: transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;

    -webkit-animation-delay: 3.4s;
  -moz-animation-delay: 3.4s;
    }

  .down-btn {
    width: 60px;
    padding: 0.5rem;
    left: 50%;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    z-index: 11;

    -webkit-animation: bounce 2s infinite 2s;
    animation: bounce 2s infinite 2s;
    -webkit-transition: transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;
  }
}
}
</style>