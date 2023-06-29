<template>
  <NavbarComp/>
  <router-view/>
  <FooterComp/>

</template>


<script>
import NavbarComp from './components/Navbar.vue';
import FooterComp from './components/Footer.vue';

export default{
  components: {NavbarComp,FooterComp}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400&family=Roboto&family=Rubik&display=swap');

</style>