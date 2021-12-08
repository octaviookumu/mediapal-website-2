<template>
  <div class="parent">
    <div class="child">
      <div class="content">
        <h2>MediaPal Ad Manager</h2>
        <p>
          This is the starting point for running ads on MediaPal. It’s an
          all-in-one tool for creating ads, managing when and where they’ll run,
          and tracking how well your campaigns are performing.<br />MediaPal Ad
          Manager facilitates both the buying and selling of ads across multiple
          ad networks and locations allowing advertisers to cast a wider net and
          increase competition for ads.<br />It also provides incredibly
          detailed targeting and reporting options.
        </p>
      </div>

      <div class="image">
        <!-- <div class="image-div"> -->
          <img
            :src="
              require('../../../assets/images/dashboard-mockup.png').default
            "
            alt=""
          />
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdManager",
//   mounted(){
//     ScrollReveal().reveal('.image',{
//     delay: 375,
//     duration: 500,
//     reset: true
// });
//   }
};
</script>

<style lang="scss" scoped>
.parent {
  background-color: #ecf4f6;
  height: 80vh;
  /* border: 1px solid red; */
  display: grid;
  place-items: center;
}

.child {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 68%;
  margin: auto;
  /* padding: 4rem 0 4rem 1.5rem; */
  /* border: 1px solid black; */
  position: relative;

  .content {
    /* flex-basis: 40%; */
    /* margin-left: 10rem; */
    /* border: 1px solid blue; */
    /* padding: 4rem 0; */
    /* padding-left: 3rem; */
    position: absolute;
    top: 0;
    left: 0;
    width: 38%;
    margin-top: 4rem;

    h2 {
      font-size: 3rem;
      letter-spacing: 0.15rem;
      font-size: 400;
      /* border: 1px solid red; */
    }

    p {
      /* border: 1px solid red; */
      /* width: 370px; */
      width: 90%;
      /* line-height: 1.5rem; */
      /* font-size: 1.1rem !important; */
    }
  }

  .image {
    /* flex-basis: 60%; */
    /* border: 1px solid red; */
    width: 85%;
    /* height: 100%; */
    margin-left: 27%;
    /* display: grid;
    place-items: center; */
    img {
        width: 100%;
        /* width: 500px; */
        display: block;
        margin-left: auto;
        /* border: 1px solid blue; */
      }

    
  }
}

@media (max-width: 480px){
  .parent {
  background-color: #ecf4f6;
  height: 80vh;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
}

.child {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 90%;
  margin: auto;
  /* padding: 4rem 0 4rem 1.5rem; */
  /* border: 1px solid black; */
  position: relative;
  display: flex;
  flex-direction: column;

  .content {
    position: relative;
    /* width: 38%; */
    margin-top: 0;
    /* border: 1px solid red; */
    width: 100%;
    text-align: center;

    h2 {
      font-size: 2.5rem;
letter-spacing: 0.15rem;
      /* border: 1px solid red; */
    }

    p {
      text-align: center;
    font-size: .8rem;
    width: 95%;
    /* border: 1px solid blue; */
    margin: 0 auto 1rem;
    }
  }

  .image {
    /* flex-basis: 60%; */
    /* border: 1px solid blue; */
    width: 100%;
    /* height: 100%; */
    margin-left: 0;
    margin-right: 1rem;
    /* display: grid;
    place-items: center; */
    img {
        width: 90%;
        margin-right: 2rem;
      }

    
  }
}
}
</style>