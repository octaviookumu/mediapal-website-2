<template>
  <div class="parent">
    <div class="chat">
      <h2>We love to chat</h2>
      <p>
        Ask about MediaPal products, pricing, implementation, or anything else.
        <br />
        Our knowledgeable reps are standing by, ready to help.
      </p>
      <router-link :to="{ name: 'contact' }" class="button-link"
        >Contact Us</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
};
</script>

<style lang="scss" scoped>
.parent {
  padding: 5rem 0;
}

.chat {
  /* border: 1px solid red; */
  text-align: center;
  max-width: 55%;
  margin: auto;
  

  h2 {
    font-size: 3rem;
    letter-spacing: 0.1rem;
    /* color: #ecf4f6; */
    /* margin: 2rem 1rem 1rem 1rem; */
  }


  .button-link{
    margin-top: 1.5rem;
    background: linear-gradient(90deg, #1bbd98 11%, #225577 100%);
    color: #fff;
    border: none;

    /* &:hover{
      color: orange;
      background: transparent;
      border-color: orange;
      border: 1px solid orange;
    } */
  }
}

/* button {
  border-radius: 20px;
  padding: 6px;
} */

@media (max-width: 480px) {
  .chat {
    max-width: 100%;
    padding: 2rem;

    h2 {
    font-size: 2.5rem;
    letter-spacing: 0.1rem;
  }

    p{
      font-size: .8rem;
    }
  }

  button {
    border-radius: 20px;
    padding: 3px 3px;
  }

  p {
    font-size: .8rem;
    }
}
</style>