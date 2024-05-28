<script setup>
 import {ref} from 'vue';
 const trululu = ref(false);
 const show = ()=>{trululu.value = true;
     setTimeout(()=>trululu.value = false, 2000)
 }
</script>

<template>
  <div>
    <div v-show="trululu" class="pre">stop clicking me and input the right path!(home or repodetails)</div>
  <div @click="show" class="error-page">
    <img class="warn1" src="../assets/warning.png" alt="" />

    <h1>No Page Like these!</h1>
    <h1>error 404!</h1>
    <h1>haba!</h1>
    <p class="p">These page doesn't exist!</p>
  </div>

</div>
</template>
<style scoped>
.error-page{
   color: red;
   border: 2px solid red;
   width: 25em;
   text-align: center;
   margin-inline: auto;
   margin-top: 2em;
   padding: 1em;
   border-radius: 2em;
}
.pre{
  background: rgb(59, 146, 59);
  color: white;
  width: 19em;
  text-align: center;
  border-radius: .6em;
  margin-inline: auto;
  margin-top: 2em;
}
.error-page:active{
  background-color: rgba(255, 255, 0, 0.199);
}
.error-page:hover{
  cursor: pointer;
  padding: 1.6em;
}
.warn1{
  width:  7em;
}
.p{
  color: black;
}
</style>
