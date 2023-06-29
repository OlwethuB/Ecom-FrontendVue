<template>
    <!-- Cart part -->
    <div class="cart-btn" data-bs-toggle="modal" data-bs-target="#cartModal" href="#" >
        <i id="cart" class="fas fa-cart-shopping"></i>

        <span class="cart-quantity">{{ AddToCart }}</span>
    </div>
  <main>
    <br />
    <div v-if="book" class="book-details">
      <br />
      <img :src="book.image" :alt="book.name" />
      <div>
        <h3>{{ book.name }}</h3>
        <h4>By {{ book.author }}</h4>
        <p>{{ book.desc }}</p>
        <p>Category: {{ book.category }}</p>
        <p>Price: {{ book.price }}</p>
        <button id="addCart" @click="AddToCart++">Add to Cart</button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
const AddToCart = ref(0);
</script>
<script>
export default {
  props: ["id"],
  computed: {
    book() {
      return this.$store.state.book;
    },
  },
  mounted() {
    this.$store.dispatch("getBook", this.id);
  },
};
</script>

<style>

/* Add to cart Button */
.cart-btn {
color: #ff0404;
text-decoration: none;
border-radius: 4px;
padding: 7px 25px 8px 25px;
white-space: nowrap;
transition: 0.3s;
font-size: 14px;
display: inline-block;
border: 2px solid #123f92;
}

.cart-btn:hover {
background-color: #123f92;
color: #fff;
}

@media (max-width: 992px) {
.cart-btn {
  padding: 7px 20px 8px 20px;
  margin-right: 15px;
}
}

.book-details {
  display: flex;
  /* word-break: break-all;
    word-wrap: break-word; */
  align-content: center;
  align-items: center;
  padding: auto;
  min-height: 100vh;
  text-align: center;
  margin-left: 10%;
  padding: 50px;
  width: 900px;
}

@media screen and (max-width: 900px) {
  .book-details {
    width: 700px;
  }
}
img {
  width: 800px;
  /* padding: 10px; */
}

@media screen and (max-width: 700px) {
  .book-details {
    width: 600px;
  }
  img {
    width: 500px;
  }
}
@media screen and (max-width: 500px) {
  .book-details {
    margin-left: 0%;
    width: 450px;
  }
  img {
    width: 300px;
  }
}
@media screen and (max-width: 300px) {
  .book-details {
    margin-left: 0%;
    width: 250px;
    word-break: break-all;
    word-wrap: break-word;
  }
  img {
    width: 200px;
  }
}
main {
  background-color: #123f92;
}

#addCart {
  color: #100f0f;
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
  font-weight: 500;
  border: 2px solid #123f92 !important;
  background-color: #fff;
}
</style>
