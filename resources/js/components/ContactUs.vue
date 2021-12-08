<template>
  <div>
    <div class="parent">
      <div class="contact-us">
        <h2>Contact us</h2>
        <p>Get in touch, let's talk about your project</p>
        <span>{{ email }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  props: {
    email: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.parent {
  /* border: 1px solid black; */
  margin: 0;

  h2{
    font-size: 3rem;
    letter-spacing: .2rem;
  }

  p{
    color: grey;
    /* border: 1px solid black; */
    margin-bottom: -.2rem;
  }
}

.contact-us {
  /* border: 1px solid red; */
  text-align: center !important;
  max-width: 50%;
  margin: auto;
  padding: 6rem 0;

  span{
    margin-top: -1rem;
    color: orange;
    /* border: 1px solid red; */
  }
}

@media (max-width: 480px){
  

.contact-us {
  /* border: 1px solid red; */
  text-align: center !important;
  max-width: 100%;
  /* margin: auto; */
  /* padding: 3rem; */

  
}
}
</style>