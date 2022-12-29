<template class="myDeliveryServices">
  <div class="tabs">
    <div class="tabHead">
      <p class="main-title">Delivery Services Order</p>
    </div>
    <div class="tabs-content">
      <div class="content-three">
        <div class="tab">
          <div class="left">
            <p class="order-title">
              Order Name Here<br /><span>
                Lorem, ipsum dolor sit amet consectetur</span
              >
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              officia, a, velit suscipit nam iusto possimus tempora dicta facere
              voluptate voluptatibus error? Culpa, quasi consectetur corrupti
              harum dolorum beatae molestias!
            </p>
          </div>
          <carousel
            class="items-arrivals"
            :responsive="responsive"
            :autoWidth="true"
          >
            <div class="item" v-for="item in ResentArrivals" :key="item.id">
              <div class="item-image">
                <figure>
                  <a href="#">
                    <div class="item-container">
                      <img
                        :src="
                          require('../../public/assets/images/imgs/' +
                            item.image)
                        "
                        alt="photo"
                      />
                    </div>
                  </a>
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
import "../../public/assets/css/DeliveryServices.css";

export default {
  name: "companiesservices",
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
