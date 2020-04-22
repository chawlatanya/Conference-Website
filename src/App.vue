<template>
  <Layout>
    <router-view></router-view>
    <About />
    <!-- <div id="app">
      <b> Hello</b>
    </div> -->
  </Layout>
</template>

<script>
import Layout from "./layouts/layout.vue";
import Home from "@/components/Home";
import About from "@/components/About";
import CallForPapers from "@/components/CallForPapers";
import Committee from "@/components/Committee";
import ContactUs from "@/components/ContactUs";
import Register from "@/components/Register";
import Schedule from "@/components/Schedule";
import Speakers from "@/components/Speakers";
import SupportedBy from "@/components/SupportedBy";
export default {
  name: "App",
  components: { Layout  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
