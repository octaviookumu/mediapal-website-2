<template>
<div>
  <home-landing-page></home-landing-page>
  <brands-carousel></brands-carousel>
  <any-screen></any-screen>
  <metrics></metrics>
  <powerful-experience></powerful-experience>
  <data-platform></data-platform>
  <right-people></right-people>
  <premium-publishers></premium-publishers>
  <ad-manager></ad-manager>
  <improve-performance></improve-performance>
  <digital-experience-platform></digital-experience-platform>
  <div id="case-studies">
  <case-study></case-study>
  </div>
  <partners></partners>
  <chat></chat>
  <site-footer></site-footer>
</div>
</template>

<script>
import BrandsCarousel from "../../components/BrandsCarousel.vue"
import AdManager from "../Home/AdManager.vue"
import AnyScreen from "../Home/AnyScreen.vue"
import CaseStudy from "../../components/CaseStudy.vue"
import DataPlatform from "../Home/DataPlatform.vue"
import DigitalExperiencePlatform from "../Home/DigitalExperiencePlatform.vue"
import ImprovePerformance from "../Home/ImprovePerformance.vue"
import HomeLandingPage from "./HomeLandingPage.vue"
import Metrics from "../Home/Metrics.vue"
import Partners from "./Partners.vue"
import PowerfulExperience from "../Home/PowerfulExperience.vue"
import PremiumPublishers from "../Home/PremiumPublishers.vue"
import RightPeople from "../Home/RightPeople.vue"
import Chat from "../../components/Chat.vue"
import SiteFooter from "../../components/SiteFooter.vue"

export default {
  components: { HomeLandingPage, BrandsCarousel, AnyScreen, Metrics, PowerfulExperience, DataPlatform, RightPeople, PremiumPublishers, AdManager, ImprovePerformance, DigitalExperiencePlatform, CaseStudy, Partners, Chat, SiteFooter },
  name: 'home',
}
</script>