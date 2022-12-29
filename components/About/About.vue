<template>
  <section class="about_section" id="About">
    <div class="about_details">
      <page-title :title="data.title" />
      <div class="content">
        <h2 class="fw-bold">Service Description:</h2>
        <ul class="dash">
          <li>Sea Shipping.</li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
            fugiat.
          </li>
        </ul>
        <!-- <h2>Price: 50 AED\k.g</h2> -->
        <Button class="btn">Order</Button>
        <!-- 
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade custom mt-5"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../../public/assets/images/Untitled-3-01.jpg"
                class="d-block w-100"
                alt="a"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../public/assets/images/Untitled-3-02.jpg"
                class="d-block w-100"
                alt="a"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../public/assets/images/Untitled-3-03.jpg"
                class="d-block w-100"
                alt="a"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import PageTitle from "../global/PageTitle";
export default {
  name: "About",
  components: { PageTitle },
  data() {
    return {
      data: {
        title: "About us",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
