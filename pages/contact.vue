<template>
  <div class="container-fluid" style="padding-top: 100px;">
    <div class="row">
      <div class="col-md-12">
        <iframe
          width="100%"
          height="300px"
          src="https://maps.google.com/maps?q=burj%20khal&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>

    <div style="text-align: center">
      <h2>Contact Us</h2>
      <p>Swing by for a cup of coffee, or leave us a message:</p>
    </div>
    <div class="row justify-content-between align-items-center">
      <div class="col-md-6 card m-2 p-4">
        <form class="form">
          <label for="form-name">Name</label>
          <input type="email" class="form-control" id="form-name" />
          <label for="form-email">Email Address</label>
          <input type="email" class="form-control" id="form-email" />
          <label for="form-subject">Address</label>
          <input type="text" class="form-control" id="form-subject" />
          <label for="form-message">Your Message</label>
          <textarea class="form-control" id="form-message"></textarea>
          <button class="btn mt-2 mb-2">Send Message</button>
        </form>
      </div>
      <div class="col-md-3">
        <div class="row">
          <div class="col-12 contact">
            <p>
              <i class="fa fa-user"></i>
              <span> Mr. Sultan Abdullah </span>
            </p>
          </div>
          <div class="col-12 contact">
            <p>
              <i class="fa fa-map-marker"></i>
              <span> Dubai, Burj Khalifa </span>
            </p>
          </div>
          <div class="col-12 contact">
            <p>
              <i class="fa fa-mobile"></i>
              <span> +971 55 111 66 00 </span>
            </p>
            <p>
              <i class="fa fa-phone"></i>
              <span> +971 4 8871193 / 94 </span>
            </p>
            <p>
              <i class="fa fa-fax"></i>
              <span> +971 4 8871198 </span>
            </p>
          </div>
          <div class="col-12 contact">
            <p>
              <i class="fa fa-envelope"></i>
              <span> toheco@toheco.com </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PageTitle from "~/components/global/PageTitle.vue";
export default {
  layout: "app",
  name: "contact",
  components: { PageTitle },
  data() {
    return {
      data: {
        title: "Contact Us",
      },
    };
  },
};
</script>
