<template>
  <div class="parent">
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
    <section>
      <div class="content">
        <h1>AUDIO</h1>
        <p>
          MediaPal Programmatic audio automates the selling and insertion of ads
          in audio content.
        </p>
      </div>
      <img
      class="spotify"
          :src="
            require('../../../assets/images/solutions-audio-spotify.png')
              .default
          "
          alt=""
        />
    </section>

    <div class="detail detail-1">
      <div class="image">
        <div class="image-div">
          <img
          :src="
            require('../../../assets/images/solutions-audio-mockup-1.png')
              .default
          "
          alt=""
        />
        </div>    
      </div>

      <div class="section-content">
          <h2>Ring-Back-Tone (RBT)</h2>
        <p>
          RBT is the sound that a subscriber listens to when making a call.  MediaPal is converting this audio real-estate when caller is most attentive for audio advertising. <br/>RBT advertising is a new type of advertising that competes with other advertising medium. It is reported that RBT advertising is the second most acceptable form of advertising consumers would allow on their mobile device. Mobile Operators offer MediaPal RBT-Ad inventory making it possible for monetization and in turn offer subscribers free Calls, Data or Music.
        </p>
      </div>
    </div>

    <div class="detail">
      <div class="image">
        <div class="image-div">
          <img
          :src="
            require('../../../assets/images/solutions-audio-mockup-2.png')
              .default
          "
          alt=""
        />
        </div>    
      </div>

      <div class="section-content">
          <h2>Digital Radio</h2>
        <p>
          Digital radio is a popular addition to the radio landscape that allows streaming of AM/FM radio stations online and offers more targeted advertising opportunities for companies who want to reach a specific audience.
        </p>
      </div>
      <img
        class="dotted-grid dotted-1"
        :src="require('../../../assets/images/dotted-grid.png').default"
        alt=""
      />
    </div>

    <div class="detail">
      <div class="image">
        <div class="image-div">
          <img
          :src="
            require('../../../assets/images/solutions-audio-mockup-3.png')
              .default
          "
          alt=""
        />
        </div>     
      </div>

      <div class="section-content">
          <h2>Music Streaming Services</h2>
        <p>
          Music Streaming means listening to music or watching video in ‘real time’, instead of downloading a file to your computer and watching it later. Advertisers looking to reach audiences on the go, this mobile audience is of value, especially because free, ad-supported listening who account for majority of the subscribers.</
        </p>
      </div>
    </div>

    <div class="detail">
      <div class="image">
        <div class="image-div">
          <img
          :src="
            require('../../../assets/images/solutions-audio-mockup-4.png')
              .default
          "
          alt=""
        />
        </div>     
      </div>

      <div class="section-content">
          <h2>Podcasts</h2>
        <p>
          Podcasts are highly engaging mediums for delivering messages. Given the audio nature of podcasts, listeners tend to hang on to every word, making them an excellent audience for advertisers who are trying to get their brands known. Brands don’t have to worry about audiences tuning out their ad like they do in many other mediums.
        </p>
      </div>
    </div>

    <div class="section-2">
      <div class="dotted-div"></div>
      <p>
        Unlike traditional radio advertising, programmatic audio advertising enables data-driven targeting to reach audiences that extend beyond display or video advertising campaigns. <br/><br/>Marketers will look for more ways to include audio advertising in their marketing strategies as consumers shift from radio to online-streaming environments.
      </p>
    </div>

    <div class="section-3">
      <img
        class="dotted-grid"
        :src="require('../../../assets/images/dotted-grid.png').default"
        alt=""
      />
      <h2>Benefits of MediaPal Programmatic Audio</h2>
      <div class="accordion-parent">
        <div class="accordion-section">
          <div class="accordion-container">
            <accordion :benefits="audioBenefits"></accordion>
          </div>
        </div>
      </div>
    </div>

    <chat></chat>

    <site-footer></site-footer>
  </div>
</template>

<script>
import Accordion from "../../components/Accordion.vue";
import Chat from "../../components/Chat.vue";
import SiteFooter from "../../components/SiteFooter.vue";

export default {
  name: "Audio",
  components: { Accordion, Chat, SiteFooter },
  mounted() {
    this.triggerAnimations();
  },
  computed: {
    audioBenefits: {
      get() {
        return this.$store.getters.GET_AUDIO_BENEFITS;
      },
    },
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
    triggerAnimations() {
      gsap.to(".dotted-1", {
        x: 20,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".dotted-1",
          start: "top center",
          end: "top 300px",
          scrub: true,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  /* border: 1px solid black; */
  position: relative;
  background: url("../../../assets/images/solutions-audio-bg.png");
  background-repeat: no-repeat;
  background-size: cover;

  .content {
    /* border: 1px solid red; */
    top: 45%;
    position: absolute;
    transform: translateY(-45%);
    left: 11%;
    width: 19%;
    /* border: 1px solid red; */

    h1 {
      font-size: 4rem;
      color: #257282;
      letter-spacing: 0.5rem;
      /* font-weight: 300 !important; */
    }

    p {
      margin-top: 1rem;
      /* color: #257282; */
      /* font-weight: 100; */
      /* font-size: 1.3rem !important; */
      /* font-family: "brigadiersansregular" !important; */
      /* line-height: 1.6rem; */
      /* letter-spacing: 0.2rem; */
    }
  }

  .spotify {
    /* border: 1px solid red; */
    position: absolute;
    width: 200px;
    bottom: 15%;
    left: 10%;
  }
}

.detail-1 {
  margin-top: 5rem;
}

.detail {
  display: flex;
  /* border: 1px solid black; */
  align-items: center;
  justify-content: center;
  position: relative;

  .section-content {
    flex-basis: 60%;
    padding: 2rem;
    /* border: 1px solid blue; */

    h2 {
      font-size: 2.5rem;
      letter-spacing: 0.2rem;
    }

    p {
      /* border: 1px solid red; */
      max-width: 70%;
    }
  }

  .image {
    flex-basis: 40%;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .image-div {
      width: 30%;
      /* margin-left: auto; */
      img {
        /* border: 1px solid black; */
        width: 100%;
      }
    }
  }

  .dotted-grid {
    position: absolute;
    transform: rotate(90deg);
    /* bottom: 2rem; */
    bottom: 7%;
    left: 22%;
    width: 2.5rem;
    visibility: hidden;
    /* border: 1px solid red; */
  }
}

.section-2 {
  /* border: 1px solid red; */
  text-align: center !important;
  padding: 5rem 2rem;
  position: relative;

  p {
    max-width: 60%;
    margin: auto;
  }

  .dotted-grid {
    position: absolute;
    /* transform: rotate(90deg); */
    /* bottom: 2rem; */
    top: -2.8rem;
    left: 9%;
    width: 2.5rem;
    /* border: 1px solid red; */
  }

  .dotted-div {
    position: absolute;
    height: 1rem;
    /* border: 1px solid blue; */
    width: 20%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-top: 4px dotted #257282;
  }
}

/* @import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"); */

$card-dark: #257282;
$card-light: #fff;

.section-3 {
  background-color: #ecf4f6;
  padding: 4rem 0;
  position: relative;

  h2 {
    text-align: center !important;
    font-size: 3rem;
    letter-spacing: 0.1rem;
    margin-top: 3rem;
    /* border: 1px solid red; */
  }

  .dotted-grid {
    position: absolute;
    transform: rotate(90deg);
    /* bottom: 2rem; */
    top: -2.5rem;
    /* left: 50%; */
    width: 2.5%;
    margin: 0 48.75%;
    /* margin: auto; */
    /* border: 1px solid red; */
  }
}

.accordion {
  &-parent {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: color 0.15s ease-in-out;
    transition: color 0.15s ease-in-out;
    display: -ms-grid;
    display: grid;
    place-items: center;
    /* font-family: "Kumbh Sans", sans-serif; */
    /* font-size: 16px; */
  }

  &-section {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 45%;
    /* height: 350px; */
    /* border-radius: 20px; */
    /* background-color: aliceblue;
  -webkit-box-shadow: 0px 10px 80px -10px rgba(0, 0, 0, 0.72);
          box-shadow: 0px 10px 80px -10px rgba(0, 0, 0, 0.72); */
  }

  &-container {
    width: 100%;
    margin: 40px 40px;
  }

  &-list {
    width: 100%;
    /* height: 100%; */
    /* height: 200px; */
    /* border: 1px solid blue; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    /* width: 80%; */
    /* margin: auto; */
    text-align: left !important;
    /* border: 1px solid red; */
  }
}
</style>