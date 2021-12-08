<template>
  <div class="ftco-section">

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

    <div class="header">
      <h1>Contact</h1>
      <p>
        Ask about out MediaPal products, pricing, implementation or anything
        else. <br />
        Our knowledgeable reps are standing by, ready to help.
      </p>
    </div>

    <div class="contact-parent">
      <div class="overlay"></div>
    <div class="contact-container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="wrapper">
            <div class="row no-gutters">
              <div class="col-md-6 d-flex align-items-stretch">
                <div class="contact-wrap w-100 p-md-5 p-4 py-5">
                  <div id="form-message-warning" class="mb-4"></div>
                  <div id="form-message-success" class="mb-4">
                    Your message was sent, thank you!
                  </div>
                  <form id="contactForm" name="contactForm" class="contactForm">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="firstname">First Name</label>
                          <input
                            type="text"
                            class="form-control"
                            name="firstname"
                            id="firstname"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="lastname">Last Name</label>
                          <input
                            type="text"
                            class="form-control"
                            name="lastname"
                            id="lastname"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="companyname">Company Name</label>
                          <input
                            type="text"
                            class="form-control"
                            name="companyname"
                            id="companyname"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="email">Email</label>
                          <input
                            type="email"
                            class="form-control"
                            name="email"
                            id="email"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="phone">Phone</label>
                          <input
                            type="number"
                            class="form-control"
                            name="phone"
                            id="phone"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="message">How can we help you?</label>
                          <textarea
                            name="message"
                            class="form-control"
                            id="message"
                            cols="30"
                            rows="6"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="submit"
                            value="Send Message"
                            class="btn submit-btn btn-primary"
                          />
                          <div class="submitting"></div>
                        </div>
                        <!-- <span
                          style="
                            font-size: 0.55rem;
                            line-height: .6rem;
                            display: inline-block;
                          "
                          >The information you provide will be used in
                          accordance with the terms of our privacy policy.</span
                        > -->
                      </div>
                      <div class="col-md-12">
                        <p
                          style="
                            font-size: 0.6rem;
                            line-height: 0.6rem;
                            display: inline-block;
                            margin-left: 1rem;
                            color: grey;
                          "
                          >The information you provide will be used in
                          accordance with the terms of our privacy policy.</p
                        >
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-md-6 d-flex align-items-stretch">
                <div
                  class="info-wrap w-100 p-md-5 p-4 py-5 d-flex contact-section"
                >
                <img
                  class="dotted-grid"
                  :src="require('../../../assets/images/dotted-grid.png').default"
                  alt=""
                />
                  <div class="dbox w-100 d-flex contact-subsection">
                    <div
                      class="contact-card"
                      style="display: flex; flex-direction: column"
                    >
                      <div
                        class="contact-card-header"
                        style="
                          display: flex;
                          align-items: center;
                          justify-content: flex-start;
                        "
                      >
                        <div class="image-div">
                          <img
                            class="img-1"
                            :src="
                              require('../../../assets/images/contact-mockup-1.png')
                                .default
                            "
                            alt=""
                          />
                        </div>
                        <p>PHONE</p>
                      </div>
                      <div class="contact-card-text">
                        <p>
                          Our customer care is open from Mon-Fri. <br />
                          9:00 am to 6:00 pm
                        </p>
                        <p>(+254) 794 891 999</p>
                      </div>
                    </div>

                    <div
                      class="contact-card"
                      style="
                        display: flex;
                        flex-direction: column;
                        margin-top: 1rem;
                      "
                    >
                      <div
                        class="contact-card-header"
                        style="
                          display: flex;
                          align-items: center;
                          justify-content: flex-start;
                        "
                      >
                        <div class="image-div">
                          <img
                            class="img-1"
                            :src="
                              require('../../../assets/images/contact-mockup-2.png')
                                .default
                            "
                            alt=""
                          />
                        </div>
                        <p>EMAIL</p>
                      </div>
                      <div class="contact-card-text">
                        <p>
                          Our support team will get back to you <br />
                          immediately during standard business hours.
                        </p>
                        <p>info@mediapal.net</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div class="offices" style="position: relative;">
      <h2>Our Offices</h2>
      <div class="locations">
        <div class="location">
          <div class="country">
            <img
              :src="
                require('../../../assets/images/contact-office-1.png').default
              "
              alt=""
            />
            <p>Kenya</p>
          </div>
          <div class="map">
            <p>
              MediaPal Complex <br />
              Nairobi
            </p>
            <!-- <a
              href="https://goo.gl/maps/nJ81JwfZfe4WU4aM8"
              target="_blank"
            >
              View on map</a
            > -->
          </div>
        </div>
        <div class="location">
          <div class="country">
            <img
              :src="
                require('../../../assets/images/contact-office-2.png').default
              "
              alt=""
            />
            <p>San Francisco</p>
          </div>
          <div class="map">
            <p>
              39 East 8th St. <br />
              San Francisco, CA 94110
            </p>
            <!-- <a
              href="https://goo.gl/maps/QHMPBpZi3J4aKB2R6"
              target="_blank"
            >
              View on map</a
            > -->
          </div>
        </div>
        <div class="location">
          <div class="country">
            <img
              :src="
                require('../../../assets/images/contact-office-3.png').default
              "
              alt=""
            />
            <p>South Africa</p>
          </div>
          <div class="map">
            <p>
              Braampark, Johannesburg
            </p>
            <!-- <a
              href="https://goo.gl/maps/zGsJGSVXqx5S3tMZ8"
              target="_blank"
            >
              View on map</a
            > -->
          </div>
        </div>
        <div class="location">
          <div class="country">
            <img
              :src="
                require('../../../assets/images/contact-office-4.png').default
              "
              alt=""
            />
            <p>Nigeria</p>
          </div>
          <div class="map">
            <p>
              Victoria Island <br />
              Lagos
            </p>
            <!-- <a
              href="https://goo.gl/maps/MDBwTey2138tRMj5A"
              target="_blank"
            >
              View on map</a
            > -->
          </div>
        </div>
      </div>
    </div>

    <site-footer></site-footer>
  </div>
</template>

<script>
import axios from "axios";
import SiteFooter from "../../components/SiteFooter.vue";

export default {
  components: { SiteFooter },
  name: "contact",
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
  mounted() {
    (function ($) {
      "use strict";

      // Form
      var contactForm = function () {
        if ($("#contactForm").length > 0) {
          $("#contactForm").validate({
            rules: {
              firstname: "required",
              lastname: "required",
              companyname: "required",
              subject: "required",
              phone: {
                required: true,
                digits: true,
              },
              email: {
                required: true,
                email: true,
              },
              message: {
                required: true,
              },
            },
            messages: {
              firstname: "Please enter your first name",
              lastname: "Please enter your last name",
              companyname: "Please enter your company name",
              phone: "Please enter your phone number",
              email: "Please enter a valid email address",
              message: "Please enter a message",
            },

            /* submit via ajax */
            submitHandler: function (form) {
              var $submit = $(".submitting"),
                waitText = "Submitting...";
              console.log(waitText);
              console.log($(form).find('input[name="phone"]').val());
              let contact = {
                firstname: $(form).find('input[name="firstname"]').val(),
                lastname: $(form).find('input[name="lastname"]').val(),
                companyname: $(form).find('input[name="companyname"]').val(),
                message: $(form).find("textarea#message").val(),
                email: $(form).find('input[name="email"]').val(),
                phone: $(form).find('input[name="phone"]').val(),
              };
              //  console.log(contact);

              axios
                .post("store-contact", contact)
                .then((response) => {
                  console.log(response);
                  if (response.status == 200) {
                    $("#form-message-warning").hide();
                    setTimeout(function () {
                      $("#contactForm").fadeIn();
                    }, 1000);
                    setTimeout(function () {
                      $("#form-message-success").fadeIn();
                    }, 1400);

                    setTimeout(function () {
                      $("#form-message-success").fadeOut();
                    }, 8000);

                    setTimeout(function () {
                      $submit.css("display", "none").text(waitText);
                    }, 1400);

                    setTimeout(function () {
                      $("#contactForm").each(function () {
                        this.reset();
                      });
                    }, 1400);
                  } else {
                    $("#form-message-warning").html(msg);
                    $("#form-message-warning").fadeIn();
                    $submit.css("display", "none");
                  }
                })
                .catch((err) => {
                  console.log("Error MSG", err);
                  // $('#form-message-warning').html(msg);
                  $("#form-message-warning").fadeIn();
                  $submit.css("display", "none");
                });
            }, // end submitHandler
          });
        }
      };
      contactForm();
    })(jQuery);
  },
};
</script>


<style lang="scss" scoped>
.ftco-section {
  /* border: 1px solid red; */
  padding-bottom: 0 !important;

  .header {
    /* border: 1px solid black; */
    /* margin-left: 8rem; */
    width: 75%;
    margin: 2rem auto 2rem auto;

    h1 {
      color: #257282;
      font-size: 6rem;
      letter-spacing: 0.2rem;
      /* border: 1px solid red; */
      line-height: 6rem;
      margin: 0;
      padding: 0;
    }

    p {
      font-size: 1rem;
      /* border: 1px solid blue; */
      font-size: 0.9rem;
      letter-spacing: 0.5px;
    }
  }
}

.contact-parent{
  position: relative;

  .overlay{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #f8fbfc;
    height: 70%;
    z-index: -3;
  }
}

.contact-container {
  width: 75%;
  /* border: 1px solid red; */
  margin: auto;
  position: relative;
  z-index: 2;
  background: #fff;

}

.contactForm {
  /* border: 1px solid blue; */
  width: 90%;

  .form-group {
    label {
      /* border: 1px solid red; */
      margin: 1.2rem auto 0;
      color: #257282;
      font-family: "Montserrat", sans-serif;
    }

    input {
      border-bottom: 2px solid #69a1ab;
      margin-top: 0;
      padding: 0 0;
      line-height: 1rem;
      height: 42px;
    }

    textarea {
      border: 2px solid #69a1ab;
      border-radius: 10px;
      margin-top: 1.2rem;
    }

    .btn {
      background-color: #257282 !important;
      border: none;
    }
  }
}

.contact-section {
  /* border: 1px solid red; */
  width: 100% !important;
  margin: 0 auto;
  align-items: start;
  justify-content: space-between;
  position: relative;

  .dotted-grid{
    width: 2.5rem;
    position: absolute;
    top: 10rem;
    left: 0;
    z-index: -2;
  }

  .contact-subsection {
    /* border: 1px solid blue; */
    padding: 1rem 1.5rem;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .contact-card {
    /* border: 1px solid red; */
    margin: 1rem 0;
    padding: 2rem;

    &:first-of-type {
      border-bottom: 1px solid lightgrey;
    }
  }

  .contact-card-header {
    /* border: 1px solid red; */

    .image-div {
      /* border: 1px solid black; */
      width: 20%;

      img {
        /* border: 1px solid red; */
        width: 100%;
      }
    }

    p {
      /* border: 1px solid blue; */
      margin-left: 1rem;
      font-size: 1rem;
      letter-spacing: 0.1rem;
      font-weight: 700;
    }
  }

  .contact-card-text {
    margin-top: 1.5rem;

    p {
      font-size: 1rem;
      line-height: 1.2rem;
      &:not(:last-of-type) {
        /* border: 1px solid red; */
        color: #646464;
      }

      &:last-of-type {
        color: #ffa548;
        font-weight: 600;
      }
    }
  }
}

.offices {
  /* border: 1px solid black; */
  /* margin-top: 2rem; */
  text-align: center;
  padding: 4rem 0 15rem 0;
  /* margin-bottom: 2rem; */
  background: url("../../../assets/images/contact-bg.png");
  background-repeat: no-repeat;
  background-size: cover;

  h2 {
    font-size: 3rem;
    color: #257282;
    letter-spacing: 0.3rem;
    font-weight: 300 !important;
    margin: 2rem 0;
  }
}

.locations {
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-areas: "div div div div";
  gap: 10px;
  /* grid-auto-columns: 200px; */
  grid-auto-columns: minmax(250px, auto);
  

  .location {
    /* height: 250px; */
    width: 250px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    position: relative;

    .country {
      flex-basis: 60%;
      position: relative;
      background: #fff;
      border-radius: 10px;

      img {
        width: 100%;
        z-index: 2 !important;
      }

      p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
        text-transform: uppercase;
        font-weight: 700;
        /* border: 1px solid red; */
        width: 100%;
        letter-spacing: 0.1rem;
        color: #257282;
      }
    }
    .map {
      flex-basis: 40%;
      padding: 1rem 0;
      background-color: #fff;
      border-radius: 0 0 10px 10px;

      p {
        color: initial;
        /* margin-top: 1rem; */
        font-size: 0.9rem;
        color: grey;
        font-weight: 500;
        padding: 0 2rem;
      }

      a{
        text-transform: uppercase;
        text-decoration: underline !important;
        font-size: .7rem;
        letter-spacing: .1rem;
        font-weight: 500;
      }
    }
  }
}

.submit-btn {
  width: 100%;
  padding: 4px;
  border-radius: 20px;
}
</style>