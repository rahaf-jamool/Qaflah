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
          class="active visually-hidden"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          class="visually-hidden"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          class="visually-hidden"
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
    <div class="itemsContainer">
      <div class="content">
        <!-- <div class="item1">
          <div class="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id
              earum corporis obcaecati optio repellat maiores dolorum,
              laboriosam voluptatum debitis
            </p>
          </div>
        </div>
        <div class="item2">
          <div class="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id
              earum corporis obcaecati optio repellat maiores dolorum,
              laboriosam voluptatum debitis
            </p>
          </div>
        </div>
        <div class="item3">
          <div class="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id
              earum corporis obcaecati optio repellat maiores dolorum,
              laboriosam voluptatum debitis
            </p>
          </div>
        </div> -->
      </div>
      <div class="down">
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
import "../../public/assets/css/MainPage.css";

export default {
  name: "SectionOne",
};
</script>
<style scoped></style>
