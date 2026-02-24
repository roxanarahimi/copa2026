<template>
<div class="container-fluid px-0 row justify-content-center bg-1" style="padding-top:200px">
  <div class="col-10 ">
    <div class="frame w-100 d-grid mb-3 text-center ">
    <div class="align-self-center">
      <p class="title ">دسته بندی</p>
      <p class="title_extra_black color-red">محصولات کوپا</p>
    </div>
    </div>

    <div class="d-flex mb-3" v-for="(item, index) in data">
      <div class="frame2-right"></div>
      <div class="frame2 w-100 my-3">
        <div class="row justify-content-between "  :class="{'flex-row-reverse':index%2==0}">
          <div class="col-lg-6 text-end position-relative " :class="item.class">
            <img :src="item.image" class="cat-img" alt="">

          </div>
          <div class="col-lg-6 text-start p-5 h-100">
            <p class="title_en">{{ item.title_en }}</p>
            <p class="title_extra_bold">{{ item.title }}</p>
            <div class="btn-redd d-inline-block p-2">
              <img src="/img/box.svg" alt="">
              <small>مشاهده محصولات</small>
            </div>
          </div>
        </div>
      </div>
      <div class="frame2-left"></div>
    </div>
    <the-footer />
  </div>
</div>


</template>
<script>
import TheFooter from "@/components/Footer.vue";
export default {
  components:{TheFooter},
  setup(){
    const data = [
      {title:'اوکوپا', title_en:'OCOPA', image:'/img/ocopa.png',class:'bg-gradient-blue'},
      {title:'بیسکوئیت های کوپا', title_en:'Copa Biscuits', image:'/img/bisco.png', class:'bg-gradient-yellow'},
      {title:'ویفر های کوپا', title_en:'Copa Wafers', image:'/img/vifer.png',class:'bg-gradient-red'},
      {title:'شکلات های صبحانه', title_en:'Breakfast Chocolates', image:'/img/choco.png',class:'bg-gradient-brown'},
      {title:'پرلیز کوپا', title_en:'Copa Pearliez', image:'/img/pearlies.png',class:'bg-gradient-pink'},
    ];

    return{ data}
  }
}
</script>
<style scoped>

</style>