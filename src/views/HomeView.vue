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


    <div class="hero d-grid vh-100">
      <div class="align-self-end">
        <img src="/img/copa.png" class="w-100" alt="">
      </div>
    </div>
    <div class="  w-100"><nav-bar /></div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
  },
}
</script>
<style>
nav ul li {
  list-style: none;
}
</style>