<template>
<router-link  to="/article/1" class="">
  <div class="a-frame-header d-flex justify-content-between">
    <div>250 هزار</div>
    <div>1405/03/21</div>
  </div>
  <div class="a-frame px-2">
    <img src="/img/article.png" class="w-100" alt="">
  </div>
  <div class="a-frame-footer">
    <b>محصول جدید کوپا رسید!</b>
    <p class="fs-12 text-justify">جدیدترین بیسکوییت کرم‌دار کوپا با طعم توت‌فرنگی وارد بازار شد. تجربه‌ای شیرین و تازه برای دوست‌داران طعم‌های خاص.</p>
  </div>

</router-link>
</template>
<script setup>

</script>

<style scoped>

.a-frame {

}

.a-frame-header {
  justify-content: space-between;
  border-radius: 16px 16px 8px 8px ;
  border: 1px solid white;
  background: rgba(255, 255, 255, 0.8);
  padding: 12px;
  color: rgba(0, 0, 0, 0.5);

}

.a-frame-footer {
  border-radius: 12px 12px 28px 28px ;
  border: 1px solid white;
  padding: 12px;
  background: rgba(255, 255, 255, 0.8);
  color: rgba(0, 0, 0, 0.5);
}

</style>