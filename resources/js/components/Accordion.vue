<template>
  <div class="accordion-list">
    <div
      v-for="(card, i) in benefits"
      :key="i"
      class="accordion-card"
      @click="getItem(card)"
      :id="card.id"
    >
      <div class="accordion-title">
        <figure>
          <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 .799l4 4 4-4"
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </figure>
        <h6>{{ card.title }}</h6>
      </div>
      <p>
        {{ card.body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    benefits: {
      type: Array,
    },
  },
  data() {
    return {
      accordion: null,
      items: null,
    };
  },
  mounted() {
    this.selectTags();
  },
  methods: {
    selectTags() {
      this.accordion = document.querySelectorAll(".accordion-list");
      // console.log(this.accordion)
      // console.log(this.accordion.length)
      // console.log(this.accordion[0])
      // console.log(this.accordion[1])
      if (this.accordion.length === 1) {
        this.items = this.accordion[0].querySelectorAll(".accordion-card");
        // console.log("1", this.items)
      } else if (this.accordion.length === 2) {
        this.items = [
          ...this.accordion[0].querySelectorAll(".accordion-card"),
          ...this.accordion[1].querySelectorAll(".accordion-card"),
        ];
        // console.log("2", this.items)
      }
    },
    getItem(card) {
      card.isOpen = card.isOpen ? false : true;
      this.items.forEach((item) => {
        if (parseInt(item.id) === card.id) {
          item.classList.toggle("open");
          if (item.className.includes("open")) {
            item.style.cssText = `height: ${this.cardHeight}`;
          } else {
            item.style.cssText = "height: 4rem";
          }
          return;
        }
        item.classList.remove("open");
        item.style.cssText = "height: 4rem";
        //  console.log("ITEM 1", this.items[0])
        // console.log("ITEM", item)
      });
    },
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    cardHeight() {
      switch (this.currentRouteName) {
        case "dsp":
          return "190px";
        case "supply":
          return "220px";
        case "audiences":
          return "220px";
        case "social":
          return "220px";
        default:
          return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$card-dark: #69a1ab;
$card-light: #ecf4f6;

.accordion {
  &-list {
    width: 100%;
    /* height: 100%; */
    /* height: 200px; */
    /* border: 1px solid blue; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    /* width: 80%; */
    /* margin: auto; */
    text-align: left !important;

    h6 {
      margin-left: 1rem;
      color: $card-dark;
      font-weight: 500;
      /* border: 1px solid red; */
      padding-top: 0.2rem;
      font-family: "Montserrat", sans-serif;
      /* color: #69a1ab; */
      /* font-size: .8rem; */
      font-size: 1rem;
    }

    p {
      max-height: 0;
      overflow: hidden;
      color: $card-dark;
      line-height: 18px;
      font-size: 0.85rem !important;
      margin-left: 1.5rem;
      -webkit-transition: all 0.45s ease-in-out;
      transition: all 0.45s ease-in-out;
      font-family: "Montserrat", sans-serif;
    }

    figure {
      margin-left: 1rem;
      color: orange;

      /* border: 1px solid red; */
      margin-top: 5px !important;

      /* width: 20px;
        height: 20px; */

      svg {
        /* fill: red !important; */
        /* stroke: #69a1ab; */
        stroke: orange;
        /* margin-top: 5px !important; */
      }
    }
  }

  &-card {
    border: 1px solid lightgrey;
    border-radius: 5px;
    padding: 0.1rem;
    height: 4rem;
    -webkit-transition: all 0.45s ease-in-out;
    transition: all 0.45s ease-in-out;
    cursor: pointer;
    background-color: #fff;
  }

  &-title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    /* -webkit-box-pack: justify;
      -ms-flex-pack: justify; */
    /* justify-content: space-between; */
    padding: 10px 0;
    cursor: pointer;
    color: $card-dark;
    /* border: 1px solid black; */

    /* &:hover {
      color: #f47c57;
    } */
  }
}

/* .flex-column-center {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
} */

/* .accordion-list .accordion-card {
  border-bottom: 2px solid #e7e7e9;
} */

/* h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
} */

.accordion-card.open {
  height: 260px;
  background-color: #fff;

  p {
    max-height: 160px;
    padding: 0 5px 10px 0;
    overflow: scroll;
  }

  figure {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    color: #fda041;
  }
}
</style>
