<template>
  <section>
    <div class="child">
      <div class="header">
        <p class="heading">CASE STUDY</p>
        <p class="sub-heading">UNHCR</p>
      </div>

      <i class="play far fa-play-circle fa-7x" @click="clicked()"></i>
      <div class="video-container">
        <div
          class="vid htmlvid"
          vidSrc="https://demos.mediapal.net/videos/unhcr/unhcr.mp4"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
// import BigPicture from '../../../public/js/BigPicture.js';

export default {
  name: "CaseStudy",
  // data(){
  //   return{
  //     link: "https://demos.mediapal.net/videos/unhcr/unhcr.mp4"
  //   }
  // },
  methods: {
    clicked() {
      let video = document.querySelector(".vid");
      let playBtn = document.querySelector(".play");

      playBtn.addEventListener("click", () => {
        BigPicture({
          el: video,
          vidSrc: video.getAttribute("vidSrc"),
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  /* border: 1px solid red; */
  display: grid;
  place-items: center;
  height: 100vh;
  position: relative;
}

.child {
  width: 85%;
  height: 85%;
  /* border: 1px solid red; */
  display: grid;
  place-items: center;
  position: relative;
  background: #e0f1fe;

  .header {
    position: absolute;
    top: 2rem;
    text-align: center;

    .heading {
      font-size: 1.2rem;
      letter-spacing: 0.1rem;
      color: #257282;
    }

    .sub-heading {
      margin-top: -1rem;
      font-size: 3rem;
      letter-spacing: 0.3rem;
      color: #257282;
    }
  }

  .fa-play-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    cursor: pointer;
    z-index: 10;
  }
}

.video-container {
  width: 95%;
  height: 90%;
  background: url("../../assets/images/case-study-unhcr.png");
  background-position: center;
  background-size: 100% 100%;

  .vid {
    width: 100%;
    height: 100%;
  }
}

@media screen and (max-width: 480px) {
  section {
    /* border: 1px solid red; */
    display: grid;
    place-items: center;
    height: 50vh;
    position: relative;
  }

  .child {
    width: 90%;
    height: 90%;
    /* border: 1px solid red; */
    display: grid;
    place-items: center;
    position: relative;
    background: #e0f1fe;

    .header {
      position: absolute;
      top: 2rem;
      text-align: center;

      .heading {
        font-size: .8rem;
        letter-spacing: 0.1rem;
        color: #257282;
      }

      .sub-heading {
        margin-top: -1rem;
        font-size: 1.9rem;
        letter-spacing: 0.3rem;
        color: #257282;
      }
    }

    .fa-play-circle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      cursor: pointer;
      z-index: 10;
    }
  }

  .video-container {
  width: 100%;
  height: 60%;
  background: url("../../assets/images/case-study-unhcr.png");
  background-position: center;
  background-size: 170% 150%;
}

}


</style>