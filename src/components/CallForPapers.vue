<template>

    <div class="CallForPapers">
        <h1>CALL FOR PAPERS</h1>
        
        <p>
            AIST 2020 is dedicated to cutting edge research that addresses scientific 
            needs of academic researchers and industrial professionals to explore new 
            horizons of knowledge related to Artificial Intelligence and Speech Technologies.
            AIST 2020 is scheduled to include high-quality paper presentation sessions revealing
            the latest research findings, and to engage participants in interesting discussion 
            sessions. We seek novel paper submissions to be presented in AIST 2020 with topics 
            broadly including, but not limited to the following tracks:
        </p>
       <div class="container">
         <div class="row">
            <div class="col-sm-6" id="col1">
                TRACK 1
                    <ul class="list-group">
                            <li class="list-group-item list-group-item-light">> Speech Analysis, Representation and Models</li>
                            <li class="list-group-item list-group-item-secondary">> Spoken Language Recognition and Understanding</li>
                            <li class="list-group-item list-group-item-dark">> Speech-to-Speech Translation</li>
                            <li class="list-group-item list-group-item-primary">> Computer Vision and Speech Recognition</li>
                            <li class="list-group-item list-group-item-info">> Speech-to-Speech Translation</li>
                            <li class="list-group-item list-group-item-success">> Affective Speech Recognition, Interpretation and Synthesis</li>
                            <li class="list-group-item list-group-item-warning">> Speech Enhancement</li>
                            <li class="list-group-item list-group-item-danger">> Speech and Language Resources - Data Collection, Transcription and Annotation</li>
                            <li class="list-group-item list-group-item-light">> Speech Interface Design and Human Factors Engineering</li>
                            <li class="list-group-item list-group-item-secondary">> Computational Resource Constrained Speech</li>
                            <li class="list-group-item list-group-item-dark">> Spoken Dialogue Systems</li>
                            <li class="list-group-item list-group-item-primary">> Human Computer Interaction</li>
                            <li class="list-group-item list-group-item-info">>  Assistive Technologies</li>
                            <li class="list-group-item list-group-item-success">> Forensic Speech Investigations and Security Systems</li>
                            <li class="list-group-item list-group-item-warning">> Speech Enhancement</li>
                            <li class="list-group-item list-group-item-danger">> Speech and Language Resources - Data Collection, Transcription and Annotation</li>                 
                    </ul>
            </div>
            
            <div class="col-sm-6" id="col1">TRACK 2
                <ul class="list-group">
                             <li class="list-group-item list-group-item-light">> Speech Analysis, Representation and Models</li>
                            <li class="list-group-item list-group-item-secondary">> Spoken Language Recognition and Understanding</li>
                            <li class="list-group-item list-group-item-dark">> Speech-to-Speech Translation</li>
                            <li class="list-group-item list-group-item-primary">> Computer Vision and Speech Recognition</li>
                            <li class="list-group-item list-group-item-info">> Speech-to-Speech Translation</li>
                            <li class="list-group-item list-group-item-success">> Affective Speech Recognition, Interpretation and Synthesis</li>
                            <li class="list-group-item list-group-item-warning">> Speech Enhancement</li>
                            <li class="list-group-item list-group-item-danger">> Speech and Language Resources - Data Collection, Transcription and Annotation</li>
                            <li class="list-group-item list-group-item-light">> Speech Interface Design and Human Factors Engineering</li>
                            <li class="list-group-item list-group-item-secondary">> Computational Resource Constrained Speech</li>
                            <li class="list-group-item list-group-item-dark">> Spoken Dialogue Systems</li>
                            <li class="list-group-item list-group-item-primary">> Human Computer Interaction</li>
                            <li class="list-group-item list-group-item-info">>  Assistive Technologies</li>
                            <li class="list-group-item list-group-item-success">> Forensic Speech Investigations and Security Systems</li>
                            <li class="list-group-item list-group-item-warning">> Speech Enhancement</li>
                            <li class="list-group-item list-group-item-danger">> Speech and Language Resources - Data Collection, Transcription and Annotation</li>                 
                    </ul>
            </div>

         </div>
        </div>
        
    </div>
</template>


<script>
export default {
    name:'CallForPapers',
    props:{
        msg:String
    }
}
</script>

<style scoped>
h1{
    text-align: center;
   /* margin:40px 40px 40px;*/
    color: whitesmoke;
}
p{
    align-self: center;
   /* margin:40px 40px 40px; */
    text-indent:centre;
    color: white;

}
.CallForPapers{
  background-image: url("https://media.giphy.com/media/fC6BAcnLFF2o/giphy.gif"), url("https://media.giphy.com/media/fC6BAcnLFF2o/giphy.gif");
  background-color: #cccccc;
  background-repeat: no-repeat;
  background-size:cover ;
}
.scrollbar-near-moon {
scrollbar-color: #b490ca #F5F5F5;
}

#col1{
    color: white;
}

.list-group{
    max-height: 600px;
    margin-bottom: 10px;
    overflow:scroll;
    -webkit-overflow-scrolling: touch;
}
</style>