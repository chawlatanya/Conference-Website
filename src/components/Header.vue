<template>
  <div id="app">
    <div
      class="header_wrapper d-md-none d-flex flex-column justify-content-center"
    >
      <transition name="slide" mode="out-in">
        <div
          class="main-slide d-flex flex-column container align-items-center"
          v-if="main_slide"
          :key="main_slide"
        >
          <div class="header_mobile d-flex flex-column p-3 my-6 ">
            <div class="heading_mobile ">
              <span data-text="A">A</span>
              <span data-text="I">I</span>
              <span data-text="S">S</span>
              <span data-text="T">T</span>
              <span data-text="">&nbsp;</span>
              <span data-text="2">2</span>
              <span data-text="0">0</span>
              <span data-text="2">2</span>
              <span data-text="0">0</span>
            </div>
            <div class="description_mobile_1 mt-5">
              (2nd International Conference On Artificial Intelligence And
              Speech Technology)
            </div>
            <div class="description_mobile_2 mt-3">
              @ Indira Gandhi Delhi Technical University for Women, Kashmere
              Gate, Delhi
            </div>
            <div class="date_mobile">
              19th - 20th November, 2020
            </div>
          </div>
          <div class="d-flex flex-row w-100 justify-content-around">
            <div class="submit_papers_cta">
              <button type="button" class="btn btn-primary btn_mobile">
                Submit Your Paper
              </button>
            </div>
            <div
              class="dates_cta_mobile ml-3"
              @click="main_slide = !main_slide"
            >
              <p class="left_mobile mt-2 pt-1">
                Important Dates <i class="fas fa-arrow-right"></i>
              </p>
            </div>
          </div>
          <div
            class="mt-3 countdown_mobile d-flex flex-row align-items-center justify-content-center"
          >
            <Countdown class="" />
          </div>
        </div>
        <div v-else>
          <div class="dates d-flex flex-column">
            <div class="mt-6">
              <a
                class="block block-rounded block-link-pop offset-1 col-10 p-0 mt-4"
              >
                <div class="block-header block-header-default">
                  <h3 class="block-title">
                    <span class="px-1">
                      <i class="far fa-calendar-alt"></i></span
                    >&nbsp; Important Dates
                  </h3>
                </div>
                <div class="block-content">
                  <p style="">
                    <b>Submission of Full Paper</b><br />
                    March 02, 2020<br /><br />
                    <b>Notification of Acceptance</b><br />

                    March 10, 2020 onwards<br /><br />
                    <b>Submission of Camera Ready Papers</b><br />

                    Within 2 weeks after acceptance <br /><br />
                    <b>Author’s Registration Deadline</b><br />

                    Within 2 weeks after acceptance <br /><br />
                    <b>Conference Dates</b><br />
                    April 24-25, 2020
                  </p>
                </div>
              </a>
            </div>
            <button
              type="button"
              class="btn btn-primary col-6 offset-3"
              @click="main_slide = !main_slide"
            >
              <i class="fas fa-arrow-left"></i>&nbsp; Back
            </button>
          </div>
        </div>
      </transition>
    </div>
    <div
      class="header_wrapper d-none d-md-flex flex-column justify-content-center"
    >
      <transition name="slide" mode="out-in">
        <div
          class="main-slide d-flex flex-column container align-items-center"
          v-if="main_slide"
          :key="main_slide"
        >
          <div class="header d-flex flex-column p-3 my-6 ">
            <div class="heading">
              <span data-text="A">A</span>
              <span data-text="I">I</span>
              <span data-text="S">S</span>
              <span data-text="T">T</span>
              <span data-text="">&nbsp;</span>
              <span data-text="2">2</span>
              <span data-text="0">0</span>
              <span data-text="2">2</span>
              <span data-text="0">0</span>
            </div>
            <div class="heading d-none">
              AIST 2020
            </div>
            <div class="description_1 mt-5">
              (2nd International Conference On Artificial Intelligence And
              Speech Technology)
            </div>
            <div class="description_2">
              @ Indira Gandhi Delhi Technical University for Women, Kashmere
              Gate, Delhi
            </div>
            <div class="date">
              19th - 20th November, 2020
            </div>
          </div>
          <div class="d-flex flex-row w-100 justify-content-around">
            <div class="submit_papers_cta">
              <button type="button" class="btn btn-primary">
                Submit Your Paper
              </button>
            </div>
            <div class="dates_cta" @click="main_slide = !main_slide">
              <p class="left">
                Important Dates <i class="fas fa-arrow-right"></i>
              </p>
            </div>
          </div>
          <div
            class="mt-3 countdown d-flex flex-row align-items-center justify-content-center"
          >
            <Countdown class="" />
          </div>
        </div>
        <div v-else>
          <div class="dates d-flex flex-column">
            <div class="mt-6">
              <a
                class="block block-rounded block-link-pop offset-md-4 col-md-4 p-0"
              >
                <div class="block-header block-header-default">
                  <h3 class="block-title">
                    <span class="px-1">
                      <i class="far fa-calendar-alt"></i
                    ></span>
                    Important Dates
                  </h3>
                </div>
                <div class="block-content">
                  <p style="">
                    <b>Submission of Full Paper</b><br />
                    March 02, 2020<br /><br />
                    <b>Notification of Acceptance</b><br />

                    March 10, 2020 onwards<br /><br />
                    <b>Submission of Camera Ready Papers</b><br />

                    Within 2 weeks after acceptance <br /><br />
                    <b>Author’s Registration Deadline</b><br />

                    Within 2 weeks after acceptance <br /><br />
                    <b>Conference Dates</b><br />
                    April 24-25, 2020
                  </p>
                </div>
              </a>
            </div>
            <button
              type="button"
              class="btn btn-primary col-2 offset-5"
              @click="main_slide = !main_slide"
            >
              <i class="fas fa-arrow-left"></i>
              Back
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import About from '@/components/About'
import Countdown from '@/components/generic/count-down'
export default {
  name: 'Home',
  data () {
    return {
      main_slide: true
    }
  },
  components: { About, Countdown }
}
</script>
<style lang="scss">
.countdown_mobile {
  color: white;
}
.countdown {
  color: white;
  .digit,
  li:after {
    font-size: 3rem !important ;
  }
  .text {
    font-size: 1.2rem !important;
  }
  li {
    margin: 0px 3rem !important;
  }
  li:after {
    content: "" !important;
    top: 10px !important;
    right: -18px !important;
  }
}
</style>
<style lang="scss" scoped>
$primary: #221e21;

* {
  box-sizing: border-box;
}
#app {
  overflow: hidden;
}
html,
body,
#app {
  height: 100%;
}

body {
  font-family: "Avenir";
}
.heading {
  font-size: 5rem;
  font-family: "Gilroy", sans-serif;
  font-weight: 800;
  text-align: center;

  span {
    display: inline-block;
    margin: 0 -0.05em;
    position: relative;
    color: rgba(#000, 0.2);
    /* color: #fff; */

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      content: attr(data-text);
      /* color: rgba(#000, .2); */
      color: #fff;
      /* opacity: 1; */
      /* transform: scale(1.5); */
      animation: heading_animation 3s 1;
    }
    @for $i from 1 through 8 {
      &:nth-child(#{$i + 1})::after {
        animation-delay: #{$i * 0.15}s;
      }
    }
  }
}
@keyframes heading_animation {
  0% {
    /* transform: scale(1.5); */
    opacity: 0;
  }
  25%,
  50%,
  75%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.heading_mobile {
  font-size: 3rem;
  font-family: "Gilroy", sans-serif;
  font-weight: 800;
  text-align: center;

  span {
    display: inline-block;
    margin: 0 -0.05em;
    position: relative;
    color: rgba(#000, 0.2);
    /* color: #fff; */

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      content: attr(data-text);
      /* color: rgba(#000, .2); */
      color: #fff;
      /* opacity: 1; */
      /* transform: scale(1.5); */
      animation: heading_animation 3s 1;
    }
    @for $i from 1 through 8 {
      &:nth-child(#{$i + 1})::after {
        animation-delay: #{$i * 0.15}s;
      }
    }
  }
}
.header_wrapper {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/images/header-background.jpg") !important;
  background-position: 50% 0 !important;
  background-size: cover !important;
}

.header {
  color: #fff;
  line-height: 2.7rem;
  text-align: center;
}
.header_mobile {
  color: #fff;
  line-height: 2rem;
  text-align: center;
}
.description_1,
.date {
  font-size: 1.7rem;
}
.description_2 {
  font-size: 1.4rem;
}
.description_mobile_1,
.date_mobile {
  font-size: 1.3rem;
  font-weight: 600;
}
.description_mobile_2 {
  font-size: 1rem;
  font-weight: 600;
}
.slide-leave-active,
.slide-enter-active {
  transition: 0.5s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
button {
  padding: 15px;
  outline: none;
  border: none;
  -webkit-appearance: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  &:disabled {
    opacity: 0.2;
    cursor: no-drop;
  }
}
.btn.btn-primary {
  color: #fff;
  background-color: #7a7a7a;
  border-color: #7a7a7a;
  box-shadow: 0.15s ease-in-out !important;
  cursor: pointer;
}
.btn.btn-primary:hover {
  -webkit-transform: translateY(-1px);
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  color: #fff;
  background-color: #666666;
  border-color: #666666;
}
.btn.btn-primary.btn_mobile {
  padding: 1rem 1rem !important;
}
.dates_cta {
  font-size: 1.3rem;
  cursor: pointer;
  color: #fff;
  position: relative;
}
.dates_cta_mobile {
  font-size: 1.1rem;
  cursor: pointer;
  color: #fff;
  position: relative;
}
.left {
  position: relative;
}
.left_mobile {
  text-decoration: underline;
  text-underline-position: under;
  font-weight: 600;
}
.left:before {
  content: "";
  width: 0;
  height: 2px;
  background-color: #fff;
  position: absolute;
  left: 0;
  bottom: -2px;
  transition: all 0.3s ease-in-out;
  visibility: hidden;
}
.left:hover:before {
  width: 100%;
  visibility: visible;
}
.block:hover {
  box-shadow: 0 0.3rem 1rem !important;
}
</style>
