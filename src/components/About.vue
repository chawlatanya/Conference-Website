<template>
  <div class="about d-md-flex d-flex flex-column-reverse flex-md-row">
    <div class="about-us col-md-6">
      <h1 class="heading pl-3 pt-md-0 pt-3 "> About Us </h1>
      <p class="desription col-md-10 col-12">
        Thanks to Artificial Intelligence(AI), Machine Learning(ML), Natural Language Processing(NLP) and Speech Technology, which are enabling the development of Virtual Assistants in user-facing applications and working in the background to automate workflows. <br> IGDTUW is organizing this two days conference to foster scientific talk exchange among the Industry Practitioners, Researchers, Scientists, Students and Engineers for the Second time. It will involve Paper presentations, Tutorials and Key Note Speeches by Eminent Personalities on these technologies.
      </p>
    </div>
    <div class="col-md-6  pt-6">
      <img
        class="img-fluid"
        src="../assets/images/about.svg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
.heading {
  /* color: rgb(165, 93, 93); */
  font-size: 2.3rem;
  text-align: left;
}

.about {
  font-size: 1rem;
  text-align: justify;
}
</style>
