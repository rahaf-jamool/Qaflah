<template>
    <div class="toheco-paginate">
        <a href="#" class="paginate-link active">1</a>
        <a href="#" class="paginate-link">2</a>
        <a href="#" class="paginate-link">...</a>
        <a href="#" class="paginate-link">Next</a>
    </div>
</template>
<script>
export default {
    name:"Pagination",
}
</script>
<style scoped>
.toheco-paginate{
    text-align: center;
    margin:80px 0;
}
.toheco-paginate .paginate-link {
    padding: 12px 20px;
    background-color:#9c9c9e;
    color:#fff;
    font-weight: bold;
    border-radius: 5px;
    margin-right: 10px;
     transition: all 0.5s ease-in-out;

}
.toheco-paginate .paginate-link.active{
    background-color: orangered;
}
.toheco-paginate .paginate-link:hover {
opacity: 0.8;
}
</style>
