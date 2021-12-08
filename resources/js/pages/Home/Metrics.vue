<template>
  <div class="parent">
    <h2>Key Metrics</h2>
    <div class="metrics-section">
      <div class="metric metric-1">
        <div class="content content-1">
          <p>1T+</p>
          <p>Impressions</p>
        </div>
        <img
          :src="require('../../../assets/images/metric-1.png').default"
          alt=""
        />
      </div>
      <div class="metric metric-2">
        <div class="content content-2">
          <p>1.5B+</p>
          <p>Profiled Users</p>
        </div>
        <img
          :src="require('../../../assets/images/metric-2.png').default"
          alt=""
        />
      </div>
      <div class="metric metric-3">
        <div class="content content-3">
          <p>20+</p>
          <p>Ad Formats</p>
        </div>
        <img
          :src="require('../../../assets/images/metric-3.png').default"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ScrollTrigger } from "../../../../public/js/gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Metrics",
  mounted() {
    this.triggerAnimations();
  },
  methods: {
    triggerAnimations() {
      $(document).ready(function () {
        var controller = new ScrollMagic.Controller();

        var yoyo_bulb = new TimelineMax();
        yoyo_bulb.staggerFrom(
          [".content-1", ".content-2", ".content-3"],
          1,
          {
            opacity: 0,
            scale: 0,
            transformOrigin: "center center",
            ease: Elastic.easeOut.config(1, 0),
          },
          0.5
        );

        var bulb_circles = new ScrollMagic.Scene({
          triggerElement: ".content-1",
          triggerHook: 1,
        })
          .setTween(yoyo_bulb)
          .addTo(controller);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.parent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
  background: #ecf4f6;
  padding: 3rem 0;
  /* border: 1px solid black; */
}

h2 {
  text-align: center !important;
  font-size: 3rem;
  letter-spacing: 0.1rem;
  margin-top: 1rem;
}

.metrics-section {
  /* border: 1px solid red; */
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;

  .metric {
    /* border: 1px solid black; */
    position: relative;

    .content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      /* border: 1px solid green; */
      /* visibility: hidden; */

      p {
        /* border: 1px solid red; */
        margin: 0;
        color: #257282;

        &:first-of-type {
          font-size: 4rem !important;
          font-family: "brigadiersansregular" !important;
          line-height: 4rem;
          letter-spacing: 0.1rem;
        }
        &:last-of-type {
          font-size: 0.9rem !important;
          font-weight: 600;
        }
      }
    }

    img {
      width: 100%;
      /* border: 1px solid blue; */
    }
  }

  .metric-1 {
    flex-basis: 30%;
  }

  .metric-2 {
    flex-basis: 40%;
    margin: auto 1rem;

    .content-2{
        p {

        &:first-of-type {
          font-size: 5.8rem !important;
          line-height: 6rem;
        }
        &:last-of-type {
          font-size: 1.1rem !important;
        }
      }
      
    }
  }

  .metric-3 {
    flex-basis: 30%;
  }
}

@media (max-width: 480px) {
  .parent {
    padding: 1rem 0 3rem 0;
    /* border: 1px solid red; */
  }

  .metrics-section {
    /* border: 1px solid red; */
    width: 95%;
    margin: 1rem 0;
    /* border: 1px solid blue; */

    .metric {
      /* border: 1px solid black; */
      position: relative;

      .content {
        p {
          &:first-of-type {
            font-size: 1.8rem !important;
            font-family: "brigadiersansregular" !important;
            line-height: 1.8rem;
            letter-spacing: 0.1rem;
          }
          &:last-of-type {
            font-size: 0.6rem !important;
            font-weight: 600;
          }
        }
      }
    }

    .metric-2 {
      margin: auto 1rem;
    }
  }
}
</style>
