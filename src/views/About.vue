<template>
  <div class="container-fluid px-0 row justify-content-center bg-1" style="padding-top:200px">
    <div class="col-10 ">

      <the-footer />
    </div>
  </div>
</template>
<script>

import {defineComponent} from "vue";
import TheFooter from "@/components/Footer.vue";

export default defineComponent({
  components: {TheFooter}
})
</script>


<style scoped>

</style>