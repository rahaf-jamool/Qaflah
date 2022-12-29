<template>
  <div style="padding-top: 100px">
    <PageTitle title="News" />
    <div class="container m-4">
      <div class="row row-cols-auto justify-content-center g-4">
        <div class="col" v-for="item in news" :key="item.id">
          <NewsItem
            :title="item.title"
            :text="item.text"
            :image="item.image"
            :date="item.date"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "~/components/global/PageTitle.vue";
import NewsItem from "~/components/Media/News/NewsItem.vue";

export default {
  name: "news",
  layout: "app",
  components: {
    PageTitle,
    NewsItem,
  },
  data() {
    return {
      news: [
        {
          id: 1,
          title: "title1",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eum!",
          image: "Untitled-3-01.jpg",
          date: "2022/12/26",
        },
        {
          id: 2,
          title: "title2",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eum!",
          image: "Untitled-3-02.jpg",
          date: "2022/12/26",
        },
        {
          id: 3,
          title: "title3",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eum!",
          image: "Untitled-3-03.jpg",
          date: "2022/12/26",
        },
        {
          id: 4,
          title: "title4",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eum!",
          image: "Untitled-3-07.jpg",
          date: "2022/12/26",
        },
        {
          id: 5,
          title: "title5",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eum!",
          image: "Untitled-3-08.jpg",
          date: "2022/12/26",
        },
      ],
    };
  },
};
</script>
