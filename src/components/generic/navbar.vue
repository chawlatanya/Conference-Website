<template>
  <div class="position-fixed navbar w-100">
    <div class="d-md-none">
      <div
        class="py-3 px-4 d-flex justify-content-between align-items-center mobile_navbar"
      >
        <div class="d-flex flex-row align-items-center">
          <div class="conference-logo">
            <img
              src="../../assets/images/logo.png"
              height="40rem"
              width="40rem"
            />
          </div>
          <div class="mobile_nav_heading ml-3">AIST 2020</div>
        </div>
        <div class="burger_menu" @click="handleHamburgerClick">
          <hamburger :stroke="2" :gap="5" color="#fff"> </hamburger>
        </div>
      </div>
    </div>
    <div class="d-md-none">
      <div
        :class="{
          mobile_menu_inactive: !hamburgerActive,
          mobile_menu: hamburgerActive
        }"
      >
        <ul
          class="nav-main nav-main-dark d-flex flex-column"
          @click="handleHamburgerClick"
        >
          <li class="nav-main-item">
            <router-link to="/" class="nav-main-link">
              <i class="nav-main-link-icon fa fa-home"></i>
              <span class="nav-main-link-name nav-item">Home</span>
            </router-link>
          </li>
          <li class="nav-main-item">
            <router-link to="#" v-scroll-to="'#about'" class="nav-main-link ">
              <i class="nav-main-link-icon fa fa-info-circle"></i>
              <span class="nav-main-link-name nav-item ">About</span>
            </router-link>
          </li>
          <li class="nav-main-item">
            <router-link to="/speakers" class="nav-main-link ">
              <i class="nav-main-link-icon fa fa-user-tie"></i>
              <span class="nav-main-link-name nav-item ">Speakers</span>
            </router-link>
          </li>
          <li class="nav-main-item">
            <router-link to="/call-for-papers" class="nav-main-link ">
              <i class="nav-main-link-icon far fa-newspaper "></i>
              <span class="nav-main-link-name nav-item ">Call For Papers</span>
            </router-link>
          </li>
          <li class="nav-main-item">
            <router-link to="/supported-by" class="nav-main-link ">
              <i class="nav-main-link-icon fa fa-user-friends"></i>
              <span class="nav-main-link-name nav-item ">Supported By</span>
            </router-link>
          </li>
          <li class="nav-main-item">
            <router-link to="/schedule" class="nav-main-link ">
              <i class="nav-main-link-icon far fa-clock"></i>
              <span class="nav-main-link-name nav-item ">Schedule</span>
            </router-link>
          </li>
          <li class="nav-main-item">
            <router-link to="/committee" class="nav-main-link ">
              <i class="nav-main-link-icon fa fa-users"></i>
              <span class="nav-main-link-name nav-item ">Committee</span>
            </router-link>
          </li>
          <li class="nav-main-item">
            <router-link to="/contact-us" class="nav-main-link ">
              <i class="nav-main-link-icon fa fa-mail-bulk"></i>
              <span class="nav-main-link-name nav-item ">Contact Us</span>
            </router-link>
          </li>
          <li class="nav-main-item">
            <router-link to="/register" class="nav-main-link">
              <i class="nav-main-link-icon fab fa-wpforms"></i>
              <span class="nav-main-link-name nav-item ">Register</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="d-none d-md-block bg-sidebar-dark p-3 rounded push"
      :class="{ scrolled: !isTop }"
    >
      <div
        id="horizontal-navigation-click-centered-dark"
        class="d-lg-flex flex-row justify-content-around mt-2 mt-lg-0 "
        :class="{ 'd-none': !hamburgerActive }"
      >
        <div class="conference-logo">
          <img
            src="../../assets/images/logo.png"
            height="40rem"
            width="40rem"
          />
        </div>
        <ul
          class="nav-main nav-main-horizontal nav-main-horizontal-center nav-main-dark"
        >
          <li class="nav-main-item">
            <router-link to="/" class="nav-main-link">
              <i class="nav-main-link-icon fa fa-home"></i>
              <span class="nav-main-link-name nav-item left">Home</span>
            </router-link>
          </li>
          <li class="nav-main-item">
            <router-link to="#" v-scroll-to="'#about'" class="nav-main-link ">
              <i class="nav-main-link-icon fa fa-info-circle"></i>
              <span class="nav-main-link-name nav-item left">About</span>
            </router-link>
          </li>
          <li class="nav-main-item">
            <router-link to="/speakers" class="nav-main-link ">
              <i class="nav-main-link-icon fa fa-user-tie"></i>
              <span class="nav-main-link-name nav-item left">Speakers</span>
            </router-link>
          </li>
          <li class="nav-main-item">
            <router-link
              to="#"
              v-scroll-to="{
                el: '#call_for_papers',
                duration: 500,
                easing: 'ease',
                offset: -75,
                force: true,
                cancelable: true,
                x: false,
                y: true
              }"
              class="nav-main-link "
            >
              <i class="nav-main-link-icon far fa-newspaper "></i>
              <span class="nav-main-link-name nav-item left"
                >Call For Papers</span
              >
            </router-link>
          </li>
          <li class="nav-main-item">
            <router-link
              to="#"
              v-scroll-to="'#supported_by'"
              class="nav-main-link "
            >
              <i class="nav-main-link-icon fa fa-user-friends"></i>
              <span class="nav-main-link-name nav-item left">Supported By</span>
            </router-link>
          </li>
          <li class="nav-main-item">
            <router-link to="/schedule" class="nav-main-link ">
              <i class="nav-main-link-icon far fa-clock"></i>
              <span class="nav-main-link-name nav-item left">Schedule</span>
            </router-link>
          </li>
          <li class="nav-main-item">
            <router-link to="/committee" class="nav-main-link ">
              <i class="nav-main-link-icon fa fa-users"></i>
              <span class="nav-main-link-name nav-item left">Committee</span>
            </router-link>
          </li>
          <li class="nav-main-item">
            <router-link to="/contact-us" class="nav-main-link ">
              <i class="nav-main-link-icon fa fa-mail-bulk"></i>
              <span class="nav-main-link-name nav-item left">Contact Us</span>
            </router-link>
          </li>
          <li class="nav-main-item">
            <router-link to="/register" class="nav-main-link">
              <i class="nav-main-link-icon fab fa-wpforms"></i>
              <span class="nav-main-link-name nav-item left">Register</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  data () {
    return {
      isTop: true,
      hamburgerActive: false
    }
  },
  components: {},
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  methods: {
    handleScroll (event) {
      if (window.scrollY === 0) {
        this.isTop = true
      } else {
        this.isTop = false
      }
    },
    handleHamburgerClick () {
      this.hamburgerActive = !this.hamburgerActive
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  z-index: 100;
  top: 0;
  left: 0;
}
.mobile_navbar {
  background-color: #343a40;
  border-color: #343a40;
}
.mobile_menu_inactive {
  visibility: hidden;
}
.mobile_menu {
  height: 100vh;
  background-color: rgba(52, 58, 64, 1);
  visibility: visible;
  transition: all 0.3s ease-in;
}
.mobile_menu li:last-child {
  border-bottom: 0px solid transparent !important;
  color: red;
}
.mobile_menu {
  li {
    border-bottom: 1px solid #d3d3d3;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .nav-main-link {
    padding: 0 0.625rem;
    margin: 0.1rem 0.5rem;
    font-size: 2rem;
  }
}
.nav-item {
  font-family: Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji !important;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  position: relative;
  font-size: 1rem !important;
  font-weight: 500 !important;
}
.bg-sidebar-dark {
  transition: background-color 0.5s ease;
  background-color: rgba(52, 58, 64, 0.2) !important;
}
.scrolled {
  &.bg-sidebar-dark {
    background-color: rgba(52, 58, 64, 1) !important;
  }
}
.nav-main-dark .nav-main-link:hover {
  background-color: rgba(52, 58, 64, 0) !important;
  &.scrolled {
    background-color: rgba(52, 58, 64, 1) !important;
  }
  /* text-decoration: underline; */
  /* text-underline-position: under; */
}
.left {
  position: relative;
}
.left:before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: #fff;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}
.left:hover:before {
  visibility: visible;
  width: 100%;
}
.mobile_nav_heading {
  color: white;
  font-size: 1.3rem;
}
button {
  padding: 1rem 2rem !important;
}
</style>
