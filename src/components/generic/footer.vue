<template>
  <footer>

    <p>{{conf}}</p>

       <div >
         <a  href="#" title="Facebook"><i class="fab fa-facebook fa-fw fa-2x" aria-hidden="true"></i></a>
         <a  href="#" title="Twitter"><i class="fab fa-twitter   fa-fw fa-2x" aria-hidden="true"></i></a>
         <a  href="#" title="Google-plus"><i class="fab fa-google-plus fa-fw fa-2x" aria-hidden="true"></i></a>
         <a  href="#" title="Linkedin"><i class="fab fa-linkedin  fa-fw fa-2x" aria-hidden="true"></i></a>
       </div>

     <p><br>©Copyright 2020 IGDTUW</p>

  </footer>
</template>

<script>
export default {
  data () {
    return {

      conf: 'International Conference On Artificial Intelligence And Speech Technology'
    }
  }
}
</script>

<style scoped>
   footer {
          background-color: rgb(65, 63, 63);
          color:white;
          padding: 30px;
          text-align: center;

   }

   i.fa-facebook {
        color:white;
        background:#5252b8;
        border-radius:50%;
        text-align:centre;
        line-height:40px;
        margin-right: 20px;
   }

   i.fa-twitter {

        color:white;
        background:#00acee;
        border-radius:50%;
        text-align:centre;
        line-height:40px;
        margin-right: 20px;
   }

   i.fa-google-plus {
        color:white;
        background:tomato;
        border-radius:50%;
        text-align:centre;
        line-height:40px;
        margin-right: 20px;
   }

   i.fa-linkedin {
        color:white;
        background:#55acee;
        border-radius:50%;
        text-align:centre;
        line-height:40px;
        margin-right: 20px;

   }

   i:hover{
     background-color:darkorange;
     transform: translate(0,-10px);

   }

</style>
