<template>
  <div class="companiesservices">
    <div class="tabs">
      <div class="tabHead">
        <p class="title">Companies</p>
        <ul class="tabs-choose">
          <li
            @click="activeTab = '1'"
            :class="[activeTab === '1' ? 'active' : '']"
          >
            <div class="headInfo">
              <img src="../../assets/imgs/13.png" alt="" />
              <p v-if="activeTab === '1'">Sea Freight</p>
            </div>
          </li>
          <li
            @click="activeTab = '2'"
            :class="[activeTab === '2' ? 'active' : '']"
          >
            <div class="headInfo">
              <img src="../../assets/imgs/14.png" alt="" />
              <p v-if="activeTab === '2'">Land Freight</p>
            </div>
          </li>
          <li
            @click="activeTab = '3'"
            :class="[activeTab === '3' ? 'active' : '']"
          >
            <div class="headInfo">
              <img src="../../assets/imgs/15.png" alt="" />
              <p v-if="activeTab === '3'">Air Freight</p>
            </div>
          </li>
          <li
            @click="activeTab = '4'"
            :class="[activeTab === '4' ? 'active' : '']"
          >
            <div class="headInfo2">
              <img src="../../assets/imgs/16.png" alt="" />
              <p v-if="activeTab === '4'"></p>
            </div>
          </li>
          <li
            @click="activeTab = '5'"
            :class="[activeTab === '5' ? 'active' : '']"
          >
            <div class="headInfo2">
              <img src="../../assets/imgs/17.png" alt="" />
              <p v-if="activeTab === '5'"></p>
            </div>
          </li>
          <li
            @click="activeTab = '6'"
            :class="[activeTab === '6' ? 'active' : '']"
          >
            <div class="headInfo2">
              <img src="../../assets/imgs/18.png" alt="" />
              <p v-if="activeTab === '6'"></p>
            </div>
          </li>
          <li
            @click="activeTab = '7'"
            :class="[activeTab === '7' ? 'active' : '']"
          >
            <div class="headInfo">
              <img src="../../assets/imgs/19.png" alt="" />
              <p v-if="activeTab === '7'"></p>
            </div>
          </li>
        </ul>
      </div>
      <div class="tabs-content">
        <div class="content-one" v-if="activeTab === '1'">Content One</div>
        <div class="content-two" v-if="activeTab === '2'">Content Two</div>
        <div class="content-three" v-if="activeTab === '3'"></div>
        <div class="content-four" v-if="activeTab === '4'">Content Four</div>
        <div class="content-four" v-if="activeTab === '5'">Content Five</div>
        <div class="content-four" v-if="activeTab === '6'">Content Six</div>
        <div class="content-four" v-if="activeTab === '7'">Content Seven</div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../public/assets/css/CompaniesServices.css";

export default {
  name: "companiesservices",
  data() {
    return { activeTab: "1" };
  },
};
</script>

<style scoped></style>
