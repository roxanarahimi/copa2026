
<template>
    <div class="position-absolute top-nav">
      <div class="d-flex h-100 justify-content-between align-self-center">
        <div class="h-100 d-grid">
          <div class="btn-redd align-self-center" style="width: 130px !important; height: 45px !important">
            <img src="/img/game.svg" class="me-1" alt="">
            <span>شروع بازی</span>
          </div>
        </div>
        <div class="h-100 d-grid">
          <nav class="inner-nav d-flex justify-content-between align-self-center p-0">
            <div class="nav-item d-grid ">
              <div id="top-home"  @click="navToggle('home')"  class="nav-link align-self-center btn-red">
                <img src="/img/home.svg" alt="">
                <small class="d-block">خانه</small>
              </div>
            </div>
            <div class="nav-item d-grid">
              <div id="top-products"  @click="navToggle('products')"   class="nav-link align-self-center">
                <img src="/img/box.svg" alt="">
                <small class="d-block">محصولات</small>
              </div>
            </div>
            <div class="nav-item d-grid">
              <div id="top-about"  @click="navToggle('about')"  class="nav-link align-self-center">
                <img src="/img/profile.svg" alt="">
                <small class="d-block">درباره ما</small>
              </div>
            </div>
            <div class="nav-item d-grid">
              <div  id="top-contact"  @click="navToggle('contact')"  class="nav-link align-self-center">
                <img src="/img/call-calling.svg" alt="">
                <small class="d-block">ارتباط با ما</small>
              </div>
            </div>
            <div class="nav-item d-grid">
              <div  id="top-blog"  @click="navToggle('blog')"  class="nav-link align-self-center">
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
          <div id="side-products"  @click="navToggle('products')"  class="side-nav-link align-self-center btn-gray mb-3">
            <img src="/img/box.svg" alt="">
            <small class="">محصولات</small>
          </div>
        </div>
        <div class="nav-item d-grid">
          <div id="side-about"  @click="navToggle('about')"  class="side-nav-link align-self-center btn-gray mb-3">
            <img src="/img/profile.svg" alt="">
            <small class="">درباره ما</small>
          </div>
        </div>
        <div class="nav-item d-grid">
          <div  id="side-blog"  @click="navToggle('blog')"  class="side-nav-link align-self-center btn-gray">
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


</template>
<script>
export default {
  setup(){
    const navToggle = (id)=>{
      document.querySelector('.btn-red').classList.remove('btn-red');
      document.querySelector('.btn-red2')?.classList.add('btn-gray');
      document.querySelector('.btn-red2')?.classList.remove('btn-red2');

      document.querySelector('#top-'+id).classList.add('btn-red');
      document.querySelector('#side-'+id)?.classList.remove('btn-gray');
      document.querySelector('#side-'+id)?.classList.add('btn-red2');
    }
    return{
navToggle,
    }
  }
}
</script>

<style scoped>

</style>