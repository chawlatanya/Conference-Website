<template>

    <div class="SupportedBy">
        <h1>Supported By</h1>
        <div class="row">
  <div class="col-md-4">
    <div class="thumbnail">
      <a href="../assets/images/anveshan.png">
        <img src="../assets/images/anveshan.png" alt="Anveshan" style="width:100%">
        <div class="caption">
          <p>ANVESHAN FOUNDATION</p>
        </div>
      </a>
    </div>
  </div>
  <div class="col-md-4">
    <div class="thumbnail">
      <a href="https://media-exp1.licdn.com/dms/image/C510BAQFkiMnZdSk7UQ/company-logo_200_200/0?e=2159024400&v=beta&t=YdrePPsOxi778wXbTpLTkJ8u6LN-__48M8SwUAJrF2U">
        <img src="https://media-exp1.licdn.com/dms/image/C510BAQFkiMnZdSk7UQ/company-logo_200_200/0?e=2159024400&v=beta&t=YdrePPsOxi778wXbTpLTkJ8u6LN-__48M8SwUAJrF2U" alt='ieee' style ="width:60%">
        <div class="caption">
          <p>IEEE</p>
        </div>
      </a>
    </div>
  </div>
  <div class="col-md-4">
    <div class="thumbnail" data-animation="bounce">
      <a href="https://storage.googleapis.com/ehimages/2017/9/25/img_239f09227a3d1a88d5ac6734da647c7e_1506325978117_original.jpg">
        <img src="https://storage.googleapis.com/ehimages/2017/9/25/img_239f09227a3d1a88d5ac6734da647c7e_1506325978117_original.jpg" alt="Fjords" style="width:100%">
        <div class="caption">
          <p>ACM CHAPTER</p>
        </div>
      </a>
    </div>
  </div>
</div>
        
    </div>
</template>


<script>
export default {
    name:'SupportedBy',
    props:{
        msg:String
    }
}
</script>

<style scoped>
h1{
    text-align: center;
    margin:40px 40px 40px;
    color:white;
}
p{
    align-self: center;
    margin:40px 40px 40px; 
    color: white;  
}
.SupportedBy{
  background-image: url("https://media.giphy.com/media/3xz2BQKaaGqHPydLhe/giphy.gif"), url("https://media.giphy.com/media/3xz2BQKaaGqHPydLhe/giphy.gif");
  background-color: #cccccc;
  background-repeat: no-repeat;
  background-size:cover ;
}
.scrollbar-near-moon {
scrollbar-color: #b490ca #F5F5F5;
}
</style>