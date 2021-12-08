<template>
    <div class="parent">
      <div class="content">
        <h2>Improve campaign performance</h2>
        <p>
          Advertisers are able to optimise campaigns on MediaPal in real-time in
          an attempt to increase performance. By following the digital marketing
          strategy framework, your team can quickly increase performance and
          maximise the desired business outcomes.
        </p>
      </div>

      <img
        class="dotted-grid"
        :src="require('../../../assets/images/dotted-grid.png').default"
        alt=""
      />

      <img class="lady-mobile" :src="require('../../../assets/images/lady-in-cafe(mobile).png').default" alt="">
    </div>
</template>

<script>
export default {
  name: "ImprovePerformance",
};
</script>

<style lang="scss" scoped>
.parent {
  margin: 0;
  position: relative;
  /* width: 100%; */
  /* max-height: 400px; */
  /* border: 1px solid red; */
  background: url("../../../assets/images/lady-in-cafe.png");
  background-size: 100% 100%;
  padding: 10rem 0;

  .dotted-grid {
    position: absolute;
    transform: rotate(90deg);
    /* bottom: 2rem; */
    top: -3.5rem;
    left: 12%;
    width: 3rem;
    /* z-index: -2; */
  }
}

.content {
  /* border: 1px solid black; */
  /* position: absolute; */
  max-width: 32%;
  margin-left: 16%;
  /* margin: 8rem; */
  /* margin-top: 1rem; */
  /* margin: 8rem 0 8rem 10rem; */

  h2 {
    /* font-size: 3.4rem !important; */
    /* letter-spacing: 0.2rem; */
    font-size: 3rem;
    color: #ecf4f6;
    /* font-size: 3rem; */
    /* margin: 2rem 1rem 1rem 1rem; */
  }

  p {
    /* font-size: 1.1rem; */
    color: #ecf4f6;
    font-weight: 300;
  }
}

.img {
  position: absolute;
  width: 100%;
  /* height: 100%; */
  left: 0;
  bottom: 0;
}

.lady-mobile{
  display: none;
}

@media (max-width: 480px){
  .parent {
  margin: 0;
  position: relative;
  /* width: 100%; */
  /* max-height: 400px; */
  /* border: 1px solid red; */
  background: none;
  /* background: url("../../../assets/images/lady-in-cafe.png");
  background-size: 100% 100%; */
  padding: 0;
  /* border: 1px solid red; */

  .dotted-grid {
    display: none;
  }

  .lady-mobile{
  display: block;
  width: 100%;
}

.content {
  /* border: 1px solid black; */
  /* position: absolute; */
  /* max-width: 32%; */
  /* margin-left: 0; */
  margin: 0;
  position: absolute;
  width: 100%;
  max-width: 90%;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  /* margin: 8rem; */
  /* margin-top: 1rem; */
  /* margin: 8rem 0 8rem 10rem; */

  h2 {
    /* font-size: 3.4rem !important; */
    /* letter-spacing: 0.2rem; */
    color: #ecf4f6;
    font-size: 2.5rem;
      text-transform: capitalize;
    /* margin: 2rem 1rem 1rem 1rem; */
  }

  p {
    /* font-size: 1.1rem; */
    color: #ecf4f6;
    font-weight: 300;
    font-size: .8rem;
  }


}
}
}
</style>