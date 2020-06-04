<template>
  <div class="d-md-flex">
    <div class="left d-md-block d-none col-md-6 d-flex flex-column">
      <div class="pl-3 pt-md-0 pt-3">
        <h1>Keynote Speakers</h1>
      </div>
      <div class="image-speaker d-md-block d-none">
        <img class="img-fluid" src="../assets/images/speaker.svg" />
      </div>
    </div>
    <div class="slideshow col-12 col-md-6 mt-md-6">
      <div class="slideshow-container">
        <div class="mySlides fade ">
          <div class="d-flex flex-row justify-content-around">
            <div class="card" style="width: 18rem;">
              <img
                class=""
                src="../assets/images/Satoshi.jpg"
                alt="Card image cap"
              />
              <div class="card-body  d-flex flex-column justify-content-center">
                <h5 class="card-title">Dr. Satoshi Nakamura</h5>
                <p class="card-text text-muted">
                  Professor of Nara Institute of Science and Technology (NAIST)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mySlides fade">
          <div class="d-flex flex-row justify-content-around">
            <div class="card" style="width: 18rem;">
              <img class="" src="../assets/images/barbara.jpg" />
              <div class="card-body d-flex flex-column justify-content-center">
                <h5 class="card-title">Dr. Barbara Zitova</h5>
                <p class="card-text text-muted">
                  Institute of Information Theory and Automation of the ASCR
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mySlides fade">
          <div class="d-flex flex-row justify-content-around">
            <div class="card" style="width: 18rem;">
              <img src="../assets/images/nemeth.jpg" />
              <div class="card-body  d-flex flex-column justify-content-center">
                <h5 class="card-title">Prof. Nemeth Geza</h5>
                <p class="card-text text-muted">
                  Budapest University of Technology and Economics
                </p>
              </div>
            </div>
          </div>
        </div>
        <a class="prev rounded-circle bg-white" @click="plusSlides(-1)">
          <div class="font-size-sm">
            <img src="../assets/images/arrow_back.svg" />
          </div>
        </a>
        <a class="next rounded-circle bg-white " @click="plusSlides(1)">
          <div class="font-size-sm">
            <img src="../assets/images/arrow_next.svg" />
          </div>
        </a>
      </div>
      <br />
      <div style="text-align:center">
        <span class="dot" @click="currentSlide(1)"></span>
        <span class="dot" @click="currentSlide(2)"></span>
        <span class="dot" @click="currentSlide(3)"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      slideIndex: 1
    };
  },

  mounted() {
    this.showSlides(this.slideIndex);
  },
  methods: {
    plusSlides(n) {
      console.log('------------------------------------');
      console.log("calls");
      console.log('------------------------------------');
      this.showSlides((this.slideIndex += n));
    },
    currentSlide(n) {
      this.slideIndex = n;
      this.showSlides(n);
    },
    showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";

      dots[this.slideIndex - 1].className += " active";
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.mySlides {
  display: none;
}
img {
  vertical-align: middle;
}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 45%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

/* Position the "next button" to the right */
.next {
  right: 19%;
}
.prev {
  left: 19%;
}
@media screen and (max-width: 600px) {
  .next {
    right: -4%;
   
  }
  .prev {
    left: -4%;
    
  }
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev,
  .next,
  .text {
    font-size: 11px;
  }
}
.card img {
  height: 15rem;
}
</style>
