<template>
<main>
  <div class="container bd-black" id="darkver">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="wrapper mt-5">
          <div class="row no-gutters">
<!-- Contact Form -->
          <div class="col-md-6 d-flex align-items-stretch">
            <div class="contact-wrap w-100 p-md-5 p-4 py-5">
              <h3 class=" mt-4 mb-4">Contact</h3>
              <div id="form-message-warning" class="mb-4"></div>
              <form action="https://formspree.io/f/moqzbaow" method="POST" id="contactForm" name="contactForm" class="contactForm">
                <div class="row">
                  <div class="col-md-12 pb-2">
                    <div class="form-group">
                      <input type="text" class="form-control" name="name" id="name" placeholder="Name">
                    </div>
                  </div>
                  <div class="col-md-12 pb-2">
                    <div class="form-group">
                      <input type="email" class="form-control" name="email" id="email" placeholder="Email">
                    </div>
                  </div>
                  <div class="col-md-12 pb-2">
                    <div class="form-group">
                      <input type="telephone" class="form-control" name="telephone" id="telephone" placeholder="Phone Number (Optional)">
                    </div>
                  </div>
                  <div class="col-md-12 pb-2">
                    <div class="form-group">
                      <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject">
                    </div>
                  </div>
                  <div class="col-md-12 pb-2">
                    <div class="form-group">
                      <textarea name="message" class="form-control" id="message" cols="30" rows="6" placeholder="Message"></textarea>
                    </div>
                  </div>
                  <div class="col-md-12 pb-2">
                    <div class="form-group">
                      <input class="form-btn" type="submit" value="Send Message">
                      <input class="form-btn" type="reset" value="Clear">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
            <!-- Contact information -->
            <div class="col-md-6 d-flex align-items-stretch">
              <div class="info-wrap w-100 p-md-5 p-4 py-5 img">
                <br>
            <br>  
                <h3>Contact information</h3>
                <p class="mb-4">
                  Let's build our community, lets come together
                </p>
                <div class="m-4 dbox w-100 d-flex align-items-start">
                  <div class="text pl-3">
                    <p>
                      <span>Address:</span>
                      <a href="https://goo.gl/maps/qnR6RGGvVR6MZyDb6?coh=178573&entry=tt" target="_blank" style="text-decoration: none; color: #e1dfdf"><em>Check our location</em></a>
                    </p>
                  </div>
                </div>
                <div class="m-4 dbox w-100 d-flex align-items-center">
                  <div class="text pl-3">
                    <p>
                      <span>Phone:</span>
                      <a href="http://spittoon.co.uk/wp-content/uploads/2019/01/error-meme.jpg" target="_blank" style="text-decoration: none; color: #e1dfdf">+ 1235 2355 98</a>
                    </p>
                  </div>
                </div>
                <div class="dbox w-100 d-flex align-items-center">
                  <p class="text-wrap">
                    <span>Email:</span><a href="https://media.makeameme.org/created/hello-rtr56j.jpg" target="_blank" style="text-decoration: none; color: #e1dfdf"> Esoteric_Bookstore @gmail.com</a>
                  </p>
                </div>
                <div class="m-4 dbox w-100 d-flex align-items-center">
                  <div class="text pl-3">
                    <p>
                      <span>Website: (Literature club) </span>
                      <router-link to="/website" style="text-decoration: none; color: #e1dfdf" target="_blank" > Esoteric Creatives.com</router-link>
                    </p>
                  </div>
                </div>
                <!-- Contact form  -->
                <div class="col-md-6 d-flex align-items-stretch"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
</template>

<style scoped>
  main {
    min-height: 100vh;
    background: url(https://images5.alphacoders.com/495/495521.jpg);
    text-align: center;
    color: #fff;
    font-family: "lora",serif;
  }

  main p{
    font-size: 20px;
  }

  main h3 {
    font-size: 45px;
  }

  .form-btn{
  color: #fff;
  border-radius: 4px;
  padding: 7px 25px 8px 25px;
  font-size: 20px;
  border:transparent;
  background-color: transparent;
  }
  
  .form-btn:hover {
    border-color: #000;
  background-color: #161c32;
  color: #fff;
  }

</style>
