<template>
  <div class="position-relative w-100">
    <router-view />

    <nav-bar-1 v-if="$route.path=='/'"/>
    <nav-bar-2 v-else />
  </div>
</template>

<script>
import NavBar1 from "@/components/NavBar.vue";
import NavBar2 from "@/components/NavBar1.vue";
export default {
  components:{ NavBar1, NavBar2},
  setup(){

  }
}
</script>
<style>

</style>