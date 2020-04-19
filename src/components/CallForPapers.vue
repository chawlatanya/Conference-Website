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
    margin:40px 40px 40px;
}
p{
    align-self: center;
    margin:40px 40px 40px;   
}
</style>