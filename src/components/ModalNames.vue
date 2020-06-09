<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body h-100">
            <div class="d-flex flex-column">
              <div class="d-flex flex-row">
                <h2>Committee</h2>
                <div class="align-self-start ml-6 mt-n1 d-flex">
                  <button
                    class="btn btn-primary"
                    @click="$emit('close')"
                  >
                    Close
                  </button>
                </div>
              </div>
              <div class="d-flex flex-column">
                <div v-if="activeItem==='2'">
                <h3>{{ item2.heading }}</h3>
                </div>
                <div v-if="activeItem==='3'">
                <h3>{{ item3.heading }}</h3>
                </div>
                <div v-if="activeItem==='4'">
                <h3>{{ item4.heading }}</h3>
                </div>
                <div class="d-flex flex-column">
                  <div v-if="activeItem==='2'">
                    <p
                      v-for="(name, index) in item2.names"
                      :key="index"
                    >
                      {{ name }}
                    </p>
                  </div>
                  <div v-if="activeItem==='3'">
                    <p
                      v-for="(name, index) in item3.names"
                      :key="index"
                    >
                      {{ name }}
                    </p>
                  </div>
                  <div v-if="activeItem==='4'">
                    <p
                      v-for="(name, index) in item4.names"
                      :key="index"
                    >
                      {{ name }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalNames',
  props: {
    activeItem: String
  },
  data () {
    return {
      item2: {
        heading: 'International Advisory Board',
        names: [
          'Prof. S. Nakamura, NIST, Japan',
          'Prof. Nemeth Geza, Budapest University, Hungary',
          'Ms. Anu Khosla, SAG DRDO',
          ' Dr. Nick Campbell, Trinity College Dublin, IR',
          ' Dr. S. K. Shrivastava, Head-TDIL, DRDO',
          'Dr. S. K. Jain, Director General,CFSL',
          'Dr. P.C. Ching, Chinese University of H.K.',
          '  Prof. Rajiv Sangal, IIIT-Hyderabad',
          'Hiroya Fujisaki, Tokyo University, Japan',
          'Prof. Arun Kumar, IIIT-Delhi',
          ' Dr. P. K. Saxena, PSA, PMO',
          ' Dr. Anupam Shukla, Director, IIIT-Pune',
          'Mr Karunesh Arora, CDAC, Noida',
          'Dr. Sunil Tyagi, Directorate of Naval Design(SDG), IHQ MOD(Navy) Delhi',
          ' Prof. M. N. Hoda, BVICAM'
        ]
      },
      item3: {
        heading: 'Technical Program Committee',
        names: [
          'Prof. Chai Wutiwiwatchai, NECTEC, Thailand',
          'Dr. Bin Ma, Institute for Infocomm Research, Singapore',
          'Dr. Hsin-Min Wang, IIS, Academia Sinica, Taiwan',
          'Dr. Ashish Seth, Inha University, Tashkent',
          'Dr. Mirna Adriani, UI, Indonesia',
          'Dr. Deepak Garg, Bennett University, India',
          'Dr. Mani Madhukar, IBM India Pvt. Ltd',
          'Dr. Shakir Khan, Imam University, Saudi Arabia',
          'Dr. P. K. Dass, IIT Guwahati, India',
          'Prof. Omar Farooq, AMU, India',
          'Dr Shweta Bansal, KIIT, Gurgaon, India',
          'Dr. Arun Kumar, Jubail Univ., SA',
          'Dr. Anup Girdhar, Sedulity Solutions,Delhi',
          'Dr. Poonam Bansal, MSIT, Delhi',
          'Dr. Vinod Shukla, Amity University Dubai',
          ' Dr. Kirti Tyagi, Inha University, Tashkent',
          ' Dr Atul Kumar, KIIT, Gurgaon',
          'Dr Sanjay Misra, Covenant Univ., Nigeria'
        ]
      },
      item4: {
        heading: 'Organising Committee',
        names: [
          'Dr. Arun Sharma, IGDTUW',
          'Dr. Ela Kumar, IGDTUW',
          'Dr. Nidhi Goel, IGDTUW',
          'Dr. Manoj Soni, IGDTUW',
          'Ar. Preeti Chauhan, IGDTUW',
          'Dr. Preeti Vajpeyi, IGDTUW',
          'Dr. Shalini Arora, IGDTUW',
          'Dr Jasdeep Kaur, IGDTUW',
          'Ar. Vishal Rai, IGDTUW',
          'Ms. Bhawna Narwal, IGDTUW',
          'Dr. N. R. Chauhan, IGDTUW',
          'Dr. Viveak Chawla, IGDTUW',
          'Dr. Chandra Prakash, IGDTUW',
          'Dr. Mohana Ghosh, IGDTUW',
          'Dr. Sourabh Bharti, IGDTUW',
          'Ms. Pooja Gambhir, IGDTUW',
          'Ms. Vasundhra Gupta, IGDTUW'
        ]
      }
    }
  }
}
</script>

<style>
@media screen and (min-width: 768px) {
  .modal-container {
    height: 75%;
    overflow-y: scroll;
    width: 30%;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }
}

@media screen and (max-width: 768px) {
  .modal-container {
    height: 100%;
    width: 100%;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }
}

.modal-height {
  height: 90%;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-default-button {
  float: right;
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
.btn.btn-primary:active {
  -webkit-transform: translateY(-1px);
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  color: #fff;
  background-color: #666666 !important;
  border-color: #666666 !important;
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
