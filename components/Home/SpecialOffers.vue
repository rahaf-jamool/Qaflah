<template class="specialOffers">
  <div class="specialtabs">
    <div class="specialtabHead">
      <p class="main-title">Delivery Services Order</p>
    </div>
    <div class="tabs-content">
      <div class="content-three">
        <div class="specialtab">
          <carousel
            class="items-arrivals"
            :responsive="responsive"
            :autoplay="true"
            :autoWidth="true"
          >
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
                    <img
                      class="frame"
                      src="../../public/assets/images/imgs/22.png"
                      alt="photo"
                    />
                    <p class="img-title">Lorem ipsum dolor sit</p>
                    <p class="img-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      Veritatis possimus adipisci pariatur
                    </p>
                    <button @click="hi()" class="img-button">Go</button>
                  </div>
                </figure>
              </div>
            </div>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../public/assets/css/speciaOffers.css";
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
          image: "06.png",
          title: "WE FIGHT FOR RIGHT",
        },
        {
          id: "2",
          image: "06.png",
          title: "WE FIGHT FOR RIGHT",
        },
        {
          id: "3",
          image: "06.png",
          title: "WE FIGHT FOR RIGHT",
        },
        {
          id: "4",
          image: "06.png",
          title: "WE FIGHT FOR RIGHT",
        },
        {
          id: "5",
          image: "06.png",
          title: "WE FIGHT FOR RIGHT",
        },
        {
          id: "6",
          image: "06.png",
          title: "WE FIGHT FOR RIGHT",
        },
        {
          id: "7",
          image: "06.png",
          title: "WE FIGHT FOR RIGHT",
        },
        {
          id: "8",
          image: "06.png",
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
