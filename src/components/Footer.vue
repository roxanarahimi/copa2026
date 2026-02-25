<template>
  <footer>
    <div class="row justify-content-center">
      <div class="row px-0 justify-content-center footer-sm-bg">
        <div class="row  justify-content-center">
          <div class="col-md-10 footer-frame1 footer-border-bottom">
            <div>
              <img class="d-none d-md-block w-100" src="/img/Chat%20Header.svg" alt="">
              <img class="d-md-none w-100" src="/img/Chat%20Header2.svg" alt="">
            </div>
          </div>
          <div class="col-12 row m-0 footer-frame2 ">
            <div class="col-md-4 footer-border-left footer-border-bottom mb-3 mb-md-0">
              <img class="d-none d-md-block w-100 mb-3" src="/img/Links%20Header.svg" alt="">
              <img class="d-md-none w-100 mb-3" src="/img/Links%20Header2.svg" alt="">
              <div class="links mb-3 mb-md-0">
                <router-link to="/categories" class="d-block footer-link  w-100">
                  <div class="d-flex justify-content-between py-3 border-bottom">
                    <div class="d-flex">
                      <img src="/img/box.svg" width="18px" alt="">
                      <p class="fs-14">محصولات</p>
                    </div>
                    <div class="d-flex en">
                      <img src="/img/send.svg" width="16px" alt="">
                      <p class="fs-10">Products</p>
                    </div>
                  </div>
                </router-link>

                <router-link to="/about" class="d-block footer-link  w-100">
                  <div class="d-flex justify-content-between pt-3 pb-3 border-bottom">
                    <div class="d-flex">
                      <img src="/img/profile.svg" width="18px" alt="">
                      <p class="fs-14">درباره ما</p>
                    </div>
                    <div class="d-flex en">
                      <img src="/img/send.svg" width="16px" alt="">
                      <p class="fs-10">About</p>
                    </div>
                  </div>
                </router-link>

                <router-link to="/contact" class="d-block footer-link  w-100">
                  <div class="d-flex justify-content-between pt-3 pb-3 border-bottom">
                    <div class="d-flex">
                      <img src="/img/call-calling.svg" width="18px" alt="">
                      <p class="fs-14">تماس با ما</p>
                    </div>
                    <div class="d-flex en">
                      <img src="/img/send.svg" width="16px" alt="">
                      <p class="fs-10">Contact</p>
                    </div>
                  </div>
                </router-link>

                <router-link to="/blog" class="d-block footer-link  w-100">
                  <div class="d-flex justify-content-between pt-3 pb-3">
                    <div class="d-flex">
                      <img src="/img/note-2.svg" width="18px" alt="">
                      <p class="fs-14">وبلاگ</p>
                    </div>
                    <div class="d-flex en">
                      <img src="/img/send.svg" width="16px" alt="">
                      <p class="fs-10">Blog</p>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="col-md-4 footer-border-left d-grid  footer-border-bottom mb-3">
              <img class="d-none d-md-block w-100 mb-3" src="/img/Address%20Header.svg" alt="">
              <img class="d-md-none w-100 mb-3 " src="/img/Address%20Header2.svg" alt="">
              <div class="address mb-3 align-self-start">
                <p class="fs-14 text-start">ایران، تهران، گیشا، خیابان بلوچستان، پلاک ۵۸</p>
                <p class="en fs-12 text-end" >Iran, Tehran, Gisha, Boluchestan Street, No. 58</p>
              </div>
              <div class="row  m-0 align-self-end">
                <div class="col-6 px-1 col-md-12 mb-2">
                  <div class="neshan">
                    <img src="/img/Neshan%20Text%20Container.svg" alt="">
                    <img src="/img/Website%20&%20Application.png" alt="">
                  </div>
                </div>
                <div class="col-6 px-1 col-md-12 mb-1">
                  <div class="balad">
                    <img src="/img/Balad%20Text%20Container.svg" alt="">
                    <img src="/img/Website%20&%20Application%20(1).png" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 footer-border-bottom mb-3 d-grid h-100">
              <img class="d-none d-md-block w-100 mb-3" src="/img/Contact%20Info%20Header.svg" alt="">
              <img class="d-md-none w-100 mb-3" src="/img/Contact%20Info%20Header2.svg" alt="">
              <div class="align-self-end">
                <div class="contact mb-3">
                  <div class="text-start">
                    <p>دفتر مرکزی</p>
                    <p class="en fs-12">Head Office</p>
                  </div>
                  <div class="d-grid h-100">
                    <p class="en align-sel-center mt-2">+9821 41 638 000</p>
                  </div>
                </div>
                <div class="contact mb-3">
                  <div class="text-start">
                    <p>دفتر پخش</p>
                    <p class="en fs-12">Distribution Office</p>
                  </div>
                  <div class="d-grid h-100">
                    <p class="en align-sel-center mt-2">+9821 889 7609 1-4</p>
                  </div>
                </div>
                <div class="contact mb-3 mb-md-0">
                  <div class="text-start">
                    <p>ایمیل</p>
                    <p class="en fs-12">Email</p>
                  </div>
                  <div class="d-grid h-100">
                    <p class="en align-sel-center mt-2">info@amadehlaziz.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-10 col-md-11 footer-frame3 mb-4 d-md-flex justify-content-between">
        <div class="d-grid h-100 d-none d-md-block">
          <img src="/img/Logo2.svg" class="align-self-center" width="85px" alt="">
        </div>
        <div class="mb-3">
          <p class="fs-14">تمامی حقوق این وبسایت متعلق به شرکت آماده لذیذ است</p>
          <small class="en fs-10">All rights to this website are owned by Amadeh Laziz Company</small>
        </div>
        <div class="d-flex justify-content-center">
          <div class="footer-icon telegram"><img class="mx-auto align-self-center" src="/img/send-2.svg" alt=""></div>
          <div class="footer-icon facebook"><img class="mx-auto align-self-center" src="/img/facebook.svg" alt=""></div>
          <div class="footer-icon instagram"><img class="mx-auto align-self-center" src="/img/instagram.svg" alt=""></div>
        </div>

      </div>

    </div>
  </footer>
</template>
<script>

</script>
<style scoped>

</style>