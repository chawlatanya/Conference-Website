<template>
  <div class="CallForPapers">
    <div class="d-flex flex-column align-items-center CallForPapers">
    <h1 class="heading">CALL FOR PAPERS</h1>
    <p class="col-md-10 description">
      AIST 2020 is dedicated to cutting edge research that addresses scientific
      needs of academic researchers and industrial professionals to explore new
      horizons of knowledge related to Artificial Intelligence and Speech
      Technologies. AIST 2020 is scheduled to include high-quality paper
      presentation sessions revealing the latest research findings, and to
      engage participants in interesting discussion sessions. We seek novel
      paper submissions to be presented in AIST 2020 with topics broadly
      including, but not limited to the following tracks:
    </p>

    <div class="container">
      <div class="row">
        <div class="col-md-6" id="col1">
          <div class="track mb-2">TRACK 1</div>
          <ul class="list-group">
            <li class="list-group-item list-group-item-light">
              > Speech Analysis, Representation and Models
            </li>
            <li class="list-group-item list-group-item-secondary">
              > Spoken Language Recognition and Understanding
            </li>
            <li class="list-group-item list-group-item-dark">
              > Speech-to-Speech Translation
            </li>
            <li class="list-group-item list-group-item-primary">
              > Computer Vision and Speech Recognition
            </li>
            <li class="list-group-item list-group-item-info">
              > Speech-to-Speech Translation
            </li>
            <li class="list-group-item list-group-item-success">
              > Affective Speech Recognition, Interpretation and Synthesis
            </li>
            <li class="list-group-item list-group-item-warning">
              > Speech Enhancement
            </li>
            <li class="list-group-item list-group-item-danger">
              > Speech and Language Resources - Data Collection, Transcription
              and Annotation
            </li>
            <li class="list-group-item list-group-item-light">
              > Speech Interface Design and Human Factors Engineering
            </li>
            <li class="list-group-item list-group-item-secondary">
              > Computational Resource Constrained Speech
            </li>
            <li class="list-group-item list-group-item-dark">
              > Spoken Dialogue Systems
            </li>
            <li class="list-group-item list-group-item-primary">
              > Human Computer Interaction
            </li>
            <li class="list-group-item list-group-item-info">
              > Assistive Technologies
            </li>
            <li class="list-group-item list-group-item-success">
              > Forensic Speech Investigations and Security Systems
            </li>
            <li class="list-group-item list-group-item-warning">
              > Speech Enhancement
            </li>
            <li class="list-group-item list-group-item-danger">
              > Speech and Language Resources - Data Collection, Transcription
              and Annotation
            </li>
          </ul>
        </div>
        <div class="col-md-6" id="col2">
          <div class="track mb-2">TRACK 2</div>
          <ul class="list-group">
            <li class="list-group-item list-group-item-light">
              > Speech Analysis, Representation and Models
            </li>
            <li class="list-group-item list-group-item-secondary">
              > Spoken Language Recognition and Understanding
            </li>
            <li class="list-group-item list-group-item-dark">
              > Speech-to-Speech Translation
            </li>
            <li class="list-group-item list-group-item-primary">
              > Computer Vision and Speech Recognition
            </li>
            <li class="list-group-item list-group-item-info">
              > Speech-to-Speech Translation
            </li>
            <li class="list-group-item list-group-item-success">
              > Affective Speech Recognition, Interpretation and Synthesis
            </li>
            <li class="list-group-item list-group-item-warning">
              > Speech Enhancement
            </li>
            <li class="list-group-item list-group-item-danger">
              > Speech and Language Resources - Data Collection, Transcription
              and Annotation
            </li>
            <li class="list-group-item list-group-item-light">
              > Speech Interface Design and Human Factors Engineering
            </li>
            <li class="list-group-item list-group-item-secondary">
              > Computational Resource Constrained Speech
            </li>
            <li class="list-group-item list-group-item-dark">
              > Spoken Dialogue Systems
            </li>
            <li class="list-group-item list-group-item-primary">
              > Human Computer Interaction
            </li>
            <li class="list-group-item list-group-item-info">
              > Assistive Technologies
            </li>
            <li class="list-group-item list-group-item-success">
              > Forensic Speech Investigations and Security Systems
            </li>
            <li class="list-group-item list-group-item-warning">
              > Speech Enhancement
            </li>
            <li class="list-group-item list-group-item-danger">
              > Speech and Language Resources - Data Collection, Transcription
              and Annotation
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'CallForPapers'
}
</script>

<style scoped>
p {
  align-self: center;
  text-indent: center;
  color: white;
}
.heading{
  text-align: center;
  color: whitesmoke;
  font-family: Avenir,
     -apple-system,
     BlinkMacSystemFont,
     Segoe UI,
     Roboto,
     Helvetica Neue,
     Arial,
     Noto Sans,
     sans-serif,
     Apple Color Emoji,
     Segoe UI Emoji,
     Segoe UI Symbol,
     Noto Color Emoji !important;
}
.CallForPapers {
  background-image: url("https://media.giphy.com/media/fC6BAcnLFF2o/giphy.gif"),
    url("https://media.giphy.com/media/fC6BAcnLFF2o/giphy.gif");
  background-color: #cccccc;
  background-repeat: no-repeat;
  background-size: cover;
}
.scrollbar-near-moon {
  scrollbar-color: #b490ca #f5f5f5;
}
.track{
  font-weight: 700;
  font-size:1.2rem;
}
#col1,#col2 {
  color: white;
}
.description{
  text-align: justify;
  font-size:1.3rem;
}
.list-group {
  margin-bottom: 10px;
}
</style>
