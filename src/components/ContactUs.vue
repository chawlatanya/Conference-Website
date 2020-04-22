<template>
 

  <section class="row">
     
    <div class="col">  
   
    <form>
     <h3>CONTACT FORM</h3>
   <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="uemail"><b>Email</b></label>
    <input type="email" placeholder="Enter Email" name="uemail" required>

    <label for="usub"><b>Subject</b></label>
    <input type="text" placeholder="Enter Subject" name="usub" required>
     
     <label for="umsg"><b>Message</b></label>
    <textarea  name="umsg" rows="5" placeholder="Message"></textarea>

    <button type="submit">SUBMIT</button>
   
  </div>

 
  </form>
</div>
<div  class="col">
    <p><h3>GET IN TOUCH WITH US</h3></p>
</div>   
  </section>
</template>

<script>
export default {
      


}
</script>



<style scoped>


    ./* Bordered form */
form {
  border: 3px solid #f1f1f1;
}



/* Full-width inputs */
input[type=text], input[type=email],textarea {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}
</style>