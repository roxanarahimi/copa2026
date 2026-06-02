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
    </div>
    <div class="col-11 px-0">
      <div class="row justify-content-center">
        <div class="col-md-3">
          <img src="/img/title5.svg" alt="">
        </div>
        <p class="text-center">
          کیفیت، نوآوری، شفافیت و احترام به مردم، چهار ستون اصلی برند کوپا هستند. ما باور داریم اعتماد با کیفیت ساخته
          می‌شود و با عشق ماندگار می‌ماند.
        </p>
        <div class="row p-5">
          <div v-for="(item,index) in 4" class="col-6 col-md-3 p-0">
            <div class="position-relative w-100">
              <img :src="'/img/a'+(index+1)+'.png'" class="w-100" alt="">
              <div class="position-absolute bottom-0 right-0 text-center">
                <b>نشان و جایزه</b>
                <p>همکاری با جشنواره‌های غذایی ایران</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-3">
          <img src="/img/title6.svg" alt="">
        </div>
        <p class="">
          محصولات کوپا بر اساس سخت‌گیرانه‌ترین استانداردهای ملی و بین‌المللی تولید می‌شوند — از انتخاب مواد اولیه تا
          کنترل نهایی کیفیت، هر مرحله زیر نظر متخصصان انجام می‌شود.
        </p>
        <div class="row py-5">
          <div class="s-section col-12 justify-content-md-between row">
            <div v-for="item in standards" class=" col-6 col-md-2 text-center d-grid">
              <img width="45px" src="/img/standard.svg" class="align-self-end mx-auto">
              <p class="align-self-end fs-12">تأیید انطباق محصول با مقررات کیفیت و ایمنی ملی ایران.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-3">
          <img src="/img/title7.svg" alt="">
        </div>
        <p class="">تنوع محصولات کوپا شامل بیسکوییت، ویفر، کیک، اسنک و شکلات است؛ با ده‌ها مزه و طعم منحصربه‌فرد که برای
          سلیقه‌های مختلف طراحی شده‌اند ، از کودکان تا بزرگسالان، از شیرینی تا سلامت </p>
        <div class="row py-5">
          <div v-for="item in products" class="col-md-4 p-3 p-md-5 text-center">
            <div class="row box">
              <div class="col-6 d-grid p-3">
                <p class="align-self-start title_extra_bold fs-14" style="">{{ item.title }}</p>
                <p class="align-self-start fs-12">{{ item.text }}</p>
                <router-link :to="item.link" class="align-self-end btn btn-sm btn-redd ">مشاهده همه</router-link>
              </div>
              <div class="col-6 justify-content-start">
                <img :src="item.image" class="" height="220px" width="230px"
                     style="margin-top: -25px;margin-right: -30px">
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="col-10 px-0">
      <the-footer/>
    </div>
  </div>
</template>
<script>

import {defineComponent} from "vue";
import TheFooter from "@/components/Footer.vue";

export default {
  components: {TheFooter},
  setup() {
    const achievements = [
      {icon: '', count: 10, title: '', text: ''},
      {icon: '', count: 50, title: '', text: ''},
      {icon: '', count: 1000, title: '', text: ''},
      {icon: '', count: 500, title: '', text: ''},
    ];
    const values = [
      {image: '', title: '', text: ''},
      {image: '', title: '', text: ''},
      {image: '', title: '', text: ''},
      {image: '', title: '', text: ''},
    ];
    const standards = [
      {image: '', width: '45px', title: '', text: ''},
      {image: '', width: '60px', title: '', text: ''},
      {image: '', width: '50px', title: '', text: ''},
      {image: '', width: '55px', title: '', text: ''},
      {image: '', width: '50px', title: '', text: ''},
    ];
    const products = [
      {image: '/img/chocolate.png', title: 'شکلات های کوپا', text: 'انواع شکلات صبحانه در طعم مزه های مختلف'},
      {image: '/img/jelly.png', title: 'ژله های کوپا', text: 'انواع ژله در طعم و مزه های مختلف'},
      {image: '/img/biscos.png', title: 'بیسکوییت های کوپا', text: 'انواع بیسکوییت در طعم و مزه های مختلف'},
    ];
    return {
      achievements, values, standards, products,
    }
  }
}
</script>


<style scoped>
.box {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0) 100%);
  border: 1px solid white;
  border-radius: 24px;
  text-align: center;

}

.boxess {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0) 100%);
  border: 1px solid white;
  /*border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, #FFFFFF 100%);*/
  border-radius: 24px;
  text-align: center;

  padding: 60px 24px;
}

.s-section {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0) 100%);
  border-radius: 28px;
  border: 1px solid white;
  padding: 32px;
}

.standards-w {
  width: 20%;
}
</style>