<template>
  <Layout>
    <!-- <about/> -->
    <call-for-papers/>
  </Layout>
</template>
<script>
import Layout from '../layouts/layout.vue'
import CallForPapers from '@/components/CallForPapers'
import About from '@/components/About'

export default {
  name: 'Callforpapers',
  components: {CallForPapers, Layout, About}
}
</script>
