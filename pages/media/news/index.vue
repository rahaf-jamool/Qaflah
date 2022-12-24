<template>
  <div class="news">
    <PageTitle title="News" />
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-8 col-12">
          <NewsItem />
          <NewsItem />
          <Pagination />
        </div>
        <div class="col-lg-4 col-12">
          <NewsSidebar />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PageTitle from "~/components/global/PageTitle";
import NewsItem from "~/components/Media/News/NewsItem";
import Pagination from "~/components/Media/News/Pagination";
import NewsSidebar from "~/components/Media/News/sidebar";
export default {
  layout: "app",
  name: "news",
  components: {
  PageTitle,
  NewsSidebar,
  Pagination,
  NewsItem
  },
  data() {
    return {
      data: {
        title: "News",
        image1: "logo-titlt.png",
      },
    };
  },
};
</script>
