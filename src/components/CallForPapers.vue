<template>
  <div class="">
    <div class="d-md-flex">
      <div class="d-md-flex flex-md-column col-md-4">
        <h1 class="heading">Call For Papers</h1>
        <p class="description">
          AIST 2020 is dedicated to cutting edge research that addresses
          scientific needs of academic researchers and industrial professionals
          to explore new horizons of knowledge related to Artificial
          Intelligence and Speech Technologies. AIST 2020 is scheduled to
          include high-quality paper presentation sessions revealing the latest
          research findings, and to engage participants in interesting
          discussion sessions. We seek novel paper submissions to be presented
          in AIST 2020 with topics broadly including, but not limited to the
          these tracks
          <img src="../assets/images/right_arrow.svg" class="arrow" />
        </p>
      </div>
      <div class="d-md-flex justify-content-between col-md-7 offset-md-1 mb-6">
        <div
          class="d-flex flex-row flex-md-column justify-content-start mr-md-3 position-relative"
        >
          <button
            type="button"
            class="btn btn-primary position-absolute btn1"
            @click="toggleTrack(1)"
          >
            Track&nbsp;1
          </button>
          <button
            type="button"
            class="btn btn-primary position-absolute btn2"
            @click="toggleTrack(2)"
          >
            Track&nbsp;2
          </button>
        </div>

        <div class="mt-md-2 offset-md-3" v-if="activeTrack === 1">
          <div class="track mb-md-2">TRACK 1</div>
          <ul class="list-group ht-fix">
            <li class="list-group-item list-group-item-light">
              Speech Analysis, Representation and Models
            </li>
            <li class="list-group-item list-group-item-secondary">
              Spoken Language Recognition and Understanding
            </li>
            <li class="list-group-item list-group-item-dark">
              Speech-to-Speech Translation
            </li>
            <li class="list-group-item list-group-item-primary">
              Computer Vision and Speech Recognition
            </li>
            <li class="list-group-item list-group-item-info">
              Speech-to-Speech Translation
            </li>
            <li class="list-group-item list-group-item-success">
              Affective Speech Recognition, Interpretation and Synthesis
            </li>
            <li class="list-group-item list-group-item-warning">
              Speech Enhancement
            </li>
            <li class="list-group-item list-group-item-danger">
              Speech and Language Resources - Data Collection, Transcription and
              Annotation
            </li>
            <li class="list-group-item list-group-item-light">
              Speech Interface Design and Human Factors Engineering
            </li>
            <li class="list-group-item list-group-item-secondary">
              Computational Resource Constrained Speech
            </li>
            <li class="list-group-item list-group-item-dark">
              Spoken Dialogue Systems
            </li>
            <li class="list-group-item list-group-item-primary">
              Human Computer Interaction
            </li>
            <li class="list-group-item list-group-item-info">
              Assistive Technologies
            </li>
            <li class="list-group-item list-group-item-success">
              Forensic Speech Investigations and Security Systems
            </li>
            <li class="list-group-item list-group-item-warning">
              Speech Enhancement
            </li>
            <li class="list-group-item list-group-item-danger">
              Speech and Language Resources - Data Collection, Transcription and
              Annotation
            </li>
          </ul>
        </div>
        <div class="mt-md-2 offset-md-3" v-else>
          <div class="track mb-md-2">TRACK 2</div>
          <ul class="list-group ht-fix">
            <li class="list-group-item list-group-item-light">
              AI Algorithms Artificial Intelligence tools & Applications
            </li>
            <li class="list-group-item list-group-item-secondary">
              Foundations of Artificial Intelligence
            </li>
            <li class="list-group-item list-group-item-dark">
              Philosophy and Artificial Intelligence
            </li>
            <li class="list-group-item list-group-item-primary">
              Bayesian Networks
            </li>
            <li class="list-group-item list-group-item-info">
              Cognitive Science
            </li>
            <li class="list-group-item list-group-item-success">
              Natural Language Processing
            </li>
            <li class="list-group-item list-group-item-warning">
              Parallel Processing; Pattern Recognition; Programming Languages
            </li>
            <li class="list-group-item list-group-item-danger">
              Speech and Language Resources - Data Collection, Transcription and
              Annotation
            </li>
            <li class="list-group-item list-group-item-light">
              Intelligent System Architectures; Intelligent Web
            </li>
            <li class="list-group-item list-group-item-secondary">
              Computational Resource Constrained Speech
            </li>
            <li class="list-group-item list-group-item-dark">
              DNA Computing and Quantum Computing
            </li>
            <li class="list-group-item list-group-item-primary">
              Human Computer Interaction
            </li>
            <li class="list-group-item list-group-item-info">
              Assistive Technologies
            </li>
            <li class="list-group-item list-group-item-success">
              Forensic Speech Investigations and Security Systems
            </li>
            <li class="list-group-item list-group-item-warning">
              Speech Enhancement
            </li>
            <li class="list-group-item list-group-item-danger">
              Speech and Language Resources - Data Collection, Transcription and
              Annotation
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CallForPapers",
  data() {
    return {
      activeTrack: 1
    };
  },
  methods: {
    toggleTrack(track) {
      if (track !== this.activeTrack) this.activeTrack = track;
    }
  }
};
</script>

<style scoped>
p {
  align-self: center;
  text-indent: center;
  /* color: white; */
}

.track {
  font-weight: 700;
  font-size: 1.2rem;
}

.description {
  text-align: justify;
  font-size: 1rem;
}
.list-group {
  margin-bottom: 10px;
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
.ht-fix {
  height: 300px;
  overflow-y: scroll;
}
.btn.btn-primary {
  padding: 0.1rem 3rem;
}
.btn1 {
  top: 14%;
  z-index: 2;
}
.btn2 {
  top: 50%;
  z-index: 2;
}
@media screen and (max-width: 600px) {
  .btn1 {
    top: 350px;
    left: 0%;
  }
  .btn2 {
    top: 350px;
    left: 56%;
  }
}
.arrow {
  display: inline-block;
}
</style>
