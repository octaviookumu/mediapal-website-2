<template>
  <div style="margin-top: -14%">
    <section id="case-study">
      <!-- <img
        class="dotted-grid"
        :src="require('../../assets/images/dotted-grid.png').default"
        alt=""
      /> -->
      <div class="container vertical-tabs">
        <div class="row">
          <div class="col-md-4 nav-container">
            <p class="nav-container-heading">Format</p>
            <div
              class="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <div
                class="nav-link active"
                id="v-pills-one-tab"
                data-toggle="pill"
                href="#v-pills-one"
                role="tab"
                aria-controls="v-pills-one"
                aria-selected="true"
              >
                <div class="card-content">
                  <div class="card-text">
                    <p class="tag-title">Lead Generation</p>
                  </div>
                </div>
              </div>
              <div
                class="nav-link"
                id="v-pills-two-tab"
                data-toggle="pill"
                href="#v-pills-two"
                role="tab"
                aria-controls="v-pills-two"
                aria-selected="false"
              >
                <div class="card-content">
                  <div class="card-text">
                    <p class="tag-title">Rich media</p>
                  </div>
                </div>
              </div>
              <div
                class="nav-link"
                id="v-pills-three-tab"
                data-toggle="pill"
                href="#v-pills-three"
                role="tab"
                aria-controls="v-pills-three"
                aria-selected="false"
              >
                <div class="card-content">
                  <div class="card-text">
                    <p class="tag-title">Animated</p>
                  </div>
                </div>
              </div>

              <div
                class="nav-link"
                id="v-pills-four-tab"
                data-toggle="pill"
                href="#v-pills-four"
                role="tab"
                aria-controls="v-pills-four"
                aria-selected="false"
              >
                <div class="card-content">
                  <div class="card-text">
                    <p class="tag-title">Interactive</p>
                  </div>
                </div>
              </div>
              <div
                class="nav-link"
                id="v-pills-five-tab"
                data-toggle="pill"
                href="#v-pills-five"
                role="tab"
                aria-controls="v-pills-five"
                aria-selected="false"
              >
                <div class="card-content">
                  <div class="card-text">
                    <p class="tag-title">Ad commerce</p>
                  </div>
                </div>
              </div>
              <div
                class="nav-link"
                id="v-pills-six-tab"
                data-toggle="pill"
                href="#v-pills-six"
                role="tab"
                aria-controls="v-pills-six"
                aria-selected="false"
              >
                <div class="card-content">
                  <div class="card-text">
                    <p class="tag-title">Brand Button Outstream</p>
                  </div>
                </div>
              </div>
              <div
                class="nav-link"
                id="v-pills-seven-tab"
                data-toggle="pill"
                href="#v-pills-seven"
                role="tab"
                aria-controls="v-pills-seven"
                aria-selected="false"
              >
                <div class="card-content">
                  <div class="card-text">
                    <p class="tag-title">Video</p>
                  </div>
                </div>
              </div>
              <div
                class="nav-link"
                id="v-pills-eight-tab"
                data-toggle="pill"
                href="#v-pills-eight"
                role="tab"
                aria-controls="v-pills-eight"
                aria-selected="false"
              >
                <div class="card-content">
                  <div class="card-text">
                    <p class="tag-title">Audio</p>
                  </div>
                </div>
              </div>
              <div
                class="nav-link"
                id="v-pills-nine-tab"
                data-toggle="pill"
                href="#v-pills-nine"
                role="tab"
                aria-controls="v-pills-nine"
                aria-selected="false"
              >
                <div class="card-content">
                  <div class="card-text">
                    <p class="tag-title">Gamification</p>
                  </div>
                </div>
              </div>
              <div
                class="nav-link"
                id="v-pills-ten-tab"
                data-toggle="pill"
                href="#v-pills-ten"
                role="tab"
                aria-controls="v-pills-ten"
                aria-selected="false"
              >
                <div class="card-content">
                  <div class="card-text">
                    <p class="tag-title">Native</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 image-container">
            <div class="tab-content iphone-x" id="v-pills-tabContent">
              <!-- <img class="mediapal-logo" :src="require('../../assets/images/mediapal-blue.png').default"/>
              <div class="speaker">Speaker</div>
              <div class="camera">Camera</div> -->

              <!-- <div class="studio-div"> -->
              <img
                class="studio-phone"
                :src="
                  require('../../assets/images/creative-studio-phone.png')
                    .default
                "
              />
              <!-- </div> -->

              <div
                class="tab-pane fade show active"
                id="v-pills-one"
                role="tabpanel"
                aria-labelledby="v-pills-one-tab"
              >
                <iframe
                  class="center tab-image"
                  src="https://demos.mediapal.net/ads/heritage-insurance/autocorrect/300x250/"
                  style="height: 250px; width: 300px; z-index: 3"
                ></iframe>
              </div>

              <div
                class="tab-pane fade"
                id="v-pills-two"
                role="tabpanel"
                aria-labelledby="v-pills-two-tab"
              >
                <iframe
                  class="center tab-image"
                  src="https://demos.mediapal.net/ads/be-the-cop/parallax/300x250/"
                  style="height: 250px; width: 300px"
                ></iframe>
              </div>

              <div
                class="tab-pane fade"
                id="v-pills-three"
                role="tabpanel"
                aria-labelledby="v-pills-three-tab"
              >
                <iframe
                  class="center tab-image"
                  src="https://demos.mediapal.net/ads/eabl/sk/leaves-animation/300x250/"
                  style="height: 250px; width: 300px"
                ></iframe>
              </div>

              <div
                class="tab-pane fade"
                id="v-pills-four"
                role="tabpanel"
                aria-labelledby="v-pills-four-tab"
              >
                <iframe
                  class="center tab-image"
                  src="https://demos.mediapal.net/ads/minute-maid/scratch-to-reveal/300x250/"
                  style="height: 250px; width: 300px"
                ></iframe>
              </div>

              <div
                class="tab-pane fade"
                id="v-pills-five"
                role="tabpanel"
                aria-labelledby="v-pills-five-tab"
              >
                <iframe
                  class="center tab-image"
                  src="https://demos.mediapal.net/ads/unhcr/ramadhan/2020/ad-commerce/video/300x250/"
                  style="height: 250px; width: 300px"
                ></iframe>
              </div>

              <div
                class="tab-pane fade"
                id="v-pills-six"
                role="tabpanel"
                aria-labelledby="v-pills-six-tab"
              >
                <iframe
                  class="center tab-image"
                  src="https://demos.mediapal.net/ads/isuzu/brand-button/"
                  style="height: 250px; width: 300px"
                ></iframe>
              </div>

              <div
                class="tab-pane fade"
                id="v-pills-seven"
                role="tabpanel"
                aria-labelledby="v-pills-seven-tab"
              >
                <iframe
                  class="center tab-image"
                  src="https://demos.mediapal.net/ads/ariel/video/folding/collection/300x250/"
                  style="height: 250px; width: 300px"
                ></iframe>
              </div>

              <div
                class="tab-pane fade"
                id="v-pills-eight"
                role="tabpanel"
                aria-labelledby="v-pills-eight-tab"
              >
                <iframe
                  class="center tab-image"
                  src="https://demos.mediapal.net/ads/coca-cola/george-the-poet/300x250/"
                  style="height: 250px; width: 300px"
                ></iframe>
              </div>

              <div
                class="tab-pane fade"
                id="v-pills-nine"
                role="tabpanel"
                aria-labelledby="v-pills-nine-tab"
              >
                <iframe
                  class="center tab-image"
                  src="https://demos.mediapal.net/ads/coca-cola/christmas/richmedia/memory-game/300x250/"
                  style="height: 250px; width: 300px"
                ></iframe>
              </div>

              <div
                class="tab-pane fade"
                id="v-pills-ten"
                role="tabpanel"
                aria-labelledby="v-pills-ten-tab"
              >
                <iframe
                  class="center tab-image"
                  src="https://demos.mediapal.net/ads/burn-stoves/jikokoa-xtra/native-ads/300x250-3/"
                  style="height: 250px; width: 300px"
                ></iframe>
              </div>
            </div>
          </div>
          <div class="col-md-3 showcase-link">
            <div class="content">
              <p>Explore more MediaPal creative designs</p>
              <a href="https://showcase.mediapal.net/ads" target="_blank"
                >View Showcase</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ShowCase",
  // mounted() {
  //   gsap.to(".dotted-grid", {
  //     x: -30,
  //     autoAlpha: 1,
  //     scrollTrigger: {
  //       trigger: ".dotted-grid",
  //       start: "top 800px",
  //       end: "top 300px",
  //       scrub: true,
  //       // markers: true
  //     },
  //   });
  // },
};
</script>

<style lang="scss" scoped>
$primary: #435560;
$secondary: #939598;
$tertiary: #414042;
$accent: #fca500;
$white: #fff;

/* 
h5 {
  margin-bottom: 0;
} */

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ecf4f6;
  /* position: relative; */
}

.dotted-grid {
  /* position: absolute;
    bottom: 20%;
    left: 6%;
    width: 3rem; */

  position: absolute;
  transform: rotate(90deg);
  bottom: 20%;
  right: 20%;
  width: 2.5rem;

  visibility: hidden;
  /* border: 1px solid red; */
}

h5 a {
  font-size: 22px;
  /* line-height: 12px; */
  color: #257282;
  margin: 0;
  text-align: left !important;

  &:hover {
    color: $primary;
  }
}

p {
  line-height: 20px;
  color: #257282;
  margin: 0;
  text-align: left !important;
}

.nav-container-heading {
  padding: 0.6rem 0;
  font-weight: 500;
}

/* .container {
  border: 1px solid black;
} */

.nav {
  /* border: 1px solid red; */
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  text-align: left !important;
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background: #fff;
}

.card-content {
  display: flex;
  /* justify-content: flex-start; */
  /* border: 1px solid red; */
  -webkit-transition: all 0.45s ease-in-out;
  transition: all 0.45s ease-in-out;
  /* align-items: center; */

  /* border: 1px solid blue; */

  .card-text {
    /* flex-basis: 90%; */
    /* margin-left: .5rem; */
    width: 100%;

    .tag-title {
      font-weight: 400 !important;
      font-size: 0.9rem !important;
    }
  }
}

/* .icon,
.fab {
  border: 1px solid red;
  width: 30px !important;
  height: 30px;
  display: inline-block;
} */

////////////////////////////////
//    Tab/Pills Styles    //
//////////////////////////////

.vertical-tabs {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* border: 1px solid green; */

  .nav-container {
    width: 400px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
  }

  .nav-link {
    font-size: 12px;
    border-radius: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;

    &:nth-of-type(10) {
      border-bottom: none;
    }
  }
  .nav-link.active {
    /* background: $accent; */
    /* color: $white; */
    border-bottom: none;
    /* padding: 20px 20px; */
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */

    /* border-radius: 5px; */
    background-color: #257282;
    -webkit-transition: all 0.45s ease-in-out;
    transition: all 0.45s ease-in-out;

    p {
      display: block;
      color: #fff;
      /* background-color: #257282;
      -webkit-transition: all 0.45s ease-in-out;
      transition: all 0.45s ease-in-out; */
    }

    .card-content {
      .card-icon {
        padding: 0.5rem;

        svg {
          fill: #ffa141;
        }
      }

      /* .card-text{
      border: 1px solid blue; 
      padding: 0 .5rem .5rem 0;
    } */
    }
  }

  .tab-content {
    /* border: 1px solid blue; */
    /* height: 100%; */
    width: 350px;
    height: 600px;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    /* background-color: #fff; */

    /* .mediapal-logo{
      position: absolute;
      top: 3rem;
      left: 1rem;
      width: 6rem;
    } */
  }

  .tab-pane {
    /* background-color: red; */
    /* padding: 5rem 0; */
    position: absolute;
    /* border: 1px solid black; */
    z-index: 4;
    top: 80%;
    left: 60%;
    transform: translate(-60%, -80%);
    width: 100%;

    .tab-image {
      /* width: 300px;
      height: 300px; */
      width: 100%;
      border: none;
    }
  }
}

.showcase-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* border: 1px solid red; */

  p {
    /* font-size: 1.2rem !important; */
    text-align: center !important;
    line-height: 1.2rem;
    margin-bottom: 1rem;
  }

  a {
    font-size: 0.8rem;
    border-radius: 1.5rem;
    display: inline-block;
    padding: 0.3rem 1rem !important;
    /* border: 1px solid #257282; */
    /* color: #257282; */
    background: linear-gradient(90deg, #1bbd98 11%, #225577 100%);
    color: #fff;
    border: none;
  }
}

.image-container {
  /* border: 1px solid red; */
  padding: 0;
}

.iphone-x {
  position: relative;
  margin: auto;
  width: 350px !important;
  height: 600px;
  /* border: 1px solid green; */
  /* margin: 0; */

  .studio-phone {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    /* border: 1px solid red; */
  }

  // background-color: #7371ee;
  // background-image: linear-gradient(60deg, #7371ee 1%,#a1d9d6 100%);
  /* border-radius: 40px;
  box-shadow: 0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919,
    0px 0px 0px 10px #111; */

  /* &:before,
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  } */

  /* // home button indicator
  &:after {
    bottom: 7px;
    width: 140px;
    height: 4px;
    background-color: #f2f2f2;
    border-radius: 10px;
  }

  // frontal camera/speaker frame
  &:before {
    top: 0px;
    width: 56%;
    height: 30px;
    background-color: #1f1f1f;
    border-radius: 0px 0px 40px 40px;
  } */

  /* .speaker,
  .camera,
  .content {
    position: absolute;
    display: block;
    color: transparent;
  } */

  // speaker
  /* .speaker {
    top: 0px;
    left: 50%;
    transform: translate(-50%, 6px);
    height: 8px;
    width: 15%;
    background-color: #101010;
    border-radius: 8px;
    box-shadow: inset 0px -3px 3px 0px rgba(256, 256, 256, 0.2);
  } */

  // camera
  /* .camera {
    left: 10%;
    top: 0px;
    transform: translate(180px, 4px);
    width: 12px;
    height: 12px;
    background-color: #000000;
    border-radius: 12px;
    box-shadow: inset 0px -3px 2px 0px rgba(256, 256, 256, 0.2);

    &:after {
      content: "";
      position: absolute;
      background-color: #2d4d76;
      width: 6px;
      height: 6px;
      top: 2px;
      left: 2px;
      top: 3px;
      left: 3px;
      display: block;
      border-radius: 4px;
      box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.5);
    }
  } */

  .tab-pane.active {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>