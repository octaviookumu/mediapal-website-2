<template>
  <div>
    <!-- sidenav -->
    <img
      class="sidenav-hamburger"
      :src="require('../../assets/images/sidenav-hamburger.png').default"
      alt=""
      @click="showSideNav()"
    />

    <img
      class="sidenav-close"
      :src="require('../../assets/images/sidenav-close.png').default"
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
          :src="require('../../assets/images/mediapal-presence.png').default"
          alt=""
        />
      </div>
    </div>
    <!-- sidenav /-->

    <div class="wrapper light-wrapper">
      <div class="container inner">
        <h2 class="section-title text-center mb-40">
          General Data Protection Regulation (GDPR)
        </h2>
        <div class="row mb-10">
          <i></i>
        </div>
        <div class="row mb-20">
          <div class="col-sm-12">
            <p>
              By providing your consent, you agree that MediaPal may collect,
              retain, and process your personal data to provide you with
              marketing communications.

              <br /><br />Our marketing communications are usually delivered by
              email, but we may also contact you by phone, mail, or other
              channels. We may also contact you through a third party such as an
              event organizer or host.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <p>We may process your personal data for the following purposes:</p>
            <ul>
              <li>To understand your business</li>
              <li>
                To know or infer your interest in marketing products and
                services
              </li>
              <li>
                To enrich your personal data with information obtained from
                third parties
              </li>
              <li>To segment (group) you with similar individuals</li>
              <li>
                To provide you with information and offers about MediaPal's
                products and services
              </li>
              <li>To offer you potential business opportunities</li>
              <li>
                To invite you to events, educational opportunities, or training
                opportunities
              </li>
              <li>
                To offer you information resources such as whitepapers, reports,
                videos, and webinars
              </li>
              <li>
                To provide you with announcements about MediaPal or notify you
                about MediaPal’s participation in events
              </li>
              <li>
                To provide you with news and opinions about the marketing and
                advertising industries
              </li>
              <li>
                To ask you to share MediaPal information, offers, and
                invitations with other people
              </li>
              <li>
                To attribute your responses or actions to specific marketing
                campaigns, activities, and channels
              </li>
            </ul>
            <p></p>
            <p>
              Your personal data may include name, business email address,
              business phone number, company, title, region, IP address, and
              information about your business such as industry, size, revenue,
              and address. Your personal data may also include survey responses,
              questions, comments, requests, or other data or information that
              you submit to MediaPal. If you choose to provide personal contact
              information, such as your personal email address or personal phone
              number, we may retain and process that data. If you interact with
              a MediaPal application, such as a website or mobile app, we may
              log your activities. If you register for an account with a
              MediaPal application, we may processes your access credentials.
            </p>

            <p>
              Some of our marketing communications and applications may use
              third-party service providers. For example, we use Salesforce,
              MailChimp, and Outreach. We may share your personal data with our
              third-party service providers to perform the purposes described
              above. We may transfer your data to the United States and other
              countries.
            </p>

            <p>
              To learn more about how we process your personal data, please
              review our current Privacy Policy. Please note that we may revise
              the Policy from time to time. Therefore, you should review the
              Policy periodically so that you are up-to-date on our most current
              policies and practices. You may also request information by
              sending an email to
              <a
                href="https://web.archive.org/web/20200215110240/mailto:privacy@mediapal.net"
                >privacy@mediapal.net</a
              >.
            </p>

            <p>
              If you wish to withdraw your consent from all MediaPal marketing
              or make a request to obtain, modify, correct, or delete your data,
              please send an email to
              <a
                href="https://web.archive.org/web/20200215110240/mailto:privacy@mediapal.net"
                >privacy@mediapal.net</a
              >. You can unsubscribe from MediaPal emails by using the
              unsubscribe links that accompany all the emails.
            </p>

            <p>
              To know more about GDPR,
              <a
                href="https://ec.europa.eu/commission/priorities/justice-and-fundamental-rights/data-protection/2018-reform-eu-data-protection-rules_en"
                target="_blank"
                >visit EC website here</a
              >.
            </p>
          </div>
          <!-- /.container -->
        </div>
        <!-- /.light-wrapper -->
      </div>
      <!-- /.content-wrapper -->
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteFooter from "./SiteFooter.vue";

export default {
  name: "GDPR",
  components: {
    SiteFooter,
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
@import '../../../public/css/app.css';

.wrapper{
  padding: 2rem 0;
  background: #ecf4f6;
  /* border: 1px solid red; */
}

.container {
  /* border: 1px solid black; */
  margin-top: 5rem;
  /* padding: 3rem 0; */
}

.row{
  color: #257282;
}

.section-title{
  margin-bottom: 2rem;
}

h4 {
  font-family: "Montserrat", sans-serif !important;
  color: #fda041;
  letter-spacing: 0.05rem !important;
  font-weight: 400;
  font-size: 1.1rem !important;
  margin: 1rem 0;
}

p {
  /* color: initial; */
  font-size: 0.9rem !important;
  line-height: 1.2rem;
}

li {
  font-size: 0.9rem !important;
}
</style>