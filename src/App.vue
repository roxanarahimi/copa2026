<template>
  <div class="position-relative w-100">
    <router-view />
    <nav-bar />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components:{ NavBar},
  setup(){

  }
}
</script>
<style>

</style>