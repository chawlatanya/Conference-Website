<template>
  <div>
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "@/components/generic/navbar.vue";
import Footer from "@/components/generic/footer.vue";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
