<template>
  <div class="SectionOne">
    <!-- Star caousel -->
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="false"
      data-bs-interval="3000"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="~assets/imgs/img.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="~assets/imgs/img_13.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="~assets/imgs/img_14.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- End carousel -->
    <div class="myContainer">
      <div class="content">
        <!-- Paragaph Text -->
        <div class="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id
            earum corporis obcaecati optio repellat maiores dolorum, laboriosam
            voluptatum debitis commodi excepturi, amet eos velit enim facilis
            dolore dignissimos. Ipsam.
          </p>
        </div>
        <div class="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id
            earum corporis obcaecati optio repellat maiores dolorum, laboriosam
            voluptatum debitis commodi excepturi, amet eos velit enim facilis
            dolore dignissimos. Ipsam.
          </p>
        </div>
        <div class="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id
            earum corporis obcaecati optio repellat maiores dolorum, laboriosam
            voluptatum debitis commodi excepturi, amet eos velit enim facilis
            dolore dignissimos. Ipsam.
          </p>
        </div>
      </div>
      <div class="down">
        <!-- Order Now -->
        <div class="order">
          <a href="#"><p>Order Now</p></a>
        </div>
        <div class="title">
          <p>Lorem ipsum <br />dolor sit amet</p>
        </div>
        <div class="desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit<br />
            Non id corporis obcaecati optio repellat maiores dolore
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SectionOne",
};
</script>
<style scoped>
.SectionOne {
  position: relative;
}

.carousel button {
  opacity: 0;
}
.myContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.text {
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  margin: 10px;
  flex-basis: 28%;
  z-index: 1;
}
.text p {
  font-size: 12px;
  padding: 5px;
  text-align: justify;
  text-justify: inter-word;
}

.down {
  position: relative;
  top: 400px;
  left: 100px;
}

.down .order p {
  position: absolute;
  font-size: 25px;
  color: #3a322e;
  padding: 2px 30px 2px 30px;
  border-radius: 20px 20px 0px 20px;
  font-family: Ubuntu;
  border: 1px solid #3a322e;
  transition: all 0.3s ease-in-out;
  z-index: 999;
}
.down .order p:hover {
  background-color: #3a322e;
  color: #fff;
}

.down .title,
.down .desc {
  position: relative;
  top: 60px;
}
.down .title p {
  font-size: 75px;
  color: #fff;
  text-transform: uppercase;
  text-shadow: 2px 2px #3a322e;
  text-shadow: 2px 2px 4px #000000;
  line-height: 75px;
}
.down .desc p {
  color: #fff;
  font-family: Ubuntu;
  font-size: 30px;
  text-align: justify;
}
@media (max-width: 1200px) {
  .down {
    top: 100px;
  }
}

@media (max-width: 992px) {
  .text {
    flex-basis: 80%;
  }
  .down,
  .down .title,
  .down .desc {
    display: none;
  }
}
@media (max-width: 768px) {
  .text:not(:first-child) {
    display: none;
  }
}
</style>
