<template>
  <div class="SupportedBy">
    <h1>SUPPORTED BY</h1>
    <div class="container">
    <div class="row">
      <div class="col-md-4 fp">
        <div class="thumbnail" >
          <!-- <a href="../assets/images/anveshan.png"> -->
            <img
              src="../assets/images/anveshan.png"
              alt="Anveshan"
              class="rounded"
            />
            <div class="caption mt-2">
              <p>ANVESHAN FOUNDATION</p>
            </div>
          <!-- </a> -->
        </div>
      </div>
      <div class="col-md-4 fp" >
        <div class="thumbnail">
          <!-- <a href="../assets/images/ieee.png"> -->
            <img src="../assets/images/ieee.png" alt="ieee" class="rounded" />
            <div class="caption  mt-2">
              <p>IEEE</p>
            </div>
          <!-- </a> -->
        </div>
      </div>
      <div class="col-md-4 fp">
        <div class="thumbnail" text-animation="bounce">
          <!-- <a href="../assets/images/acm.png"> -->
            <img
              src="../assets/images/acm.png"
              alt="acm"
              class="rounded"
            />
            <div class="caption  mt-2">
              <p>ACM CHAPTER</p>
            </div>
          <!-- </a> -->
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SupportedBy'
}
</script>

<style scoped>
h1 {
  text-align: center;

  /* color: white; */
}
p {
  align-self: center;
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
  align-content: right;
  text-align: center;
}
.caption{
font-weight:600;
font-family: Avenir,
     -apple-system,
     BlinkMacSystemFont,
     Segoe UI,
     Roboto,
     Helvetica Neue,
     Arial,
     Noto Sans,
     sans-serif,
     Apple Color Emoji,
     Segoe UI Emoji,
     Segoe UI Symbol,
     Noto Color Emoji !important;
}
</style>
