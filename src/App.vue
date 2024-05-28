<script setup>
import {  RouterView } from 'vue-router'
import Header from './components/header.vue'
import Loader from './views/loading-page.vue'
import { ref } from 'vue';

import icon from '../public/favicon.ico'
const isLoading = ref(true)
setTimeout(() => {
  isLoading.value = false;
},6000);
</script>

<template>

  <div class="app">
   
    <div v-if="isLoading"><Loader /></div>
    <div v-else>
      <Header />
      <RouterView />
    </div>
 
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Plus+Jakarta+Sans:wght@200;300;400;600&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}
</style>
