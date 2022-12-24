<template>
  <section class="video_section mb-5" id="Video">
    <div class="container">
      <title-head :title="data.title" />
      <div class="iframe_container">
        <div class="iframe">
          <video-embed src="https://www.youtube.com/embed/lOYQi-fxutQ" class="video-item"></video-embed>
        </div>

        <div class="iframe">
          <video-embed src="https://www.youtube.com/embed/lOYQi-fxutQ" class="video-item"></video-embed>
        </div>

        <div class="iframe">
          <video-embed src="https://www.youtube.com/embed/lOYQi-fxutQ" class="video-item"></video-embed>
        </div>

        <div class="iframe">
          <video-embed src="https://www.youtube.com/embed/lOYQi-fxutQ" class="video-item"></video-embed>
        </div>

        <div class="iframe">
          <video-embed src="https://www.youtube.com/embed/lOYQi-fxutQ" class="video-item"></video-embed>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import Embed from 'v-video-embed'
Vue.use(Embed)



import TitleHead from "../../global/TitleHead";

export default {
  name: "Video",
  components: { TitleHead },
  data() {
    return {
      data: {
        title: "Videos",
      },
    };
  },
};


</script>

<style lang="scss" scoped></style>
<template>
  <section class="video_section mb-5" id="Video">
    <div class="container">
      <title-head :title="data.title" />
      <div class="iframe_container d-flex flex-wrap gap-3">
        <div class="iframe">
          <video-embed src="https://www.youtube.com/embed/lOYQi-fxutQ" class="video-item"></video-embed>
        </div>

        <div class="iframe">
          <video-embed src="https://www.youtube.com/embed/lOYQi-fxutQ" class="video-item"></video-embed>
        </div>

        <div class="iframe">
          <video-embed src="https://www.youtube.com/embed/lOYQi-fxutQ" class="video-item"></video-embed>
        </div>

        <div class="iframe">
          <video-embed src="https://www.youtube.com/embed/lOYQi-fxutQ" class="video-item"></video-embed>
        </div>

        <div class="iframe">
          <video-embed src="https://www.youtube.com/embed/lOYQi-fxutQ" class="video-item"></video-embed>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import Embed from 'v-video-embed'
Vue.use(Embed)



import TitleHead from "../../global/TitleHead";

export default {
  name: "Video",
  components: { TitleHead },
  data() {
    return {
      data: {
        title: "Videos",
      },
    };
  },
};


</script>

<style lang="scss" scoped></style>
