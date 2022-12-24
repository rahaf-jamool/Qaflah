<template>
  <div class="contact-us mb-5">
    <div class="container my-5">
      <title-head :title="data.title" :image1="data.image1" />
      <div class="row">
        <div class="col-lg-6 col-md-6 col-12">
          <form action="" method="POST" class="px-4 py-5">
            <div class="row">
              <div class="col-6">
                <label for="first_name" class="mb-1"> First Name *</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  class="form-control mb-2"
                  required
                />
              </div>
              <div class="col-6">
                <label for="last_name" class="mb-1"> Last Name *</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  class="form-control mb-2"
                  required
                />
              </div>
              <div class="col-12">
                <label for="country" class="mb-1"> Country* </label>
                <select
                  name="country"
                  id="country"
                  class="form-control mb-2"
                  required
                >
                  <option value="UAE">United Arab Emirates</option>
                  <option value="Syria">Syria</option>
                  <option value="Egypt">Egypt</option>
                </select>
              </div>
              <div class="col-12">
                <label for="phone" class="mb-1"> Phone Number </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  class="form-control mb-2"
                />
              </div>
              <div class="col-12">
                <label for="email" class="mb-1"> Email* </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  class="form-control mb-2"
                  required
                />
              </div>
              <div class="col-12">
                <label for="message" class="mb-2"> Your Message * </label>
                <textarea
                  name="message"
                  id="message"
                  class="form-control mb-3"
                  rows="6"
                  placeholder="What can we help you with?"
                >
                </textarea>
              </div>
              <button class="btn send" type="submit">Send</button>
            </div>
          </form>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="px-4 py-5">
            <div class="col-12 contact">
              <p>
                <i class="fa fa-user icon"></i>
                <span> Mr. Sultan Abdullah </span>
              </p>
            </div>
            <div class="col-12 contact">
              <p>
                <i class="fa fa-map-marker icon"></i>
                <span> Dubai, Jebel Ali Freezone </span>
              </p>
            </div>
            <div class="col-12 contact">
              <p>
                <i class="fa fa-mobile icon"></i>
                <span> +971 55 111 66 00 </span>
              </p>
              <p>
                <i class="fa fa-phone icon"></i>
                <span> +971 4 8871193 / 94 </span>
              </p>
              <p>
                <i class="fa fa-fax icon"></i>
                <span> +971 4 8871198 </span>
              </p>
            </div>
            <div class="col-12 contact">
              <p>
                <i class="fa fa-envelope icon"></i>
                <span> toheco@toheco.com </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7233.150911024061!2d55.080238!3d24.980555!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x71f63933667837be!2sTrans%20Ocean%20Heavy%20Equipment%20FZCO!5e0!3m2!1sar!2sae!4v1669276682036!5m2!1sar!2sae"
      width="100%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    </div>
  </div>
</template>
<script>
import TitleHead from "~/components/global/TitleHead";
export default {
  layout: "app",
  name: "contact us",
  components: { TitleHead },
  data() {
    return {
      data: {
        title: "Contact Us",
        image1: "logo-titlt.png",
      },
    };
  },
};
</script>
<style scoped>
.contact-us h1 {
  font-weight: bold;
  color: #1c2b7f;
  text-align: center;
  border-bottom: 2px solid #f2b914;
}
.contact-us form {
  background-color: #e2e2e2;
}
.contact-us label {
  font-weight: bold;
  color: #000;
  font-size: 19px;
}

.contact-us .send {
  background: #1c2b7f;
  width: 30%;
  margin: auto;
  color: #fff;
  border-radius: 0;
  font-size: 19px;
}
.contact-us .contact {
  text-align: left;
  padding-left: 35px;
  margin-bottom: 60px;
}
.contact-us .contact .fa.icon {
  color: #1c2b7f;
  font-size: 22px;
  margin-right: 15px;
}

.contact-us .contact .title {
  font-size: 19px;
  font-weight: bold;
  display: block;
}
.contact-us .contact p {
  color: #818184;
  font-size: 20px;
}
.contact-us .map{
  margin-bottom: -5px;
}
input#first_name {
    width: unset;
}
input#last_name {
    width: unset;
}
textarea:focus,
textarea.form-control:focus,
input.form-control:focus,
select.form-control:focus,
input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
[type="text"].form-control:focus,
[type="password"].form-control:focus,
[type="email"].form-control:focus,
[type="tel"].form-control:focus,
[contenteditable].form-control:focus {
  box-shadow: inset 0 -1px 0 #ddd;
  border-color: #ced4da;
}
@media only screen and (max-width: 600px) {
 .contact-us .contact {
    text-align: left;
    padding-left: 0;
    margin-bottom: 20px;
  }
.contact-us  .contact p {
    font-size: 18px;
  }
}
</style>
