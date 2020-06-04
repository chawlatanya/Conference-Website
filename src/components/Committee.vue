<template>
  <div>
    <modal-names
      v-if="isModalNamesActive"
      @close="closeModal"
      :activeItem="activeItem"
    ></modal-names>
    <div class="d-md-flex justify-content-center align-items-center">
      <div class="col-md-6 col-12 pt-md-7">
        <div class="d-flex flex-column">
          <div class="panel_title">
            <h2 class="d-none d-md-block product__title mb-md-0">
              Committee
            </h2>
            <h3 class="d-md-none product__title_mobile">
              Committee
            </h3>
          </div>
          <div class="panel_description pt-md-5">
            <div class="d-md-flex justify-content-around">
              <div class="panel_feature col-md-6 col-12 d-flex">
                <div class="ml-2 feature_content pb-md-2 d-md-flex flex-column">
                  <div class="feature_title font-w700">
                    Steering Committee
                  </div>
                  <div class="feature_points ml-3 pl-1 my-3 d-flex flex-column">
                    <li class="pb-md-2">
                      Dr. Amita Dev, Vice Chancellor, IGDTUW
                    </li>
                    <li class="pb-md-2">
                      Prof. S. S. Agarwal, Emeritus Scientist, CSIR
                    </li>
                    <li class="pb-md-2">
                      Mr Vivek Khaneja, Executive Director, CDAC
                    </li>
                  </div>
                </div>
              </div>
              <div class="panel_feature col-md-6 col-12 d-flex feature-border-left">
                <div class="ml-2 feature_content pb-md-2 d-md-flex flex-column">
                  <div class="feature_title font-w700">
                    International Advisory Board
                  </div>
                  <div class="feature_points ml-3 pl-1 my-3 d-flex flex-column justify-content-between">
                    <li class="pb-md-2">
                      Prof. S. Nakamura, NIST, Japan
                    </li>
                    <li class="pb-md-2">
                      Prof. Nemeth Geza, Budapest University, Hungary
                    </li>
                    <li class="pb-md-2">
                      Ms. Anu Khosla, SAG DRDO
                    </li>
                    <li class="pb-md-2">
                      Dr. Nick Campbell, Trinity College Dublin, IR
                    </li>
                  </div>
                  <div
                    class="view-all mr-5 align-self-end text-underline cursor-pointer"
                    @click="openModal('2')"
                  >View All</div>
                </div>
              </div>
            </div>
            <div class="d-md-flex justify-content-around feature-row-border-top">
              <div class="panel_feature col-md-6 col-12 d-flex pt-md-4">
                <div class="ml-2 feature_content pb-md-2 d-md-flex flex-column ">
                  <div class="feature_title font-w700">
                    Technical Program Committee
                  </div>
                  <div class="feature_points ml-3 pl-1 my-3 d-md-flex flex-column justify-content-between">
                    <li class="pb-md-2">
                      Prof. Chai Wutiwiwatchai, NECTEC, Thailand
                    </li>
                    <li class="pb-md-2">
                      Dr. Bin Ma, Institute for Infocomm Research, Singapore
                    </li>
                    <li class="pb-md-2">
                      Dr. Ashish Seth, Inha University, Tashkent
                    </li>
                    <li class="pb-md-2">
                      Dr. Deepak Garg, Bennett University, India
                    </li>
                  </div>
                  <div
                    class="view-all align-self-end text-underline cursor-pointer"
                    @click="openModal('3')"
                  >View All</div>
                </div>
              </div>
              <div class="panel_feature col-12 col-md-6 d-flex feature-border-left pt-md-4">
                <div class="ml-2 feature_content pb-md-2 d-md-flex flex-column ">
                  <div class="feature_title font-w700">
                    Organising Committee
                  </div>
                  <div class="feature_points ml-3 pl-1 my-3 d-md-flex flex-column justify-content-between">
                    <li class="pb-md-2">
                      Dr. Arun Sharma, IGDTUW
                    </li>
                    <li class="pb-md-2">
                      Dr. Ela Kumar, IGDTUW
                    </li>
                    <li class="pb-md-2">
                      Dr. Nidhi Goel, IGDTUW
                    </li>
                    <li class="pb-md-2">
                      Dr. Manoj Soni, IGDTUW
                    </li>
                    <li class="pb-md-2">
                      Ar. Preeti Chauhan, IGDTUW
                    </li>
                    <li class="pb-md-2">
                      Dr. Preeti Vajpeyi, IGDTUW
                    </li>
                  </div>
                   <div
                    class="view-all mt-4 align-self-end text-underline cursor-pointer"
                    @click="openModal('4')"
                  >View All</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mt-7 d-none d-md-block ">
        <img
          class="product_image pl-4 img-fluid"
          src="../assets/images/committee.svg"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ModalNames from './ModalNames.vue'
export default {
  name: 'Committee',
  components: { ModalNames },
  data () {
    return {
      isModalNamesActive: false,
      activeItem: 0
    }
  },
  methods: {
    closeModal () {
      this.isModalNamesActive = false
    },
    openModal (activeItem) {
      this.activeItem = activeItem
      console.log(activeItem)
      this.isModalNamesActive = true
    }
  }
}
</script>
<style lang="scss" scoped>
.product__title {
  font-size: 2.5rem !important;
  line-height: 1.2 !important;
}

.product__title_mobile {
  font-size: 1.8rem !important;
  line-height: 1.2 !important;
}

.feature_points li {
  list-style: none;
  /* color: $gray-600; */
  position: relative;
  font-size: 0.9rem;
}
.new_container_height {
  max-height: 470px;
}

@media screen and (max-width: 600px) {
  .new_container_height {
    max-height: 630px;
  }
}
.feature-row-border-top {
  border-top: 2px solid rgba(230, 233, 255, 0.6);
}
@media screen and (max-width: 600px) {
  .feature-row-border-top {
    border-top: 0px;
  }
}
.feature-border-left {
  border-left: 2px solid rgba(230, 233, 255, 0.6);
}
@media screen and (max-width: 600px) {
  .feature-border-left {
    border-left: 0px;
  }
}
.panel_description {
  font-size: 1rem;
  line-height: 1.5;
}
.view-all {
  cursor: pointer !important;
  text-decoration: underline;
  text-underline-position: under;
}
</style>
