<template>
  <router-link :to="{ name: 'Book', params: { id: book.id } }">
    <div class="card">
      <img :src="book.image" :alt="book.name" />
      <h3>{{ book.name }}</h3>
      <h4>By {{ book.author }}</h4>
      <p>Category: {{ book.category }}</p>
      <p>Price: {{ book.price }}</p>
      <button id="addCart" @click="AddToCart++">Add to Cart</button>
    </div>
  </router-link>
</template>

<script setup>
import {ref} from 'vue'
const AddToCart = ref(0)
</script>
<script>
export default {
  props: ["book"],
};
</script>

<style>
img {
  height: 300px;
  width: 200px;
  object-fit: cover;
}
.card{
    width: 250px;
    background-color: transparent;
}

#addCart {
        color: #100f0f;
    border-radius: 4px;
    padding: 8px;
    font-size: 14px;
    font-weight: 500;
    border: 2px solid #000000 !important;
    background-color: #fff ;
    text-decoration: none !important;
  } 
</style>
