<template>
<div>
  <Layout>
    <Header/>
    <div class="py-3">
    <about id="about"></about>
    </div>
    <div class="py-3">
    <speakers id="speakers"/>
    </div>
    <div class="py-3">
    <call-for-papers id="call_for_papers"/>
    </div>
    <div class="py-3">
    <supported-by id="supported_by"/>
    </div>
    <div class="py-3">
    <contact-us id="contact_us"/>
    </div>
  </Layout>
</div>
</template>
<script>
import Header from '@/components/Header'
import Layout from '../layouts/layout.vue'
import About from '@/components/About'
import CallForPapers from '@/components/CallForPapers'
import Committee from '@/components/Committee'
import ContactUs from '@/components/ContactUs'
import Register from '@/components/Register'
import Schedule from '@/components/Schedule'
import Speakers from '@/components/Speakers'
import SupportedBy from '@/components/SupportedBy'
import Countdown from '@/components/generic/count-down'

export default {
  name: 'Homepage',
  components: {Header, About, CallForPapers, Committee, ContactUs, Register, Schedule, Speakers, SupportedBy, Layout, Countdown}
}
</script>
