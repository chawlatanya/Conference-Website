<template>
  <div class="px-md-0">
    <div class="">
      <h1>Supported By</h1>
    </div>
    <div class="d-md-flex justify-content-around px-5">
      <div class="col-md-3 d-flex flex-column">
        <img
          src="../assets/images/anveshan.png"
          alt="Anveshan"
          class="rounded-circle"
          width="200"
        />
        <div class="caption mt-4 ">
          <p>ANVESHAN FOUNDATION</p>
        </div>
        <!-- </a> -->
      </div>

      <div class="col-md-3 d-flex flex-column ">
        <img
          src="../assets/images/ieee.png"
          alt="ieee"
          class="rounded-circle"
          width="200"
        />
        <div class="caption  align-self-center mr-md-6 pr-md-2 mt-4">
          <p>IEEE</p>
        </div>
      </div>
      <div class="col-md-3 d-flex flex-column">
        <img
          src="../assets/images/acm.png"
          alt="acm"
          class="rounded-circle"
          width="200"
        />
        <div class="caption align-self-center mr-md-6 mr-2 pr-3 pr-md-2 mt-4">
          <p>ACM CHAPTER</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupportedBy"
};
</script>

<style scoped>
h1 {
  /* color: white; */
}
p {
  /* color: white; */
}
.SupportedBy {
  /* background-image: url("../assets/images/grey.jpg"); */
  background-repeat: no-repeat;
  background-size: cover;
}
.scrollbar-near-moon {
  scrollbar-color: #b490ca #f5f5f5;
}

.fp {
  /* align-content: right;
  text-align: center; */
}
.caption {
  font-weight: 600;
  font-family: Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji !important;
}
</style>
