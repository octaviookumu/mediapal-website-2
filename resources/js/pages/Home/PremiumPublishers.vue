<template>
  <div class="parent">
    <h2>Connecting to your Premium Publishers</h2>
    <p>
      Work with the best Premium Publishers and have access to 3M+ publishers
      and apps.
    </p>
    <!-- <img
      :src="require('../../../assets/images/premium-publishers.png').default"
      alt=""
    /> -->
    <img
      class="people"
      :src="
        require('../../../assets/images/premium-publishers-people.png').default
      "
      alt=""
    />
    <img
      class="logos elem animated"
      data-animate="shake"
      :src="
        require('../../../assets/images/premium-publishers-logos.png').default
      "
      alt=""
    />

    <!-- <div class="elem animated" data-animate="shake">shake</div>
<div class="elem animated" data-animate="tada">tada</div>
<div class="elem animated" data-animate="wobble">wobble</div> -->

    <!-- <div class="container">
            
        </div> -->
  </div>
</template>

<script>
export default {
  name: "PremiumPublishers",
  mounted() {
    $(window).on("load scroll", function () {
      var elem = $(".animated");

      elem.each(function () {
        var isAnimate = $(this).data("animate");
        var elemOffset = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();

        if (scrollPos > elemOffset - wh + wh / 2) {
          $(this).addClass(isAnimate);
        } else {
          $(this).removeClass(isAnimate);
        }
      });
    });
  },
  //   mounted(){
  //     var b = document.querySelector(".logos");

  // b.addEventListener("mousemove", function(event) {
  //   console.log(b)
  //   parallaxed(event);

  // });

  // function parallaxed(e) {
  //       var amountMovedX = (e.clientX * -0.1 / 8);
  //       var amountMovedY = (e.clientY * -0.1 / 8);
  //       var x = document.getElementsByClassName("parallaxed");
  //       var i;
  //       for (i = 0; i < x.length; i++) {
  //         x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
  //       }
  // }
  //   }
};
</script>

<style lang="scss" scoped>
.parent {
  /* background: url('../../../assets/images/premium-publishers.png');
    background-size: 100% 100%;
    background-position: center; */
  position: relative;
  text-align: center;
  padding: 1.5rem 0 0 0;
  height: 140vh;

  h2 {
    color: #257282;
    letter-spacing: 0.1rem;
    margin-top: 5rem;
    font-size: 3rem;
    /* margin: 4rem 1rem 1rem 1rem; */
  }

  p {
    text-align: center;
    width: 35%;
    margin: 0 auto;
  }
}

img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  /* right: 0; */
  /* bottom: 0; */
  /* z-index: -1; */
  /* position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1; */
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* display: block;
  object-fit: contain; */
  /* border: 1px solid red; */
}

.people {
  z-index: -1;
}

.logos {
  z-index: 3;
  transition: all 0.2s;
  /* border: 1px solid red; */
  /* margin-left: 1rem; */
}

@media (max-width: 480px){
  .parent {
  /* background: url('../../../assets/images/premium-publishers.png');
    background-size: 100% 100%;
    background-position: center; */


  position: relative;
text-align: center;
padding: 1.5rem 0 0 0;
height: 60vh;


  h2 {
font-size: 2.5rem;
letter-spacing: 0.15rem;
width: 60%;
margin: 0rem auto 0;
line-height: 2.5rem;
  }

  /* h2 {
    color: #257282;
    letter-spacing: 0.1rem;
    margin-top: 5rem;
  } */

  p {
    text-align: center;
    font-size: .8rem;
    width: 85%;
    margin: 0 auto;
  }
}

img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  /* right: 0; */
  /* bottom: 0; */
  /* z-index: -1; */
  /* position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1; */
    /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* display: block;
  object-fit: contain; */
  /* border: 1px solid red; */
}

.people {
  z-index: -1;
  /* border: 1px solid blue; */
}

.logos {
  z-index: 3;
  transition: all 0.2s;
  /* border: 1px solid red; */
  /* margin-left: 1rem; */
}
}
</style>