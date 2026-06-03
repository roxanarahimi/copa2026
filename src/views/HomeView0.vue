<template>
  <div class="home page" :style="{ background: backgrounds[currentSection] }">

    <div class="position-absolute w-100" style="top: 0; right: 0;">
      <img src="/img/7.png" style="position:absolute; top:70px; right: 60px; width: 150px" alt="">
      <img src="/img/5.png" style="position:absolute; top:150px; right: 0; width: 120px" alt="">
      <img src="/img/4.png" style="position:absolute; top:180px; right: 180px; width: 100px" alt="">

      <img src="/img/sun.png" style="position:absolute; top:300px; right: 180px; width: 80px" alt="">

      <img src="/img/9.png" style="position:absolute; top:60px; left: 60px; width: 150px" alt="">
      <img src="/img/6.png" style="position:absolute; top:150px; left: 0; width: 120px" alt="">
      <img src="/img/8.png" style="position:absolute; top:180px; left: 190px; width: 100px" alt="">
    </div>

    <div class=" position-fixed w-100">
      <nav-bar/>
    </div>
    <div class="hero d-grid vh-100  mx-auto" style="position: fixed; top:0; width: 85%">

      <div class="align-self-end">
        <img src="/img/copa.png" class="w-100" alt="">
      </div>
    </div>


    <section
        v-for="(item, index) in sections"
        :key="index"
        class="section"
        :ref="el => sectionRefs[index] = el"
    >
      <h1>{{ item }}</h1>
    </section>
  </div>


</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar00.vue'
import {onBeforeUnmount, onMounted, ref} from "vue";

export default {
  name: 'HomeView',
  components: {
    NavBar,
  },
  setup() {
    // const flag = ref(0);
    //
    // const scrollPos = ref(0);
    // window.addEventListener('scroll', function () {
    //   // setTimeout(()=>{
    //   alert();
    //   // },200)
    //   if ((document.body.getBoundingClientRect()).top > scrollPos.value) {
    //     if (flag.value > 0) {
    //       flag.value--;
    //     }
    //   } else {
    //     if (flag.value < 2) {
    //       flag.value++;
    //     }
    //   }
    //   switch (flag.value) {
    //     case 0: {
    //       document.body.style.background = 'radial-gradient(59.39% 59.39% at 50% 58.89%, #FFF5EA 0%, #FFE9CF 100%)';
    //     }
    //       break;
    //     case 1: {
    //       document.body.style.background = 'radial-gradient(59.39% 59.39% at 50% 58.89%, #EAF4FF 0%, #CFE8FF 100%)';
    //     }
    //       break;
    //     case 2: {
    //       document.body.style.background = 'radial-gradient(59.39% 59.39% at 50% 58.89%, #FFEEE2 0%, #FFBC92 100%)';
    //     }
    //       break;
    //   }
    //   scrollPos.value = document.body.getBoundingClientRect().top;
    // });
    // return {
    //   flag, scrollPos,
    // };

    const sections = [
      'Section 1',
      'Section 2',
      'Section 3',
    ]

    const backgrounds = [
      'radial-gradient(59.39% 59.39% at 50% 58.89%, #FFF5EA 0%, #FFE9CF 100%)',
      'radial-gradient(59.39% 59.39% at 50% 58.89%, #EAF4FF 0%, #CFE8FF 100%)',
      'radial-gradient(59.39% 59.39% at 50% 58.89%, #FFEEE2 0%, #FFBC92 100%)',
    ]

    const currentSection = ref(0)
    const sectionRefs = []

    let observer

    onMounted(() => {
      observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const index = sectionRefs.indexOf(entry.target)
                currentSection.value = index
              }
            })
          },
          {
            threshold: 0.5
          }
      )

      sectionRefs.forEach(section => {
        if (section) observer.observe(section)
      })
    })

    onBeforeUnmount(() => {
      if (observer) observer.disconnect()
    });

    return {
      backgrounds, currentSection,
      sectionRefs, sections
    }
  }
}
</script>


<style>
nav ul li {
  list-style: none;
}

.page {
  transition: background 1s ease-in-out;

  min-height: 100vh;
}

.section {
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  color: white;
  font-size: 64px;
  font-family: sans-serif;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
</style>