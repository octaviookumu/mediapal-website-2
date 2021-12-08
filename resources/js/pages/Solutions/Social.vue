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
        <h1>SOCIAL</h1>
        <p>
          MediaPal is an AdTech API advertising partner to the world’s biggest
          digital and social advertising platforms.<br /><br />Social media
          accounts for more than half of Ad spends and is one of the most
          engaging and effective ways to connect with audiences today, social ad
          buying makes it easier than ever to take advantage of the social
          audiences and place ads across a wide range of social media channels.
        </p>
      </div>
      <img
        class="social-icon twitter"
        :src="require('../../../assets/images/social-twitter.png').default"
        alt=""
      />
      <img
        class="social-icon snapchat"
        :src="require('../../../assets/images/social-snapchat.png').default"
        alt=""
      />
      <img
        class="social-icon tiktok"
        :src="require('../../../assets/images/social-tiktok.png').default"
        alt=""
      />
      <img
        class="social-icon facebook"
        :src="require('../../../assets/images/social-facebook.png').default"
        alt=""
      />
      <img
        class="social-icon linkedin"
        :src="require('../../../assets/images/social-linkedin.png').default"
        alt=""
      />
    </section>

    <!-- <div class="socials-tiktok">
      <div class="article">
        <div class="section-title">
        <p>Don't <br> Make Ads</p>
      <p>Make it <br> Interesting</p>
      </div>
      
      <div class="content">
        <p>TikTok For Business is where you can unleash your brand's creative side. A fully immersive no judgement world where there's an audience for every voice.</p>
      <p>No matter how big or small your business, no matter what you're making or selling, we believe your brand deserves to be discovered here.</p>
      </div>
      
      </div>
      <div class="phone-screen">
        <div class="image-div">
        <img :src="require('../../../assets/images/tiktok-mock-1.png').default" alt="">
        </div>
      </div>
    </div> -->

    <!-- <div class="socials-twitter">
      <div class="twitter-heading">
        <p>Advertising solutions to fit your goals</p>
        <p>From getting more followers to driving conversions, Twitter can help you grow your business.</p>
      </div>
      <div class="content">
        <div class="image-div">
          <img :src="require('../../../assets/images/twitter-carousel-web.gif').default" alt="">
        </div>
        <div class="promote-div">
          <div class="promote promote-one">
            <p>Promote your Tweets</p>
            <p>Broadcast your message to the largest audience possible.</p>
          </div>
          <div class="promote promote-two">
            <p>Promote your video</p>
            <p>Drive higher brand recall and awareness with show-stopping visual content.</p>
          </div>
          <div class="promote promote-three">
            <p>Promote your account</p>
            <p>Grow your following and build a community to amplify your message — on and off Twitter.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="socials-facebook">
      <div class="fb-heading">
        <p>Make one ad and show it everywhere.</p>
        <p>With a few clicks, you can run ads across Facebook, Instagram, Audience Network and Messenger. By making a single campaign, you can reach people on all of their favourite apps and websites.</p>
      </div>
      <div class="content">
        <div class="image-div">
          <img :src="require('../../../assets/images/fb-frame.png').default" alt="">
          <img :src="require('../../../assets/images/fb-image.png').default" alt="">
        </div>
        <div class="promote-div">
          <div class="promote promote-one">
            <p>Show ads across devices.</p>
            <p>Show your ads on whatever device your audience happens to be using, with additional options for mobile or desktop.</p>
          </div>
          <div class="promote promote-two">
            <p>Do it all in just a few steps.</p>
            <p>Advertising across platforms and devices is easy. Just build your ad once, then select automatic placements to run your ad in the places that are most likely to achieve your campaign goals. No resizing or reformatting required.</p>
          </div>
          <div class="promote promote-three">
            <p>Stay safe and precise.</p>
            <p>Growing your reach doesn't mean lessening your control. Easy-to-use brand controls let you set parameters on where and how your ads appear.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="socials-instagram">
      <div class="article">
        <div class="section-title">
        <p>Explore what’s possible with <span>Instagram </span> ads</p>
      </div>
      
      <div class="content">
        <p>Advertise your business and reach your next customers with precise targeting and actionable insights.</p>
      </div>
      
      </div>
      <div class="phone-screen">
        <div class="image-div">
        <img :src="require('../../../assets/images/instagram-mock-1.png').default" alt="">
        </div>
      </div>
    </div>

    <div class="section-2">
      <img
        class="dotted-grid"
        :src="require('../../../assets/images/dotted-grid.png').default"
        alt=""
      />
      <p>
        MediaPal combines its Ad Technology with Social Media Platforms to help
        brands and agency marketers create and manage high-quality ads with
        advanced tailored features and capabilities.
      </p>
    </div> -->

    <div class="section-3">
      <h2>MediaPal Social helps with</h2>
      <div class="accordion-parent">
        <div class="accordion-section">
          <div class="accordion-container">
            <accordion :benefits="socialBenefits"></accordion>
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
  name: "Social",
  components: { Accordion, Chat, SiteFooter },
  mounted(){
    this.triggerAnimations()
  },
  computed: {
    socialBenefits: {
      get() {
        return this.$store.getters.GET_SOCIAL_BENEFITS;
      },
    },
  },
  methods:{
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
      gsap.to(".dotted-grid", {
        x: 20,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".dotted-grid",
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
@import '../../../../public/css/sofia-pro/stylesheet.css';
@import '../../../../public/css/urw-geometric-font/stylesheet.css';
@import '../../../../public/css/aveny/stylesheet.css';

/* .sidenav-hamburger {
  position: fixed;
  top: 2rem;
  right: 13%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  z-index: 180;
} */

/* @media (max-width: 480px){
  .sidenav-hamburger {
  display: none;
}
} */



section {
  position: relative;
  background: url("../../../assets/images/solutions-social-bg.png");
  background-repeat: no-repeat;
  background-size: cover;

  .content {
    /* border: 1px solid red; */
    top: 45%;
    position: absolute;
    transform: translateY(-45%);
    left: 11%;
    width: 24%;
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

  

  .social-icon{
    width: 3rem;
    position: absolute;
    filter: grayscale(100%);
    /* border: 1px solid black; */
  }

  .twitter{
    right: 45%;
    top: 25%;
    animation: pulse 2s infinite ease-in-out alternate;
  }

  .snapchat{
    right: 35%;
    top: 20%;
    animation: pulse 3s infinite ease-in-out alternate;
  }

  .tiktok{
    right: 25%;
    top: 20%;
    animation: pulse 2s infinite ease-in-out alternate;
  }

  .facebook{
    right: 49%;
    top: 55%;
    animation: pulse 3s infinite ease-in-out alternate;
  }

  .linkedin{
    right: 35%;
    top: 70%;
    animation: pulse 2s infinite ease-in-out alternate;
  }
}

.socials-tiktok{
  /* border: 1px solid red; */
  display: flex;
  padding: 2rem 0;

  .section-title{
    width: 80%;
/* border: 1px solid red; */

    p{
    font-size: 5rem;
line-height: 5rem;

    &:first-of-type{
      font-family: 'urw-geometric-heavy';
      color: #000;
      margin-top: 1rem;
    }

    &:last-of-type{
      font-family: 'sofia-pro';
      color: #fe2c55;
    }
  }
  }

  .article{
    /* border: 1px solid blue; */
    flex-basis: 65%;
    padding: 2rem 2rem 2rem 10rem;


    .content{
      width: 85%;
    }
  }

  .phone-screen{
   flex-basis: 35%;

    .image-div{
      background: #25f4ee;
border-radius: 38px;
border: 12px solid #25f4ee;
width: 60%;

img{
      display: block;
      width: 100%;
      border-radius: 38px;
    }
    }

    
  }

  
}


.socials-twitter{
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;

  p{
    color: #000;
  }

  .twitter-heading{
    text-align: center;
    margin: 1rem 0;

    p{
      &:first-of-type{
        font-size: 2rem;
        font-weight: 500;
      }
    }
  }

  .content{
    display: flex;
    flex-direction: row;
    /* border: 1px solid blue; */
    width: 70%;
margin: auto;

.image-div{
  flex-basis: 50%;

  img{
    width: 60%;
display: block;
margin: auto;
  }
}



    .promote-div {
flex-basis: 50%;
/* border: 1px solid black; */
margin: auto 1rem;

.promote{
  p{
    &:first-of-type{
      font-size: 1.6rem;
    }

    /* &:last-of-type{

    } */
  }

}
}
  }
}

.socials-facebook{
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  p{
    color: #444950;
  }

  .fb-heading{
    text-align: center;
    width: 60%;
margin: 2rem auto;

    p{
      &:first-of-type{
        font-size: 2rem;
        font-weight: 500;
      }
    }
  }

  .content{
    display: flex;
    flex-direction: row;
    /* border: 1px solid blue; */
    width: 70%;
margin: auto;

.image-div{
  flex-basis: 50%;
  position: relative;
/* border: 1px solid blue; */
height: 75vh;

  img{
margin: auto;
position: absolute;
top: 50%;
left: 50%;

transform: translate(-50%, -50%);

&:first-of-type{
  width: 65%;
  height: 100%;
}

&:last-of-type{
  height: 82%;
width: 60%;
}
  }
}



    .promote-div {
flex-basis: 50%;
/* border: 1px solid black; */
margin: auto 1rem;

.promote{
  margin: 1rem 0;

p{
  color: #444950;
}

  p{
    &:first-of-type{
      font-size: 1.4rem;
      margin: 0;
    }

    /* &:last-of-type{

    } */
  }

}
}
  }
}


.socials-instagram{
  /* border: 1px solid red; */
  display: flex;
  padding: 6rem 0;

  .section-title{
    width: 60%;
/* border: 1px solid red; */

    p{
    font-size: 4rem;
line-height: 4rem;
font-family: 'aveny';
color: #000;
  }

  span{
    background: linear-gradient(227deg, #B900B4 0%, #F50000 100%);
    -webkit-background-clip: text;
    color: transparent;
  }
  }

  .article{
    /* border: 1px solid blue; */
    flex-basis: 65%;
    padding: 2rem 6rem 2rem 10rem;


    .content{
      width: 85%;
    }
  }

  .phone-screen{
   flex-basis: 35%;

    .image-div{
border-radius: 15px;
width: 60%;

img{
      display: block;
      width: 100%;
      border-radius: 15px;
    }
    }

    
  }

  
}

.section-2 {
  position: relative;
  text-align: center !important;
  margin: auto;
  padding: 5rem;
  /* border: 1px solid black; */

  p {
    max-width: 45%;
    margin: auto;
    /* color: #257282; */
    /* border: 1px solid red; */
    /* border: 1px solid black; */
  }

  .dotted-grid {
    position: absolute;
    /* transform: rotate(90deg); */
    /* bottom: 2rem; */
    top: -2.8rem;
    left: 9%;
    width: 2.5rem;
    visibility: hidden;
    /* border: 1px solid red; */
  }
}

@keyframes pulse {
  from { transform: scale(0.8); }
  to { transform: scale(1.2); }
}

$card-dark: #257282;
$card-light: #fff;

.section-3 {
  background-color: #ecf4f6;
  padding: 1rem 0;

  h2 {
    text-align: center !important;
    font-size: 3rem;
    letter-spacing: 0.1rem;
    margin-top: 3rem;
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
    width: 39%;
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

@media (max-width: 768px) {
  .sidenav-hamburger {
    display: none;
  }
}
</style>