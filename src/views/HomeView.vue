<template>
  <div class="wrapper position-relative " :style="{ backgroundColor: bgColor }">
    <section id="section--1" class="section"></section>
    <section id="section--2" class="section"></section>
    <section id="section--3" class="section"></section>
    <section id="section--4" class="section"></section>
    <section id="section--5" class="section"></section>

    <div class="position-fixed mx-auto vh-100 overflow-hidden fixed-part-hero" style="">
      <div class="position-absolute w-100" style="top: 0; right: 0;">
        <img src="/img/7.png" style="position:absolute; top:70px; right: 60px; width: 150px" alt="">
        <img src="/img/5.png" style="position:absolute; top:150px; right: 0; width: 120px" alt="">
        <img src="/img/4.png" style="position:absolute; top:180px; right: 180px; width: 100px" alt="">

        <img src="/img/sun.png" style="position:absolute; width: 80px" :style="{top:sunTop, right:sunRight}">

        <img src="/img/9.png" style="position:absolute; top:60px; left: 60px; width: 150px" alt="">
        <img src="/img/6.png" style="position:absolute; top:150px; left: 0; width: 120px" alt="">
        <img src="/img/8.png" style="position:absolute; top:180px; left: 190px; width: 100px" alt="">
      </div>

      <!--        <div class="hero d-grid vh-100 overflow-hidden mx-auto" style="position: fixed; bottom:0; width: 100%">-->
      <div class="align-self-end mx-auto vh-100 overflow-hidden">
        <img src="/img/copa.png" class=" banner-width" style="position: absolute; bottom: 0; right:0;" :style="{ transform: width }">
      </div>
      <!--        </div>-->

<!--      <div class=" position-fixed mx-auto fixed-part-hero">-->
<!--        <nav-bar/>-->
<!--      </div>-->
    </div>

  </div>
  <div v-if="content" class="content text-center mx-auto w-100" style="position: fixed; top:150px; right:0">
    <div class="mx-auto text-justify" style="color:black;max-width: 500px;">
      <h2 class="mx-auto homeTitle text-center">{{ content.titleBlack }}<span class="color-red">{{
          content.titleRed
        }}</span></h2>
      <h5 class="mx-auto text-center">{{ content.txt }}</h5>

    </div>
    <router-link v-if="content.link" :to="content.link" class="mx-auto h6 btn-redd d-inline-block">
      <!--            <img src="/img/profile.svg" alt="">-->
      {{ content.label }}
    </router-link>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted, computed} from "vue";
import NavBar from "@/components/NavBar2.vue";

const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
const contents = [
  {
    titleBlack: 'داستان ما از اینجا ',
    titleRed: 'شروع شد !',
    txt: 'که تصمیم گرفتیم دنیارو خوشمزه تر و شیرین تر کنیم',
    link: '/about',
    label: 'درباره ما'
  },
  {
    titleBlack: 'این ',
    titleRed: 'خوشمزگی و شیرینی',
    txt: 'باید به دست شما میرسید پس کلی محصول هیجان انگیز تولید کردیم',
    link: '/products',
    label: 'محصولات'
  },
  {
    titleBlack: 'دنیای ',
    titleRed: 'کــــوپا',
    txt: 'دنیای کوپا زمانی شکل گرفت که محدودیت ها برای لذت بردن از این طعم ها برداشته شد، زمانی که هرکس با خلاقیتش ترکیب جدیدی ساخت',
    link: '/blog',
    label: 'بلاگ'
  },
];
// const content = ref({})
const content = ref(contents[0])
const sunTop = ref('30vh');
const sunRight = ref('5%');
const height = window.innerHeight;
const width = ref('scale(1.3)');
const bgColor = computed(() => {
  if (scrollY.value < height) {
    sunTop.value = '30vh';
    sunRight.value = '5%';
    // document.querySelector('#section--1')?.scrollIntoView();
    content.value = {};
    document.querySelector('.btn-red')?.classList.remove('btn-red');
    document.querySelector('#top-home')?.classList.add('btn-red');
    // document.querySelector('#top-home')?.click();
    return "#FFE9CF";
  }

  if (scrollY.value < 2 * height) {
    sunTop.value = '20vh';
    sunRight.value = '25%';
    document.querySelector('.btn-red')?.classList.remove('btn-red');
    document.querySelector('#top-about')?.classList.add('btn-red');
    // document.querySelector('#top-about')?.click();
    // document.querySelector('#side-about')?.click();
    // document.querySelector('#section--2')?.scrollIntoView();
    content.value = contents[0];

    width.value = 'scale(1.2)'
    return "#CFE8FF";
  }
  if (scrollY.value < 3 * height) {
    sunTop.value = '10vh';
    sunRight.value = '50%';
    document.querySelector('.btn-red')?.classList.remove('btn-red');
    document.querySelector('#top-products')?.classList.add('btn-red');
    // document.querySelector('#side-products')?.click();
    // document.querySelector('#top-products')?.click();
    // document.querySelector('#section--3')?.scrollIntoView();
    content.value = contents[1];

    width.value = 'scale(1.1)'
    return "#00a7d5";
  }
  if (scrollY.value < 4 * height) {
    sunTop.value = '25vh';
    sunRight.value = '70%';
    document.querySelector('.btn-red')?.classList.remove('btn-red');
    document.querySelector('#top-contact')?.classList.add('btn-red');
    // document.querySelector('#top-contact')?.click();
    // document.querySelector('#top-contact')?.click();
    // document.querySelector('#section--4')?.scrollIntoView();
    content.value = {};

    width.value = 'scale(1.05)'
    return "#FFBC92";
  }

  sunTop.value = '50vh';
  sunRight.value = '95%';
  document.querySelector('.btn-red')?.classList.remove('btn-red');
  document.querySelector('#top-blog')?.classList.add('btn-red');
  // document.querySelector('#top-blog')?.click();
  // document.querySelector('#side-blog')?.click();
  // document.querySelector('#section--5')?.scrollIntoView();
  content.value = contents[2];

  width.value = 'scale(1)'

  return "#104970";


});

</script>

<style scoped>


::-webkit-scrollbar {
  width: 0 !important;
}
</style>