<template>
  <div>
    <!-- cookie notice pop up -->
    <footer class="bg-footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 logo-container">
          <div class="logo-div">
            <router-link :to="{ name: 'home' }" class="nav-link">
              <img
                :src="require('../../assets/images/mediapal-blue.png').default"
              />
            </router-link>
          </div>
          <p>
            Data driven Omni-channel Programmatic Digital Experience Platform
            with a Global Reach
          </p>
        </div>

        <div class="col-lg-3 footer-col">
          <div class="solutions">
            <p class="link-title">Solutions</p>
            <ul class="list-unstyled footer-link mt-1">
              <li>
                <router-link :to="{ name: 'dsp' }" class="footer-link">
                  Omnichannel DSP
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'supply' }" class="footer-link">
                  Supply
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'audiences' }" class="footer-link">
                  Audiences
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'social' }" class="footer-link">
                  Social
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'moments' }" class="footer-link">
                  Moments
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'connectedtv' }" class="footer-link">
                  Connected TV
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'creativestudio' }" class="footer-link">
                  Creative Studio
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'dooh' }" class="footer-link">
                  DOOH
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'audio' }" class="footer-link">
                  Audio
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'footfall' }" class="footer-link">
                  Footfall
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'brandsafety' }" class="footer-link">
                  Brand Safety
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-2 footer-col">
          <div class="resources">
            <p class="link-title">Resources</p>
            <ul class="list-unstyled footer-link mt-1">
              <li><a href="https://www.getrevue.co/profile/MediaPal" target="_blank">Blog</a></li>
              <li><a href="">Insights</a></li>
              <li><a href="#">Case Studies</a></li>
              <li>
                <router-link :to="{ name: 'contact' }" class="footer-link">
                  Contact
                </router-link>
                </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-2 footer-col">
          <div class="support">
            <p class="link-title">Privacy</p>
            <ul class="list-unstyled footer-link mt-1">
              <!-- <li>
                <router-link :to="{ name: 'contact' }" class="footer-link">
                  Contact
                </router-link>
              </li>
              <li><a href="" target="_blank">Sitemap</a></li> -->
              <li>
                <router-link :to="{ name: 'privacy' }" class="footer-link">
            Privacy policy
          </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'cookie-notice' }" class="footer-link">
            Cookie notice
          </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'gdpr' }" class="footer-link">
            GDPR
          </router-link>
              </li>
            </ul>
          </div>
          <div class="subscribe">
            <p>Get our latest news.</p>
            <button>
              <a href="https://www.getrevue.co/profile/MediaPal" target="_blank" style="color: #fff;">Subscribe</a>
              </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container footer-bottom">
      <div class="col-lg-12 privacy-div">
        <div class="privacy">
          <p class="link-title">Privacy</p>
          <ul class="list-unstyled footer-privacy mt-1">
          <li>
                Copyright© 2021 MediaPal
              </li>
            </ul>
        </div>
        
        <!-- <p class="mb-0 col-lg-2">Privacy policy</p>
        <p class="mb-0 col-lg-2">Cookie notice</p> -->
        <div class="col-lg-2 footer-socials" style="margin-left: auto; margin-top: -2rem">
          
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="https://www.facebook.com/pages/MediaPal/102349872048386">
                <i class="fab facebook footer-social-icon fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a
                href="https://twitter.com/mediapal_dxp?lang=en"
                target="_blank"
              >
                <i class="fab twitter footer-social-icon fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://ke.linkedin.com/company/mobiglobe"
                ><i class="fab linkedin footer-social-icon fa-linkedin-in"></i
              ></a>
            </li>
            <li class="list-inline-item">
              <a
                href="https://www.instagram.com/mediapal_dxp/?hl=en"
                target="_blank"
                ><i class="fab instagram footer-social-icon fa-instagram"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <cookie-pop-up></cookie-pop-up>
    </footer>
  </div>
</template>

<script>
import CookiePopUp from './CookiePopUp.vue'

export default {
  name: "SiteFooter",
  components: { CookiePopUp },
};
</script>

<style lang="scss" scoped>
.bg-footer {
  background-color: #ecf4f6;
  padding: 50px 0 30px;

  .footer-col{

    a{
      font-size: .8rem !important;
    }
    
  }

  .row {
    .link-title {
      color: #257282;
      font-weight: 600;
      font-size: 1rem !important;
    }

    .logo-container {
      .logo-div {
        /* border: 1px solid black; */
        margin: 0;

        img {
          /* border: 1px solid blue; */
          display: block;
          width: 60%;
          /* margin-left: 0; */
          /* margin-right: auto; */
        }
      }

      p {
        /* border: 1px solid red; */
        font-size: 0.8rem !important;
        width: 250px;
        padding-left: 1rem;
        color: #257282;
        
      }
    }

    .subscribe {
      margin-top: 7rem;
      width: 185px;
      /* text-align: center; */

      p {
        color: #257282;
        font-size: 0.8rem !important;
        line-height: 1.3;
        margin: 0;
      }

      button {
        margin-top: 0.5rem;
        border-radius: 20px;
        font-size: 0.8rem !important;
        font-weight: 600;
        background: linear-gradient(90deg, #1bbd98 11%, #225577 100%);
        color: #fff;
        border: none;
      }
    }
  }
}
.footer-heading {
  letter-spacing: 2px;
}

.footer-link {
  color: #257282;
  /* font-size: .8rem !important; */
  /* border: 1px solid red; */

  &:hover {
    color: #fda041;
  }
}

.footer-link a {
  /* color: #acacac; */
  color: #257282;
  line-height: 1.3rem;
  /* font-size: .7rem !important; */
  transition: all 0.5s;

  &:hover {
    color: #fda041;
  }
}

/* .footer-link a:hover {
    color: #1bbc9b;
} */

.contact-info {
  /* color: #acacac; */
  font-size: 14px;
}

.footer-social-icon {
  font-size: 18px;
  height: 18px;
  width: 18px;
  /* line-height: 30px; */
  /* border-radius: 3px; */
  text-align: center;
  display: inline-block;
  color: #257282;

  &:hover {
    color: #fda041;
  }
}

.footer-bottom {
  /* border: 1px solid black; */
  /* border: 1px solid; */
  border-top-width: 0.3px;
  border-top-style: solid;
  border-top-color: #257282;
  padding: 1rem 0;

  .privacy-div{
    .privacy{
      p{
        display: none;
      }
    }
  }

  

.footer-privacy{
display: flex;
justify-content: space-between;
width: 40%;


  li{
font-size: 0.8rem;
    color: #257282;
  }
}

}

/* .footer-heading:after {
    content: '';
    width: 25px;
    border-bottom: 1px solid #FFF;
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    border-bottom: 1px solid #1bbc9b;
} */


// accordion


// accordion

@media screen and (max-width: 480px) {

.solutions{
  display: none;
}

.logo-container{
  display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 1rem;

img{
  display:block;
  margin: auto;
}

p{
  text-align: center;
}
}

.resources{
  text-align: center;
  /* margin: 1rem 0; */
padding: 1rem 0;
  border-top-color: lightgray;
border-top-width: 1px;
border-top-style: solid;
border-bottom-color: lightgray;
border-bottom-width: 1px;
border-bottom-style: solid;
/* color: #257282; */
font-size: .8rem;
width: 90%;
align-items: center;
justify-content: space-around;
margin: 0 auto;
}

.support{
  text-align: center;
  /* margin: 1rem 0; */
padding: 1rem 0;
border-bottom-color: lightgray;
border-bottom-width: 1px;
border-bottom-style: solid;
/* color: #257282; */
font-size: .8rem;
width: 90%;
align-items: center;
justify-content: space-around;
margin: 0 auto;
}

.subscribe{
  display: flex;
/* border: 1px solid red; */
width: 70% !important;
align-items: center;
justify-content: space-between;
margin: 1.5rem auto !important;

/* display: flex; */
/* border: 1px solid red; */
/* width: 70% !important; */
/* align-items: center; */
/* justify-content: space-between; */
/* margin: 1.5rem auto !important; */
flex-direction: column;

button{
  /* margin-top: -.5rem !important; */
  margin-top: 1rem !important;
}
}

.footer-bottom{
  border: none;

  .privacy-div{
    display: flex;
flex-direction: column;

/* .privacy{
      display: block;
    } */

.privacy{
  order: 2;
flex-direction: column;
align-items: center;
width: 90%;
margin: auto;
/* border-top-color: lightgray;
border-top-width: 1px;
border-top-style: solid; */
padding: 1rem 0;


p{
  text-align: center;
font-weight: 600;
font-size: 1rem;
color: #257282;
}

.footer-privacy{
  display: flex;
justify-content: space-between;
width: 40%;
flex-direction: column;
align-items: center;
width: 80%;
margin: auto;
}
}
  }

  .footer-socials{
    margin-top: 0rem;
/* border: 1px solid red; */
display: flex;
align-items: center;
justify-content: center;

ul{
  margin: 1rem 0;
}
  }

  
}
  
}
</style>