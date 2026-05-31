<template>
  <div class="container-fluid px-0 row justify-content-center bg-1" style="padding-top:200px">
    <div class="col-10 ">

      <div class="row justify-content-center">
        <div class="col-md-6">
          <img src="/img/title3.svg" alt="">
          <p>
            <b>بهار سال ۱۳۹۴</b> و در آرزوی داشتن دنیایی شیرین تر و خوشمزه تر، شروع به تولید انواع بیسکوییت، ویفر، شکلات
            صبحانه، آدامس، ژله و … کردیم. این شروع فعالیت ما با برند اصلی <b>کوپا</b> بود</p>
          <p><b>کوپا</b> یک داستان هیجان انگیز از ماجراجویی طعم‌ها برای رسیدن به یک حس جدید است تا لبخند روی صورت شما
            نقش
            ببندد. هدف ما از تولید، عرضه محصولات <b>با کیفیت و استاندارد روز جهانی</b> به مصرف کنندگان عزیز
            <b>ایرانی</b> است</p>
        </div>
        <div class="col-md-6">
          <img src="/img/about1.png" alt="">
        </div>
        <div class="col-md-6">
          <img src="/img/title2.svg" alt="">
          <p>ما به آینده‌ای فکر می‌کنیم که در آن کوپا، الهام‌بخش طعم‌های اصیل ایرانی در بازار جهانی است ، برندی که شادی
            و خلاقیت را در قالب هر محصول به جهان معرفی می‌کند.</p>
          <img src="/img/about2.png" class="w-100" alt="">

        </div>
      </div>
    </div>
    <div class="col-12 px-0">
      <div class="position-relative">
        <img src="/img/about3.png" class="w-100" alt="">
        <div class="position-absolute col-md-4" style="top:0; left:10%">
          <img src="/img/title1.svg" alt="">
          <p>مأموریت ما خلق لحظه‌هایی شیرین و لذت‌بخش است؛ از دل بهترین مواد اولیه تا تجربه‌ی نهایی مصرف‌کننده. کوپا فقط
            بیسکوییت نمی‌سازد، ما حس خوب زندگی را می‌سازیم</p>
        </div>
      </div>

    </div>
    <div class="col-10 row justify-content-center">
      <div class="col-8">
        <img src="/img/title4.svg" alt="">
        <p>محصولات کوپا بر اساس سخت‌گیرانه‌ترین استانداردهای ملی و بین‌المللی تولید می‌شوند — از انتخاب مواد اولیه تا
          کنترل نهایی کیفیت، هر مرحله زیر نظر متخصصان انجام می‌شود.</p>

      </div>
      <div class="row p-5">
        <div v-for="item in 4" class="col-6 col-md-3 ">
          <div class="boxess w-100">
            <img src="/img/profile.svg" width="70px" class="color-red" alt="">
            <h1 class="color-red">10+</h1>
            <b>نشان و جایزه</b>
            <p>همکاری با جشنواره‌های غذایی ایران</p>
          </div>
        </div>
      </div>


      <div class="row justify-content-center">
        <div class="col-md-3">
          <img src="/img/title5.svg" alt="">
          <p class="fs-10">
            کیفیت، نوآوری، شفافیت و احترام به مردم، چهار ستون اصلی برند کوپا هستند. ما باور داریم اعتماد با کیفیت ساخته می‌شود و با عشق ماندگار می‌ماند.
          </p>
        </div>

      </div>

      <div class="row justify-content-center">
        <div class="col-md-3">
          <img src="/img/standard.svg" alt="">
          <p class="fs-10"></p>
        </div>
      </div>

      <the-footer/>
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
.boxess {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0) 100%);
  border: 1px solid white;
  /*border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, #FFFFFF 100%);*/
  border-radius: 24px;
  text-align: center;

  padding: 60px 24px;
}
</style>