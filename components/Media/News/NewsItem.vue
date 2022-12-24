<template>
    <div class="news-item">
        <div class="news-thumbnail">
          <a href="#">
            <img
              src="../../../public/assets/images/1-1.png"
              alt=""
              class="news-image"
            />
          </a>
        </div>
        <div class="news-details">
          <div class="categories hstack gap-2">
            <div class="">
              Category
            </div>
            <div class="vr my-auto"></div>
            <div class="">
              November 28, 2022
            </div>
            <div class="vr my-auto"></div>
            <div class="">
              Posted by: John Doe
            </div>
          </div>
          <div class="news-title">
            <h2>
              <a href="#">
                <i class="fa fa-bookmark"></i>
               Solar Manufacturing Facilities
              </a>
            </h2>
            <p class="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor ...
            </p>
            <button class="read-more btn">Read more</button>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  name:"NewsItem"
}
</script>
