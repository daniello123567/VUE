<script setup>
import icon from '../assets/github-2.gif'
const props = defineProps(['message'
]);
console.log(props)
</script>

<template>
  <div class="header">
     <img class="github-img" :src="icon" alt="">
      <p>Daniel's Repositories.</p>
    </div>
 </template>
<style scoped>
.header{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 4em;
  gap: .4em;
  margin-inline: auto;
  border-bottom: 2px solid rgba(43, 42, 42, 0.445);
}
.github-img{
  width: 2.9em;
  height: 2.9em;
  object-fit: contain;
}
p{
  font-size: 1.2rem;
}
</style>
