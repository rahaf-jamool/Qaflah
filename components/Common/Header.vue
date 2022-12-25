<template>
  <!-- Start header -->
  <div class="header">
    <!-- Start Navbar -->
    <div class="navbar">
      <div class="leftSide">
        <div class="logo">
          <img src="~assets/imgs/img_11_colored.png" alt="logo" />
        </div>

        <nav class="nav-bar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Media Center</a></li>
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
