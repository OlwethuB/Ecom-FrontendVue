<template>
      <footer> 
      <br />
      <div class="icons text-center p-2">
        <a class="m-1" href="http://spittoon.co.uk/wp-content/uploads/2019/01/error-meme.jpg"><i class="fa fa-phone icon"></i></a>
        <a class="m-1" href="https://media.makeameme.org/created/hello-rtr56j.jpg"><i class="fa fa-envelope icon"></i></a>
        <a class="m-1" href="https://goo.gl/maps/qnR6RGGvVR6MZyDb6?coh=178573&entry=tt"><i class="fa-brands fa-instagram icon"></i></a>
        <a class="m-1" href="https://goo.gl/maps/qnR6RGGvVR6MZyDb6?coh=178573&entry=tt"><i class="fa fa-location-dot icon"></i></a>
        <router-link class="m-1" to="/website"><i class="fa fa-globe icon"></i></router-link>
      </div>
      <br />
      <div class="container mb-2 text-center">
        <div class="row align-items-end">
          <div class="col">
            <router-link class="me-2 foot" to="/about">Story</router-link>
            <router-link class="me-2 foot" to="/books">Books</router-link>
            <router-link class="me-2 foot" to="/admin">Admin</router-link>
            <router-link class="me-2 foot" to="/contact">Contact Us</router-link>
          </div>
          <h3 class="col foot_title">Esoteric</h3>
          <div class="col copyright">© Copyright by Olwethu | 2023</div>
        </div>
      </div>
      <br />
    </footer>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400&family=Roboto&family=Rubik&display=swap');
/* footer */

footer {
  background-color: #042a5b;
  font-family: 'Rubik', sans-serif;
  color: #fff;
} 
.foot {
  text-decoration: none;
  font-size: 15px;
  color: #fff;
  font-weight: 600;
}
@media (max-width: 550px){
  .foot {
    font-size: 10px;
  }
}

.foot:hover {
  color: #2c75a9;
font-weight: 700;
}

.copyright {
  font-weight: 500;
}

.foot_title {
  font-family: "Lora", serif;
  color:#000;
  font-weight: 600;
  font-style: italic;
}

.icon {
  width: 100px;
      color: #000;
      font-size: 22px;
    } 
@media (max-width: 750px) {
  .icon{
    font-size: 20px;
  }
} 
</style>