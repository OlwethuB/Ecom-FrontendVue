<template>
  <!-- Cart part -->
  <div class="cart-btn" data-bs-toggle="modal" data-bs-target="#cartModal" href="#" >
    <i id="cart" class="fas fa-cart-shopping"></i>

    <span class="cart-quantity">{{ AddToCart }}</span>
  </div>

  <!-- Home page... Slide show of popular picks -->
  <!-- Preview carasoule -->

  <section id="Carousel" class="bg-secondary">
    <div
      id="carouselExampleIndicators"
      class="carousel slide p-5"
      data-bs-ride="carousel"
    >
      <button
        class="carousel-control-prev caro-btn"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next caro-btn"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      <div class="carousel-inner p-5 justify-content-center align-self-center">
        <div class="carousel-item active cara">
          <img
            src="https://i.postimg.cc/VNZkRQwm/hitchhikerguide.jpg"
            class="float-end d-flex w-50 p-5 cat-img"
            alt="..."
            loading="eager"
          />
          <div class="text-center m-5 w-50">
            <h3>The Hitchhiker’s Guide to the Galaxy</h3>
            <h4>Douglas Adams</h4>
            <p>
              a satire on what happens around the world and what we're doing to
              our planet and is still relevant today. In the story, Vogons are
              an alien race destroying planets to make way for construction of a
              new hyperspace bypass.
            </p>
          </div>
        </div>
        <div class="carousel-item cara justify-content-center">
          <img
            src="https://i.postimg.cc/gc80R3j7/honey-spice.jpg"
            class="float-end d-block w-50 p-5 cat-img"
            alt="..."
          />
          <div class="text-center m-5 w-50">
            <h3>Honey and Spice: A Reese's Book Club Pick</h3>
            <h4>Bolu Babalola</h4>
            <p>
              Honey and Spice is centered around Kikiola Banjo, a college
              student and aspiring journalist, who meets Malakai Korede, an
              enigmatic and charming transfer student. The ensuing story draws
              upon romance tropes that the TikTok community is currently
              fascinated by: fake dating, enemies-to-lovers, and university
              love.
            </p>
          </div>
        </div>
        <div class="carousel-item cara">
          <img
            src="https://i.postimg.cc/9QsJq3rZ/9781449489755-pdpxl.jpg"
            class="float-end d-block w-50 p-2 cat-img"
            alt="..."
          />
          <div class="text-center m-5">
            <h3>Pillow Thoughts</h3>
            <h4>Courtney Peppernellr</h4>
            <p>
              Pillow Thoughts is a collection of poetry and prose about
              heartbreak, love, and raw emotions. It is divided into section to
              read when you feel you need them most. Make a cup of tea and let
              yourself feel. Pillow Thoughts is a collection of poetry and prose
              about heartbreak, love, and raw emotions.
            </p>
          </div>
        </div>
        <div class="carousel-item cara">
          <img
            src="https://i.postimg.cc/xCXfpz9W/image.jpg"
            class="float-end d-block h w-50 p-2 cat-img"
            alt="..."
            loading="eager"
          />
          <div class="text-center m-5">
            <h3>Atomic Habits</h3>
            <h4>James Clear</h4>
            <p>
              Atomic Habits is all about making small improvements -
              unnoticeable on a day-to-day basis but far more meaningful in the
              long run. Little decisions and choices made over and over will
              start to add up and create significant results
            </p>
          </div>
        </div>
        <div class="carousel-item cara">
          <img
            src="https://i.postimg.cc/3JLmkwfx/Noughts-and-crosses.jpg"
            class="float-end d-block w-50 p-2 cat-img"
            alt="..."
          />
          <div class="text-center m-5">
            <h3>Noughts & Crosses (Graphic Novel)</h3>
            <h4>Ian Edginton/Novel by Malorie Blackman</h4>
            <p>
              Noughts & Crosses by Malorie Blackman is a novel set in a
              dystopian Britain in which society is divided by racism .
              Dark-skinned Crosses are privileged in society over the
              light-skinned noughts. Against the odds, the main characters,
              Sephy and Callum, fall in love across the divide which leads them
              into danger
            </p>
          </div>
        </div>
        <div class="carousel-item row cara">
          <img
            src="https://i.postimg.cc/hjrhNCHt/Steve-Jobs.jpg"
            class="float-end d-block w-50 p-2 cat-img"
            alt="..."
          />
          <div class="text-center m-5">
            <h3>Steve Jobs</h3>
            <h4>Walter Isaacson</h4>
            <p>
              The book highlights several of his multifold leadership traits,
              forcing you to overlook his negative qualities. If you appreciate
              and admire Steve Jobs and his accomplishments, this is a book that
              is especially worth reading.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div class="carousel-indicators mt-5">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
      </div>
    </div>
  </section>

  <!-- Products -->
  <main>
    <br />
    <h1 class="text-center">Library</h1>
    <br />
    <div class="selection">
        <label>Search : </label>
        <input type="text" v-model="search" placeholder="Search..." />
        <br>
      <button @click="sortPrice">Sort by Price</button>
      <select v-model="category">
        <option value="All">All</option>
        <option value="Novel">Novel</option>
        <option value="Romance">Romance</option>
        <option value="Poetry">Poetry</option>
        <option value="Self-help">Self-help</option>
        <option value="Comics">Comics</option>
        <option value="Biography">Biography</option>
      </select>
    </div>
    <br>
    <div v-if="books" class="flex-container">
      <CardComp v-for="book of books" :key="book.id" :book="book" />
    </div>
    <div v-else><b>Loading...</b></div>
  </main>
</template>

<script>
import CardComp from "@/components/Card.vue";

export default {
  data() {
    return {
      search: "",
      area: "All",
      category: "All",
    };
  },
  methods: {
    sortPrice() {
      this.$store.commit("sortBooksByPrice");
    },
  },
  computed: {
    books() {
      return this.$store.state.books?.filter((book) => {
        let isMatch = true;
        if (!book.name.toLowerCase().includes(this.search.toLowerCase())) {
          isMatch = false;
        }
        if (this.category !== "All" && this.category !== book.category) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },
  mounted() {
    this.$store.dispatch("getBooks");
  },
  components: { CardComp },
};
</script>

<style>
/* for the "grid/flexbox" I guess */
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

/* Preview carousel */
section {
  background-color: #123f92 !important;
}

.carousel-indicators button.thumbnail {
  width: 100px;
  /* margin-top: 30px; */
}
.carousel-indicators button.thumbnail:not(.active) {
  opacity: 0.7;
}
.carousel-indicators {
  position: static;
}
@media screen and (min-width: 992px) {
  .carousel {
    max-width: 70%;
    margin: auto;
  }
}

.cat-img {
  width: 400px !important;
  height: 500px !important;
  object-fit: contain;
}
.cara {
  font-family: "Lora", serif;
}
.cara h3 {
  font-size: 50px;
}
.cara h4 {
  font-size: 40px;
}
.cara p {
  font-size: 20px;
}

@media (max-width: 662px) {
  .cara h3 {
    font-size: 25px;
    text-align: center;
  }
  .cara h4 {
    font-size: 20px;
    text-align: center;
  }
  .cara p {
    font-size: 14px;
    text-align: center;
  }
  .cara img {
    width: 200px !important;
    height: 100px !important;
    object-fit: cover;
  }
}

/* Products */
main {
  min-height: 100vh;
  background-color: #123f92;
  color: #fff;
}

main h1 {
  font-size: 70px;
  font-family: "Lora", serif;
}

.selection{
    margin-left: 35%;
}
</style>
