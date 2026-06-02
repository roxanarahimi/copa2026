
<template>
    <div class="position-absolute top-nav">
      <div class="d-flex h-100 justify-content-between align-self-center">
<!--        <div class="h-100 d-grid">-->
<!--          <div class="btn-redd align-self-center" style="width: 130px !important; height: 45px !important">-->
<!--            <img src="/img/game.svg" class="me-1" alt="">-->
<!--            <span>شروع بازی</span>-->
<!--          </div>-->
<!--        </div>-->
        <div class="h-100 d-grid">
          <nav class="inner-nav d-flex justify-content-between align-self-center p-0">
            <div class="nav-item d-grid">
              <router-link to="/" id="top-home" class="nav-link align-self-center">
                <object type="image/svg+xml" data="/img/home.svg"></object>
                <small class="d-block">خانه</small>
              </router-link>
            </div>
            <div class="nav-item d-grid">
              <router-link to="/about" :class="{'btn-redd': $route.path==='/about'}" id="top-about" class="nav-link align-self-center">
                <img src="/img/profile.svg" alt="">
                <small class="d-block">درباره ما</small>
              </router-link>
            </div>
            <div class="nav-item d-grid">
              <router-link to="/products" :class="{'btn-redd': $route.path==='/products'}" id="top-products"  class="nav-link align-self-center">
                <img src="/img/box.svg" alt="">
                <small class="d-block">محصولات</small>
              </router-link>
            </div>

            <div class="nav-item d-grid">
              <router-link to="/contact" :class="{'btn-redd': $route.path==='/contact'}" id="top-contact"  class="nav-link align-self-center">
                <img src="/img/call-calling.svg" alt="">
                <small class="d-block">ارتباط با ما</small>
              </router-link>
            </div>
            <div class="nav-item d-grid">
              <router-link to="/blog" :class="{'btn-redd': $route.path==='/blog'}" id="top-blog"  class="nav-link align-self-center">
                <img src="/img/note-2.svg" alt="">
                <small class="d-block">بلاگ</small>
              </router-link>
            </div>
          </nav>
        </div>

        <div class="d-grid">
          <div class="align-self-center">
            <img src="/img/logo.png" width="60px" height="auto" alt="">
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  setup(){


    return{

    }
  }
}
</script>

<style scoped>

</style>