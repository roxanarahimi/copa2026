<template>
  <div class="container-fluid m-0 px-0 row justify-content-center bg-1">
    <div class="d-grid"
         style="background: url('/img/blog.png') center center no-repeat; min-height: 660px;background-size: cover">
      <div class="row px-0  justify-content-center h-100"
           style="background: linear-gradient(0deg, #feedd8 5%, rgba(254, 237, 216, 0) 100%);padding-top:200px;">
        <nav-bar/>
        <div class="row p-0 m-0 col-10 mb-4">
          <div class="col-lg-6 px-0 px-lg-2 blog-titles">
            <h1 class="title_extra_black color-red">دنیــــــــــــای کوپا</h1>
            <h2>فراتر از طـــــــــــــــــعم!</h2>
            <p>از تازه‌ترین اخبار تا خوش‌طعم‌ترین دستورها؛<br> همه چیز درباره دنیای بیسکوییتی
              کوپا اینجاست</p>
          </div>
        </div>

        <div class="align-self-end mb-3">
          <div class="row justify-content-center">
            <div class="row col-10 justify-content-center">
              <div class="col-10 p-2 col-lg-8 box rounded-bottom-0 border-bottom-0">
                <div class="d-flex justify-content-center">
                  <div class="btn-purple mx-2">مقالات</div>
                  <div class="btn-white mx-2">اخبار</div>
                  <div class="btn-white mx-2">دستور پخت</div>
                </div>
              </div>
              <div class="col-12 p-2 box ">
                <div class="d-flex justify-content-center">
                  <div class="btn-red mx-2">دسته بندی</div>
                  <div class="btn-white mx-2">دسته بندی</div>
                  <div class="btn-white mx-2">دسته بندی</div>
                  <div class="btn-white mx-2">دسته بندی</div>
                  <div class="btn-white mx-2">دسته بندی</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

    <div class="row justify-content-center px-0 py-5">
    <div class="row col-10 articles px-0">
      <div v-for="item in 8" class="col-sm-6 col-md-4 col-lg-3 mb-3">
        <article-card  />
      </div>
      </div>
    </div>


    <div class="col-10 px-0">
      <the-footer/>
    </div>
  </div>

</template>
<script>

import {defineComponent} from "vue";
import TheFooter from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
import ArticleCard from "@/components/ArticleCard.vue";

export default defineComponent({
  components: {ArticleCard, NavBar, TheFooter}
})
</script>
<style scoped>
.btn-purple {
  background: linear-gradient(135deg, #A71BED 0%, rgba(167, 27, 237, 0.6) 100%);
  border-radius: 16px;
  padding: 6px 12px;
  color: white;
  cursor: pointer;
}
.btn-white {
  background: radial-gradient(rgba(255, 255, 255, 0.34) 10%, rgba(255, 255, 255, 0.34) 100%);
  border-radius: 16px;
  padding: 6px 12px;
  color: black;
  cursor: pointer;
}

.blog-titles h1 {
  font-size: 68px
}

.blog-titles h2 {
  font-size: 58px
}

.blog-titles p {
  font-size: 16px
}

@media (max-width: 600px) {
  .blog-titles {
    text-align: center !important
  }

  .blog-titles h1 {
    font-size: 45px;
  }

  .blog-titles h2 {
    font-size: 38px;
  }

}
</style>