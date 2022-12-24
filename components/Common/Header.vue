<template>
  <!-- Start header -->
  <div class="header">
    <!-- Start Navbar -->
    <div class="navbar">
      <div class="leftSide">
        <div class="logo">
          <img src="~assets/imgs/img_11_colored.png" alt="logo" />
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Orders</a></li>
          <li><a href="#">Media Center</a></li>
        </ul>
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
export default {
  name: "Header",
};
</script>

<style scoped>
/* Start header */
.header {
  position: absolute;
  align-items: center;
  width: 100%;
  top: 0;
  z-index: 999;
}
/* Start Navbar */
.navbar {
  display: flex;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.5);
  justify-content: space-between;
  flex-wrap: nowrap;
  position: relative;
}

.navbar .leftSide {
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 100%;
}

.navbar .logo {
  margin: 20px -15px 15px 8px;
}
.navbar .logo img {
  width: 125px;
  height: 90px;
}
.navbar ul {
  display: flex;
  list-style: none;
  margin: 0 0 0 20px;
}

.navbar ul li {
  transition: all 0.2s ease-out;
}
.navbar ul li:hover {
  transform: scale(1.2);
}

.navbar ul li a {
  text-decoration: none;
  color: #000;
  font-size: 17px;
  white-space: nowrap;
  padding: 15px;
  transition: all 0.2s ease-out;
}
.navbar ul li a:hover {
  transform: scale(1.5);
}

.navbar .rightSide {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
}
.navbar .rightSide > * {
  margin-right: 15px;
}

.navbar .rightSide .form {
  display: flex;
  flex-direction: row;
}

.navbar .rightSide .search-field {
  width: 100%;
  padding: 10px 35px 10px 15px;
  border-radius: 10px;
  border: none;
  outline: none;
}

.navbar .rightSide .search-button {
  width: 25px;
  height: 25px;
  border: none;
  outline: none;
  margin-left: -25px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  background-size: 100px 100px;
}
.navbar .rightSide .search-button:hover {
  cursor: pointer;
}

.navbar .rightSide .search-button img {
  width: 15px;
  height: 15px;
  object-fit: cover;
}

.navbar .rightSide .shopping-cart img {
  width: 20px;
  margin-right: 15px;
}
.navbar .rightSide .shopping-cart img:hover {
  cursor: pointer;
}
.navbar .rightSide input {
  height: 25px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 0;
}

.navbar .rightSide .signup,
.navbar .rightSide .login {
  background: transparent;
  border: 0;
  padding: 2px 8px;
  border-radius: 5px;
  white-space: nowrap;
  transition: all 0.3s ease-in;
}
.navbar .rightSide .signup {
  color: #3a322e;
}

.navbar .rightSide .signup:hover,
.navbar .rightSide .login:hover {
  cursor: pointer;
  background-color: #fff;
  color: #3a322e;
}

.navbar .rightSide .login {
  background-color: #3a322e;
  color: #fff;
}

/* End Navbar */
/* Start companies */
.companies {
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
}
.companies .items {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
}

.companies .items a {
  align-items: center;
  display: flex;
  text-decoration: none;
  height: 100%;
  text-align: center;
  color: #fff;
  font-size: 15px;
  white-space: nowrap;
  margin-right: 5%;
}

.companies .items .freight::after {
  content: "";
  border-width: 4px;
  border-style: solid;
  border-color: #fff transparent transparent transparent;
  margin: 3px;
  position: relative;
}

.companies .dropdown {
  list-style: none;
  width: 20%;
  margin: 0;
  padding: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.1s ease-in-out;
  position: absolute;
  border-radius: 0 0 10px 10px;
  top: 40px;
  transform: scaleX(0);
}

.companies .dropdown li {
  width: 100%;
  margin: 0;
  padding: 0;
  display: inline-block;
  position: relative;
  display: block;
}
.companies .dropdown li:last-child {
  border-radius: 0 0 10px 10px;
}

.companies .dropdown li:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
.companies .dropdown li a:hover {
  color: #000;
}
.companies .dropdown li a {
  display: block;
  padding: 20px 25px;
  color: #fff;
  text-decoration: none;
  text-align: center;
  margin: 0 !important;
  font-size: 12px;
}

.companies .items .freight:hover .dropdown,
.companies .dropdown li:hover {
  transform: scaleX(1);
}
/* End companies */
/* End header */

/* Large Screens */
@media (max-width: 1200px) {
}

/* Medium Screens */
@media (max-width: 992px) {
  /* Start companies */
  .companies .items a {
    font-size: 12px;
    white-space: pre-wrap;
  }
  /* End companies */
}

/* Small Screens */
@media (max-width: 768px) {
  /* Start Navbar */
  .navbar ul {
    display: none;
  }
  /* End Navbar */
  /* Start companies */
  .companies .items a {
    font-size: 8px;
  }
  /* End companies */
}
</style>
