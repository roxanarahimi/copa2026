
<template>
    <div class="position-fixed top-nav">
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
              <div id="top-home" @click="navToggle('home',1)"  class="nav-link align-self-center btn-red">
                <object type="image/svg+xml" data="/img/home.svg"></object>
                <small class="d-block">خانه</small>
              </div>
            </div>
            <div class="nav-item d-grid">
              <div id="top-about"  @click="navToggle('about',2)"  class="nav-link align-self-center">
                <img src="/img/profile.svg" alt="">
                <small class="d-block">درباره ما</small>
              </div>
            </div>
            <div class="nav-item d-grid">
              <div id="top-products"  @click="navToggle('products',3)"   class="nav-link align-self-center">
                <img src="/img/box.svg" alt="">
                <small class="d-block">محصولات</small>
              </div>
            </div>

            <div class="nav-item d-grid">
              <div  id="top-contact"  @click="navToggle('contact',4)"  class="nav-link align-self-center">
                <img src="/img/call-calling.svg" alt="">
                <small class="d-block">ارتباط با ما</small>
              </div>
            </div>
            <div class="nav-item d-grid">
              <div  id="top-blog"  @click="navToggle('blog',5)"  class="nav-link align-self-center">
                <img src="/img/note-2.svg" alt="">
                <small class="d-block">بلاگ</small>
              </div>
            </div>
          </nav>
        </div>

<!--        <div class="d-grid">-->
<!--          <div class="align-self-center">-->
<!--            <img src="/img/logo.png" width="60px" height="auto" alt="">-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
</template>
<script>
export default {
  setup(){
    const navToggle = (id,n)=>{
     document.querySelector('#section--'+n)?.scrollIntoView();
     // console.log (document.querySelector('#section--'+n).scrollIntoView());
      // document.querySelector('#section--'+n).scrollIntoView();

setTimeout(()=>{
  document.querySelectorAll('.btn-red')?.forEach((element)=>{
    element.classList.remove('btn-red');
  });
  document.querySelector('#top-'+id)?.classList.add('btn-red');
},100)
      // document.querySelector('.btn-red2')?.classList.add('btn-gray');
      // document.querySelector('.btn-red2')?.classList.remove('btn-red2');
      // document.querySelector('#side-'+id)?.classList.add('btn-red2');

    }
    return{
navToggle,
    }
  }
}
</script>

<style scoped>

</style>