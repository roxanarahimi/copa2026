<template>
  <div class="container-fluid m-0 px-0 row justify-content-center bg-1" style=" padding-top:200px">
    <div class="col-10 ">

      <div class="row justify-content-center">
        <div class="col-md-6" >
          <img class="img-title" src="/img/title3.svg" alt="">
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
          <img class="img-title" src="/img/title2.svg" alt="">
          <p class="section-text">ما به آینده‌ای فکر می‌کنیم که در آن کوپا، الهام‌بخش طعم‌های اصیل ایرانی در بازار جهانی است ، برندی که شادی
            و خلاقیت را در قالب هر محصول به جهان معرفی می‌کند.</p>
          <img src="/img/about2.png" class="w-100" alt="">

        </div>
      </div>
    </div>
    <div class="col-12 px-0">
      <div class="position-relative">
        <div class="d-md-none col-md-4 text-center " style="top:0; left:0">
          <img class="img-title mx-auto" src="/img/title1.svg"  alt="">
          <p class="px-5 section-text">مأموریت ما خلق لحظه‌هایی شیرین و لذت‌بخش است؛ از دل بهترین مواد اولیه تا تجربه‌ی نهایی مصرف‌کننده. کوپا فقط
            بیسکوییت نمی‌سازد، ما حس خوب زندگی را می‌سازیم</p>
        </div>
        <img src="/img/about3.png" class="w-100" alt="">
        <div class="d-none d-md-block position-absolute col-md-4" style="top:0; left:10%">
          <img src="/img/title1.svg" alt="">
          <p class="section-text">مأموریت ما خلق لحظه‌هایی شیرین و لذت‌بخش است؛ از دل بهترین مواد اولیه تا تجربه‌ی نهایی مصرف‌کننده. کوپا فقط
            بیسکوییت نمی‌سازد، ما حس خوب زندگی را می‌سازیم</p>
        </div>
      </div>

    </div>
    <div class="col-md-10 row justify-content-center">
      <div class=" text-center">
        <img src="/img/title4.svg" class="img-title" alt="">
        <p class="section-text px-5">محصولات کوپا بر اساس سخت‌گیرانه‌ترین استانداردهای ملی و بین‌المللی تولید می‌شوند — از انتخاب مواد اولیه تا
          کنترل نهایی کیفیت، هر مرحله زیر نظر متخصصان انجام می‌شود.</p>

      </div>
    </div>
    <div class="row p-md-5 my-4">
      <div v-for="item in achievements" class="col-6 col-md-3 mb-3 p-1">
        <div class="box w-100 h-100 p-3 ">
          <img src="/img/profile.svg" width="70px" class="color-red" alt="">
          <h1 class="title_extra_bold color-red" >{{item.count}}+</h1>
          <b>{{item.title}}</b>
          <p class="text-center">{{ item.text }}</p>
        </div>
      </div>
    </div>
    <div class="col-9 px-0">
      <div class="row justify-content-center">
        <div class="col-md-3 text-center">
          <img class="img-title" src="/img/title5.svg" alt="">
        </div>
        <p class="text-center section-text">
          کیفیت، نوآوری، شفافیت و احترام به مردم، چهار ستون اصلی برند کوپا هستند. ما باور داریم اعتماد با کیفیت ساخته
          می‌شود و با عشق ماندگار می‌ماند.
        </p>
      </div>
    </div>
    <div class="row px-0 py-5">
      <div v-for="item in values" class="col-6 col-md-3 p-0">
        <div class="position-relative w-100">
          <img :src="item.image" class="w-100" alt="">
          <div class="position-absolute bottom-0 right-0 fs-12 text-center value-text">
            <b>{{item.title}}</b>
            <p>{{  item.text }}</p>
          </div>
        </div>
      </div>
    </div>
   <div class="col-11">


    <div class="row justify-content-center">
        <div class="col-md-3 text-center">
          <img class="img-title" src="/img/title6.svg" alt="">
        </div>
        <p class="section-text">
          محصولات کوپا بر اساس سخت‌گیرانه‌ترین استانداردهای ملی و بین‌المللی تولید می‌شوند — از انتخاب مواد اولیه تا
          کنترل نهایی کیفیت، هر مرحله زیر نظر متخصصان انجام می‌شود.
        </p>
        <div class="row py-5">
          <div class="s-section col-12 justify-content-md-between row">
            <div v-for="item in standards" class=" col-6 col-md-2 text-center d-grid">
              <img width="45px" :src="item.image" class="align-self-end mx-auto">
              <p class="align-self-end fs-12">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-3 text-center">
          <img class="img-title" src="/img/title7.svg" alt="">
        </div>
        <p class="section-text">تنوع محصولات کوپا شامل بیسکوییت، ویفر، کیک، اسنک و شکلات است؛ با ده‌ها مزه و طعم منحصربه‌فرد که برای
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
  // ۱۲۳۴۵۶۷۸۹۰
    const achievements = [
      {icon: '', count: '۱۰', title: 'جایزه و نشان', text: 'همکاری با جشنواره‌های غذایی ایران'},
      {icon: '', count: '۵۰', title: 'محصول متنوع', text: 'ویفر، بیسکوییت، شکلات و نوشیدنی'},
      {icon: '', count: '۲۰', title: 'سال تجربه', text: 'سال‌ها طعم‌آفرینی با کیفیت و نوآوری'},
      {icon: '', count: '۵۰۰', title: 'نیروی انسانی', text: 'تیمی خلاق و عاشق طعم خوب'},
    ];
    const values = [
      {image: 'img/a1.png', title: 'کیفیت بدون مصالحه', text: 'هیچ‌چیز جای کیفیت را نمی‌گیرد؛ از انتخاب مواد اولیه تا کنترل نهایی، همه با وسواس کوپا.'},
      {image: 'img/a2.png', title: 'احترام به مصرف‌کننده', text: 'با عشق برای شما می‌سازیم ، کیفیت، شفافیت و احترام، پایه‌ی هر لقمه از محصولات کوپاست.'},
      {image: 'img/a3.png', title: 'نوآوری در طعم و طراحی', text: 'هر تجربه‌ی جدید، نتیجه‌ی ترکیب خلاقیت، فناوری و عشق به طعم‌های خاص است.'},
      {image: 'img/a4.png', title: 'توجه به محیط‌زیست', text: 'ما به تولید محصولات خوش‌طعم و دوستدار زمین متعهدیم؛ از مواد اولیه تا بسته‌بندی.'},
    ];
    const standards = [
      {image: 'img/standard.svg', width: '45px', text: 'تأیید انطباق محصول با مقررات کیفیت و ایمنی ملی ایران.'},
      {image: 'img/sib.svg', width: '60px', text: 'نشانه‌ای از سلامت، بهداشت و ایمنی مصرف محصول.'},
      {image: 'img/halal.svg', width: '50px', text: 'تأیید تولید و مواد اولیه مطابق با اصول شرعی و اسلامی.'},
      {image: 'img/iso.svg', width: '55px', text: 'استاندارد بین‌المللی مدیریت ایمنی مواد غذایی.'},
      {image: 'img/haccp.svg', width: '50px', text: 'سیستم کنترل خطرات و ایمنی در فرایند تولید مواد غذایی.'},
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

</style>