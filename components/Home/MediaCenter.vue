<template class="mediaCenter">
  <div class="mediatabs">
    <p class="main-title">Media Center</p>
    <div class="tabs-content">
      <div class="mediatab">
        <carousel
          class="items-media"
          :responsive="responsive"
          :autoWidth="true"
        >
          <!-- :autoplay="true" -->
          <div class="item" v-for="item in ResentArrivals" :key="item.id">
            <div class="item-image">
              <figure>
                <div class="item-container">
                  <img
                    :src="
                      require('../../public/assets/images/imgs/' + item.image)
                    "
                    alt="photo"
                  />
                  <div class="paragraph">
                    <p class="paraTitle">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                    <p class="paradesc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                  </div>
                  <div class="whiteLine"></div>
                  <div class="kNumber">
                    <p>2.1K</p>
                    <img src="../../assets/imgs/23.png" alt="" />
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </carousel>
        <div class="media-image">
          <img src="../../assets/imgs/img_08_09.png" alt="" />
        </div>
        <div class="brands">
          <a href="https://www.aramex.com/us/en"
            ><img src="../../assets/imgs/brands/image001.png" alt="aramex"
          /></a>
          <a href="https://www.dhl.com/sy-en/home.html?locale=true"
            ><img src="../../assets/imgs/brands/image002.jpg" alt="aramex"
          /></a>
          <a href="https://www.smsaexpress.com/"
            ><img src="../../assets/imgs/brands/image003.jpg" alt="aramex"
          /></a>
          <a href="https://shipa.com/our-story/"
            ><img src="../../assets/imgs/brands/image004.jpg" alt="aramex"
          /></a>
          <a href="https://aymakan.com.sa/en"
            ><img src="../../assets/imgs/brands/image005.jpg" alt="aramex"
          /></a>
          <a href="https://www.saee.sa/en/about-us/"
            ><img src="../../assets/imgs/brands/image006.png" alt="aramex"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../public/assets/css/MediaCenter.css";
export default {
  name: "specialOffers",
  methods: {
    hi() {
      console.log("hi");
    },
  },
  data() {
    return {
      activeTab: "3",
      ResentArrivals: [
        {
          id: "1",
          image: "img.png",
          title: "WE FIGHT FOR RIGHT",
        },
        {
          id: "2",
          image: "img.png",
          title: "WE FIGHT FOR RIGHT",
        },
        {
          id: "3",
          image: "img.png",
          title: "WE FIGHT FOR RIGHT",
        },
        {
          id: "4",
          image: "img.png",
          title: "WE FIGHT FOR RIGHT",
        },
        {
          id: "5",
          image: "img.png",
          title: "WE FIGHT FOR RIGHT",
        },
        {
          id: "6",
          image: "img.png",
          title: "WE FIGHT FOR RIGHT",
        },
        {
          id: "7",
          image: "img.png",
          title: "WE FIGHT FOR RIGHT",
        },
        {
          id: "8",
          image: "img.png",
          title: "WE FIGHT FOR RIGHT",
        },
      ],
      responsive: {
        0: { items: 1, nav: true },
        600: { items: 1, nav: true },
        1000: { items: 1, nav: true },
        1200: { items: 1, nav: true },
      },
    };
  },
};
</script>
<style scoped></style>
