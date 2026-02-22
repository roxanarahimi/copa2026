<template>
  <div class="home position-relative">
    <div class="position-absolute w-100" style="top: 0; right: 0;" >
      <img src="/img/7.png" style="position:absolute; top:70px; right: 60px; width: 150px"  alt="">
      <img src="/img/5.png" style="position:absolute; top:150px; right: 0; width: 120px"  alt="">
      <img src="/img/4.png" style="position:absolute; top:180px; right: 180px; width: 100px"  alt="">

      <img src="/img/sun.png" style="position:absolute; top:300px; right: 180px; width: 80px"  alt="">

      <img src="/img/9.png" style="position:absolute; top:60px; left: 60px; width: 150px"  alt="">
      <img src="/img/6.png" style="position:absolute; top:150px; left: 0; width: 120px"  alt="">
      <img src="/img/8.png" style="position:absolute; top:180px; left: 190px; width: 100px"  alt="">
    </div>
    <div class="position-absolute top-nav">
      <div class="d-flex h-100 justify-content-between align-self-center">
        <div class="h-100 d-grid">
          <div class="btn-red align-self-center" style="width: 130px !important; height: 45px !important">
            <img src="/img/game.svg" class="me-1" alt="">
            <span>شروع بازی</span>
          </div>
        </div>
        <div class="h-100 d-grid">
          <nav class="inner-nav d-flex justify-content-between align-self-center p-0">
            <div class="nav-item d-grid ">
              <div id="top-home" class="btn-red px-4">
                <img src="/img/home.svg" alt="">
                <small class="d-block">خانه</small>
              </div>
            </div>
            <div class="nav-item d-grid">
              <div id="top-products" class="align-self-center">
                <img src="/img/box.svg" alt="">
                <small class="d-block">محصولات</small>
              </div>
            </div>
            <div class="nav-item d-grid">
              <div id="top-about" class="align-self-center">
                <img src="/img/profile.svg" alt="">
                <small class="d-block">درباره ما</small>
              </div>
            </div>
            <div class="nav-item d-grid">
              <div  id="top-contact" class="align-self-center">
                <img src="/img/call-calling.svg" alt="">
                <small class="d-block">ارتباط با ما</small>
              </div>
            </div>
            <div class="nav-item d-grid">
              <div  id="top-blog" class="align-self-center">
                <img src="/img/note-2.svg" alt="">
                <small class="d-block">بلاگ</small>
              </div>
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
    <div class="position-absolute d-grid vh-100 side-nav">
      <nav class="inner-nav align-self-center side-nav-inner position-relative p-0">
        <div class="nav-item d-grid">
          <div class="align-self-center my-2">
            <img src="/img/arrow-up.svg" alt="">
          </div>
        </div>
        <img src="/img/Rectangle%203.png" alt="" style="position: absolute;top: 40px; right:-19px;">
        <div class="nav-item d-grid">
          <div id="top-products" class="align-self-center btn-red2 mb-3">
            <img src="/img/box.svg" alt="">
            <small class="">محصولات</small>
          </div>
        </div>
        <div class="nav-item d-grid">
          <div id="top-about" class="align-self-center btn-gray mb-3">
            <img src="/img/profile.svg" alt="">
            <small class="">درباره ما</small>
          </div>
        </div>
        <div class="nav-item d-grid">
          <div  id="top-contact" class="align-self-center btn-gray mb-3">
            <img src="/img/call-calling.svg" alt="">
            <small class="">ارتباط با ما</small>
          </div>
        </div>
        <div class="nav-item d-grid">
          <div  id="top-blog" class="align-self-center btn-gray">
            <img src="/img/note-2.svg" alt="">
            <small class="">بلاگ</small>
          </div>
        </div>
        <div class="nav-item d-grid">
          <div class="align-self-center mt-3">
            <img src="/img/arrow-down.svg" alt="">
          </div>
        </div>
      </nav>
    </div>
    <div class="hero d-grid vh-100">
      <div class="align-self-end">
        <img src="/img/copa.png" class="w-100" alt="">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {}
}
</script>
<style>
nav ul li {
  list-style: none;
}
</style>