<template>
<!--  <img src="/img/car.webm" class="w-100 position-fixed car" :style="{ transform: scale,top:carTop,right:carRight }" style="z-index: 20;" alt="">-->
  <video
      class="w-100 position-fixed car d-none d-md-block" :style="{ transform: scale,top:carTop,right:carRight }" style="z-index: 2000;"
      ref="videoRef"
      muted
      playsinline
      preload="auto"
  >
    <source src="/img/car.webm" type="video/webm">
  </video>
 <video
      class="w-100 position-fixed carM d-md-none " :style="{ transform: scaleM,top:carTopM,right:carRightM }" style="z-index: 2000;"
      ref="videoRef"
      muted
      playsinline
      preload="auto"
  >
    <source src="/img/car.webm" type="video/webm">
  </video>

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
        <img src="/img/copa.png" class="banner-width d-none d-md-block" style="position: absolute; bottom: 0; right:0;" :style="{ transform: width }">
        <img src="/img/copam.png" class="banner-width d-md-none"  :style="{ transform: width }">
      </div>
      <!--        </div>-->

<!--      <div class=" position-fixed mx-auto fixed-part-hero">-->
<!--        <nav-bar/>-->
<!--      </div>-->
    </div>

  </div>
  <div v-if="content" class="content text-center mx-auto w-100 homeTxt" style="">
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

const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};
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
    titleBlack: 'راه هــــای ',
    titleRed: 'ارتبــــاطی',
    txt: '',
    link: '/contact',
    label: 'تماس با ما'
  },
  {
    titleBlack: 'دنیای ',
    titleRed: 'کــــوپا',
    txt: 'دنیای کوپا زمانی شکل گرفت که محدودیت ها برای لذت بردن از این طعم ها برداشته شد، زمانی که هرکس با خلاقیتش ترکیب جدیدی ساخت',
    link: '/blog',
    label: 'بلاگ'
  },

];
const content = ref(contents[0])
const sunTop = ref('30vh');
const sunRight = ref('5%');
const height = window.innerHeight;
const width = ref('scale(1.3)');
const scale = ref('scale(1)');
const carTop = ref('-10%');
const carRight = ref('-5%');
const scaleM = ref('scale(1.8)');
const carTopM = ref('60%');
const carRightM = ref('-12%');
const bgColor = computed(() => {
  if (scrollY.value < height) {
    sunTop.value = '30vh';
    sunRight.value = '5%';
    content.value = {};
    document.querySelector('.btn-red')?.classList.remove('btn-red');
    document.querySelector('#top-home')?.classList.add('btn-red');
    return "#FFE9CF";
  }

  if (scrollY.value < 2 * height) {
    sunTop.value = '20vh';
    sunRight.value = '25%';
    document.querySelector('.btn-red')?.classList.remove('btn-red');
    document.querySelector('#top-about')?.classList.add('btn-red');
    content.value = contents[0];

    width.value = 'scale(1.2)'
    scale.value = 'scale(0.9)'
    carTop.value = '-7%'
    carRight.value = '-4%'

    scale.value = 'scale(1.1)'
    carTop.value = '65%'
    carRight.value = '-4%'

    return "#CFE8FF";
  }
  if (scrollY.value < 3 * height) {
    sunTop.value = '10vh';
    sunRight.value = '50%';
    document.querySelector('.btn-red')?.classList.remove('btn-red');
    document.querySelector('#top-products')?.classList.add('btn-red');
    content.value = contents[1];

    width.value = 'scale(1.1)'
    scale.value = 'scale(0.9)'
    carTop.value = '-7%'
    carRight.value = '-4%'
    return "#00a7d5";
  }
  if (scrollY.value < 4 * height) {
    sunTop.value = '25vh';
    sunRight.value = '70%';
    document.querySelector('.btn-red')?.classList.remove('btn-red');
    document.querySelector('#top-contact')?.classList.add('btn-red');
    content.value = contents[2];
    width.value = 'scale(1.05)'
    scale.value = 'scale(0.8)'
    carTop.value = '-6%'
    carRight.value = '-3%'
    return "#FFBC92";
  }

  sunTop.value = '50vh';
  sunRight.value = '100%';
  document.querySelector('.btn-red')?.classList.remove('btn-red');
  document.querySelector('#top-blog')?.classList.add('btn-red');

  content.value = contents[3];

  width.value = 'scale(1)'
  scale.value = 'scale(0.8)'
  carTop.value = '-5%'
  carRight.value = '-3%'
  return "#104970";


});

const videoRef = ref(null)

const handleScroll2 = () => {
  const video = videoRef.value

  if (!video || !video.duration) return

  const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight

  const progress = window.scrollY / maxScroll

  video.currentTime = progress * video.duration
}


onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener('scroll', handleScroll2)

  videoRef.value.addEventListener('loadedmetadata', () => {
    handleScroll2()
  })
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener('scroll', handleScroll2)

});
</script>

<style scoped>


::-webkit-scrollbar {
  width: 0 !important;
}
</style>