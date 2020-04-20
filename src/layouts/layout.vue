<template>
  <div>
    <Navbar />
     <transition
        name="fade"
        appear
      >
    <main>

      <slot />
    </main>
     </transition>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from '@/components/generic/navbar.vue'
import Footer from '@/components/generic/footer.vue'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 0.1s;
}

.fade-enter {
  opacity: 0;
}
</style>
