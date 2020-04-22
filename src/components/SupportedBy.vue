<template>

    <div class="SupportedBy">
        <h1>Supported By</h1>
        <div class="row" >
  <div class="col-md-4">
    <div class="thumbnail" id="fp">
      <a href="../assets/images/anveshan.png">
        <img src="../assets/images/anveshan.png" alt="Anveshan" class="rounded">
        <div class="caption">
          <p>ANVESHAN FOUNDATION</p>
        </div>
      </a>
    </div>
  </div>
  <div class="col-md-4" id="fp">
    <div class="thumbnail" >
      <a href="../assets/images/ieee.png">
        <img src="../assets/images/ieee.png" alt="ieee" class="rounded">
        <div class="caption">
          <p>IEEE</p>
        </div>
      </a>
    </div>
  </div>
  <div class="col-md-4" id="fp">
    <div class="thumbnail" text-animation="bounce">
      <a href="../assets/images/acm.png">
        <img src="../assets/images/acm.png" alt="acm" class="rounded" data-animnation="bounce" >
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
    /*margin:40px 40px 40px;*/
    color:white;
}
p{
    align-self: center;
    /*columns: ;margin:40px 40px 40px; */
    color: white;  
}
.SupportedBy{
  background-image: url("../assets/images/grey.jpg");
  background-repeat: no-repeat;
  background-size:cover;

}
.scrollbar-near-moon {
scrollbar-color: #b490ca #F5F5F5;
}

#fp{
  align-content:right;
   text-align: center;
}

</style>