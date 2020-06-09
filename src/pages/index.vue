<template>
  <div>
    <Layout>
      <Header />
      <div class="pb-md-6 px-md-6 pt-md-6 p-3">
        <about id="about"></about>
      </div>
      <div class="pb-md-6 px-md-6 pt-md-0 p-3">
        <speakers id="speakers" />
      </div>
      <div class="pt-md-0 px-md-6 pb-md-3 p-3">
        <call-for-papers id="call_for_papers" />
      </div>
      <div class="pb-md-6 px-md-6 pt-md-0 p-3">
        <supported-by id="supported_by" />
      </div>
       <div class="pb-md-3 px-md-6 pt-md-0 p-3">
        <schedule id="schedule" />
      </div>
      <div class="pb-md-6 px-md-6 pt-md-0 p-3">
        <committee id="committee" />
      </div>
      <div class="pt-md-0 px-md-6 pb-md-3 p-3">
        <contact-us id="contact_us" />
      </div>
    </Layout>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Layout from "../layouts/layout.vue";
import About from "@/components/About";
import CallForPapers from "@/components/CallForPapers";
import Committee from "@/components/Committee";
import ContactUs from "@/components/ContactUs";
import Register from "@/components/Register";
import Schedule from "@/components/Schedule";
import Speakers from "@/components/Speakers";
import SupportedBy from "@/components/SupportedBy";
import Countdown from "@/components/generic/count-down";

export default {
  name: "Homepage",
  components: {
    Header,
    About,
    CallForPapers,
    Committee,
    ContactUs,
    Register,
    Schedule,
    Speakers,
    SupportedBy,
    Layout,
    Countdown
  }
};
</script>
