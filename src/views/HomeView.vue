<template>

  <section id="Intro" class="d-flex align-items-center justify-content-center"> 
          <br>
      <div class="container animate__animated animate__fadeIn animate__delay-1s animate__slower">
        <br>
        <h1 class="title">Esoteric.</h1>
        <h2>To others reading is a myth</h2>
      </div>
    </section>
     <!-- Body body -->
     <main>
      <section class="Variety">
        <br />
        <div class="text-center Categories">
          <h1>Book Categories</h1>
          <h2>Choose your variety</h2>
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <router-link to="/Otherpages/Products.html#novels_section">
                  <img class="cat-img" src="https://e7.pngegg.com/pngimages/225/361/png-clipart-black-book-logo-amazon-com-computer-icons-book-library-icon-study-s-miscellaneous-angle.png" alt="A Category"/>
                </router-link>
                <h3>Novel</h3>
              </div>
              <div class="col">
                <a href="/Otherpages/Products.html#poetry_section">
                  <img class="cat-img" src="https://i.pinimg.com/736x/3c/44/85/3c44857f41ed4b1abfdf5a1d0873b050.jpg" alt="A Category"/>
                </a>
                <h3>Poetry</h3>
              </div>
              <div class="col">
                <a href="/Otherpages/Products.html#help_section">
                  <img class="cat-img" src="https://www.seekpng.com/png/detail/335-3351017_personal-growth-icon-personal-growth-black-and-white.png" alt="A Category"/>
                </a>
                <h3>Self Help</h3>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <a href="/Otherpages/Products.html#romance_section">
                  <img class="cat-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkvmudogGa2sVXfPU2ifG6hWCrgXP79s3mg&usqp=CAU" alt="A Category"/>
                </a>
                <h3>Romance</h3>
              </div>
              <div class="col">
                <a href="/Otherpages/Products.html#comics_section">
                  <img class="cat-img" src="https://c8.alamy.com/comp/J2A0EG/isolated-abstract-black-and-white-color-comics-speech-balloon-icon-J2A0EG.jpg" alt="A Category"/>
                </a>
                <h3>Comics</h3>
              </div>
              <div class="col">
                <a href="/Otherpages/Products.html#biography_section">
                  <img class="cat-img" src="https://cdn.kibrispdr.org/data/21/biography-png-28.jpg" alt="A Category"/>
                </a>
                <h3>Biography's</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>


</template>

<script>

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400&family=Roboto&family=Rubik&display=swap');
/* Intro (Hero) */

#Intro {
width: 100%;
height: 100vh;
background: url(https://images5.alphacoders.com/495/495521.jpg) top center;
background-size: cover;
position: relative;
}



#Intro:before {
content: "";
background: rgba(0, 0, 0, 0.6);
position: absolute;
bottom: 0;
top: 0;
left: 0;
right: 0;
}

   
#Intro .container {
position: relative;
padding-top: 74px;
text-align: center;
}

#Intro h1 {
margin: 0;
font-size: 150px;
font-weight: 600;
font-style: italic;
line-height: 64px;
color: #fff;
font-family: "Lora", serif;
}


#Intro h2 {
color: rgba(255, 255, 255, 0.9);
margin: 30px 0 0 0;
font-size: 26px;
  font-family: "Lora", serif;

}

@media (min-width: 1024px) {
#Intro {
  background-attachment: fixed;
}
}

@media (max-width: 768px) {
#Intro {
  height: 350px;
}

#Intro h1 {
    margin-top: 30px;
  font-size: 30px;
  line-height: 36px;
}

#Intro h2 {
  font-size: 25px;
  line-height: 24px;
}
}
@media (max-width: 568px) {
#Intro {
  height: 350px;
}

#Intro h1 {
  margin-top: 30px;
  font-size: 28px;
  line-height: 36px;
}

#Intro h2 {
  font-size: 20px;
  line-height: 24px;
}
}
/* Categories... */
main{
  background-color: #7d7d7d;
}

.Variety{
color: #000;
}

.Variety h1 {
  font-family: "Lora", serif;
  font-weight: 600;
}

.Variety h2{
  font-family: "Lora", serif;
}

h3 {
  font-family: "Lora", serif;
}

.cat-img {
  margin-top: 10%;
  height: 200px;
  width: 200px;
  border-radius: 50%;
}
</style>
