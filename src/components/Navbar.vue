<template>
  <header id="header">
    <nav class="navbar">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img src="../assets/Copy.png" alt="logo" class="logo" width="65" height="50" loading="eager"/>
        </router-link>
        <!-- center stuff -->
        <ul class="nav m-auto justify-content-center">
          <li class="nav-item">
            <!-- <a id="links" class="nav-link active" aria-current="page" href="/">Home</a> -->
            <router-link to="/" id="links" class="nav-link active" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <!-- <a id="links" class="nav-link" href="/">Books</a> -->
            <router-link id="links" class="nav-link" to="/books">Books</router-link>
          </li>
          <li class="nav-item">
            <!-- <a id="links" class="nav-link" href="/">About</a> -->
            <router-link id="links" class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <!-- <a id="links" class="nav-link" href="/">Contact</a> -->
            <router-link id="links" class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
        <div v-if="!user"> ||<router-link id="links" to="/login">Login</router-link></div>
        <!-- Cart part -->
        <div class="cart-btn" data-bs-toggle="modal" data-bs-target="#cartModal" href="#">
          <i id="cart" class="fas fa-cart-shopping"></i>
          
          <span class="cart-quantity" >{{AddToCart}}</span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import {ref} from 'vue'
const AddToCart = ref(0)
</script>
<script>
export default {
    computed: {
        user() {
            return this.$store.state.user
        }
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400&family=Roboto&family=Rubik&display=swap');

/* Navigation */
header {
  top: 0;
  position: absolute;
  z-index: 1;
  width: 100%;

}

@media (max-width: 768px) {
header {
  height: auto;
  margin-bottom: 100px;
}}

.logo{
  width: 45px;
  height: 40px;

}

#links {
  color: #fff !important;
  font-size: 20px; 
  margin: 20px;
}

#links:hover{
  border-radius: 4px;
border: 4px solid #123f92;
margin: 15px;

}

@media (max-width: 862px) {
#links {
font-size: 20px;
margin: 5px;
}
#links:hover {
  border-radius: 2px;
  border: 2px solid #123f92;
margin: 5px;
}
}

@media (max-width: 662px) {
#links {
font-size: 12px;
margin: 5px;
}
#links:hover {
  border-radius: 2px;
  border: 2px solid #123f92;
margin: 2px ;
}
}


/* Add to cart Button */
.cart-btn {
color: #fff;
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

</style>