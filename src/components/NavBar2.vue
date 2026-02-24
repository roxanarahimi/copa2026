
<template>
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