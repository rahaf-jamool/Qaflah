<template>
  <div class="sectionTwo">
    <div class="myContainer">
      <div class="text">
        <p>
          Lorem ipsum dolor sit ametperiam dolore consectetur adipisicing
          elit<br />
          perferendis doloremque in molestiae fuga esse sed fugit
          voluptatibus<br />
          fugiat rerum aperiam dolore Aut odio sunt ut tempora. Tempore, vel.
        </p>
      </div>
      <div class="freight">
        <div class="sea">
          <img src="~assets/imgs/05.png" alt="photo" />
          <p class="number">1400</p>
          <p class="text">Sea Freight</p>
        </div>
        <div class="land">
          <img src="~assets/imgs/04.png" alt="photo" />
          <p class="number">3200</p>
          <p class="text">Sea Freight</p>
        </div>
        <div class="air">
          <img src="~assets/imgs/03.png" alt="photo" />
          <p class="number">1200</p>
          <p class="text">Sea Freight</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SectionTwo",
};
</script>

<style scoped>
* {
  font-family: UbuntuMedium;
}

.sectionTwo {
  position: relative;
  height: 60vh;
  background-image: url("assets/imgs/02.png");
  background-size: cover;
}

.myContainer {
  display: flex;
  flex-direction: column;
}

.text {
  display: flex;
  justify-content: center;
}

.text p {
  width: 90%;
  margin: 0;
  padding: 0;
  font-size: 20px;
  text-align: center;
  margin: 50px 0px 30px 0px;
}
.freight {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.freight .sea,
.freight .land,
.freight .air {
  height: 125px;
  background-color: rgba(60, 47, 41, 0.17);
  margin: 5px 30px 5px 30px;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-basis: 15%;
}

.freight .air {
  background-color: rgba(60, 47, 41, 0.46);
  color: #fff;
}

.freight img {
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
}

.freight .land img {
  width: 50%;
}

.freight .number {
  font-size: 50px;
  margin: 0;
  z-index: 999;
}
</style>
