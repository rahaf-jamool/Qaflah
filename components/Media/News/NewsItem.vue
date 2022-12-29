<template>
  <div class="card bg-light news-card">
    <img
      :src="require(`../../../public/assets/images/${image}`)"
      class="card-img"
      alt="..."
    />
    <div class="card-body">
      <h2 class="card-title d-flex justify-content-between">
        {{ title }} <small class="text-muted">{{ date }}</small>
      </h2>

      <p class="card-text">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsItem",
  props: ["image", "title", "text", "date"],
};
</script>
