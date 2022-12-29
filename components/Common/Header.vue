<template>
  <!-- Start header -->
  <div class="header">
    <!-- Start Navbar -->
    <div class="navbar">
      <div class="leftSide">
        <nuxt-link to="/">
          <div class="logo">
            <img src="~assets/imgs/img_11_colored.png" alt="logo" />
          </div>
        </nuxt-link>

        <nav class="nav-bar">
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li>
              <a href="#" class="about"
                >About
                <ul class="dropdown">
                  <li>
                    <NuxtLink to="/company-profile">Company Profile</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/vision-mission">Vision And Mission</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/general-managers-speech"
                      >General Manager's Speech</NuxtLink
                    >
                  </li>
                </ul>
              </a>
            </li>
            <li><NuxtLink to="#">Orders</NuxtLink></li>
            <li>
              <NuxtLink to="#" class="media"
                >Media Center
                <ul class="dropdown">
                  <li><NuxtLink to="/media/news">News</NuxtLink></li>
                  <li><NuxtLink to="/media/videos">Vedios</NuxtLink></li>
                  <li><NuxtLink to="/media/gallery">Gallery</NuxtLink></li>
                </ul></NuxtLink
              >
            </li>
            <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
          </ul>
        </nav>
        <div class="navbutton" @click="toggleClass">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <div class="rightSide">
        <form class="form">
          <input type="search" placeholder="Search" class="search-field" />
          <button type="submit" class="search-button">
            <img src="~assets/imgs/01.png" />
          </button>
        </form>
        <a href="#" class="shopping-cart"
          ><img src="~assets/imgs/00.png" alt="cart"
        /></a>
        <a href="#"><button class="signup">Sign Up</button></a>
        <a href="#"><button class="login">Login</button></a>
      </div>
    </div>
    <!-- End Navbar -->
    <!-- Start companies -->
    <div class="companies">
      <div class="items">
        <a href="#" class="freight"
          >Freight Companies
          <ul class="dropdown">
            <li><a href="#">Sea Freight</a></li>
            <li><a href="#">Land Freight</a></li>
            <li><a href="#">Air Freight</a></li>
          </ul>
        </a>
        <a href="#">Delivery Companies</a>
        <a href="#">Shipping service supplies</a>
        <a href="#">Shipping tenders</a>
        <a href="#">Shipping insurance companies</a>
      </div>
    </div>
    <!-- End companies -->
  </div>
  <!-- End header -->
</template>

<script>
import "../Media/Gallery/Gallery.vue";
import "../Media/News/NewsItem.vue";
import "../Media/Video/Video.vue";
import "../../public/assets/css/Header.css";
export default {
  name: "Header",
  methods: {
    toggleClass() {
      const navBar = document.querySelector(".nav-bar");
      navBar.classList.toggle("active");
    },
  },
};
</script>

<style scoped></style>
