<template>
  <div class="container my-5">
    <CoolLightBox :items="images" :index="index" @close="index = null">
    </CoolLightBox>

    <div class="row images-wrapper">
      <div class="col-12">
        <title-head :title="data.title" />
      </div>

      <div
        class="col-lg-3 col-md-6 col-12"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
      >
        <div class="pic">
          <div
            class="image"
            :style="{ backgroundImage: `url(${image})` }"
          ></div>
          <h3>Toheco</h3>
        </div>
      </div>
    </div>
    <!-- <div class="col-4">kjdkjh</div>    <div class="col-4">kjdkjh</div>    <div class="col-4">kjdkjh</div>
        <div class="col-4">kjdkjh</div>    <div class="col-4">kjdkjh</div>    <div class="col-4">kjdkjh</div>
        <div class="col-4">kjdkjh</div>    <div class="col-4">kjdkjh</div>    <div class="col-4">kjdkjh</div>
        <div class="col-4">kjdkjh</div>    <div class="col-4">kjdkjh</div>    <div class="col-4">kjdkjh</div>
        <div class="col-4">kjdkjh</div>    <div class="col-4">kjdkjh</div>    <div class="col-4">kjdkjh</div> -->
  </div>
</template>

<script>
// import CoolLightBox from "vue-cool-lightbox";
// import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import TitleHead from "../../global/TitleHead";

export default {
  name:'Gallery',
  components: {
    // CoolLightBox,
    TitleHead
  },
  data() {
    return {
      images: [
        // "about2.jpg"
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        "https://static.toiimg.com/photo/72975551.cms",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        "https://static.toiimg.com/photo/72975551.cms",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        "https://static.toiimg.com/photo/72975551.cms",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        "https://static.toiimg.com/photo/72975551.cms",
      ],
      data: {
        title: "Galeries",
      },
      index: null,
    };
  },
};
</script>

<style>
.images-wrapper {
  margin: 30px 0;
}

.pic {
  transition: all 0.2s ease-out;
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 15%);
  text-align: center;
  margin-bottom: 25px;
}
.pic:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
}
.pic h3 {
  padding: 10px 0;
  text-align: center;
}
.image {
  height: 300px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-bottom: 4px solid #fec419;
}
</style>
