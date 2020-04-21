<template>
    

<html lang="en">
<div> <head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script type="application/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script type="application/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
 </head>
<body>

<div class="container">
  <h2>KEYNOTE SPEAKERS</h2>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">

         <div class="item">
        <img src="../assets/images/Satoshi.jpg" alt="Satoshi" style="width:100%;">
        <div class="carousel-caption">
          <h3>Dr. Satoshi Nakamura</h3>
          <p>Professor of Nara Institute of Science and Technology (NAIST)!</p>
        </div>
      </div>

         <div class="item active">
        <img src="../assets/images/barbara.jpg" alt="Barbara" style="width:100%;">
        <div class="carousel-caption">
          <h3>Dr. Barbara Zitova</h3>
          <p>Institute of Information Theory and Automation of the ASCR</p>
        </div>
      </div>

      <div class="item active">
        <img src="../assets/images/s.s.agarwal.jpg" alt="S.S.Agrawal" style="width:100%;">
        <div class="carousel-caption">
          <h3>Prof. S.S. Agrawal</h3>
          <p>Emeritus Scientist, CSIR</p>
        </div>
      </div>

      <div class="item">
        <img src="../assets/images/nemeth.jpg" alt="Nemeth" style="width:100%;">
        <div class="carousel-caption">
          <h3>Prof. Nemeth Geza</h3>
          <p>Budapest University of Technology and Economics</p>
        </div>
      </div>
       <div class="item">
        <img src="../assets/images/amita.jpg" alt="Amita" style="width:100%;">
        <div class="carousel-caption">
          <h3>Dr. Amita Dev</h3>
          <p>Vice Chancellor, IGDTUW</p>
        </div>
      </div>
    
     
  
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  </div>

</body>

</div> 
</html>
    
</template>

<script>
export default {
    name: "Speakers"
}
</script>

