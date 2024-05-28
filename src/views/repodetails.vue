<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import githubInfo from './githubInfo';
console.log(githubInfo)
const route = useRoute()
const id = route.params.id
const user = 'daniello123567';
const token = githubInfo.token;
const data = ref([]);
import { RouterLink } from 'vue-router';
const Loaded = ref(false);
onMounted(() => {
  fetch(`https://api.github.com/repos/${user}/${id}`, {
    header: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((res) =>{
      res ? Loaded.value = true : '';
return res.json();})
    .then((res) => {
      data.value = res
      console.log(res)
    })
  console.log(data.value)
})
</script>
<template>
  <div id="body1">
    <div class="lok" v-if="!Loaded">
     <p>Chill Abeg..</p>
     <img src="../assets/Walk.gif" alt="">
    </div>
  <div v-if="Loaded" class="repo-info">
     <div><img class='git-logo' src="../assets/github-2.gif" alt=""><h1>{{ data.name }}</h1></div>
    <div class="deets"> Date Created  :<sapan>{{ data.created_at }}</sapan></div>
    <div class="deets"> visibilty  :<sapan>{{ data.visibilty ? data.visibilty : 'none' }}</sapan></div>
    <div class="deets"> Default Branch  :<sapan>{{ data.default_branch }}</sapan></div>
    <div class="deets"> Home Page  :<a :href="data.homepage">visit</a></div>
    <div class="deets"> langauge  :<sapan>{{data.language}}</sapan></div>
    <div class="deets"> issues  :<sapan>{{data.has_issues}}</sapan></div>
    <div class="deets"> starGazers  :<sapan>{{data.stargazers_count}}</sapan></div>
    <div class="deets"> subscribers  :<sapan>{{data.subscribers_count}}</sapan></div>
    <div class="deets"> Updated Last at  :<sapan>{{data.updated_at}}</sapan></div>

    <div class="deets"> Description :<sapan>{{data.description ? data.description : 'none'}}</sapan></div>
  </div>
  <div v-if="Loaded" class="button">
    <button>
    <RouterLink to="/">
    Back To Home
  </RouterLink>
</button>
  </div>

</div>
</template>
<style scoped>
.lok{
  border: 2px solid rgb(143, 137, 137);
  width: max-content;
  height: max-content;
  border-radius: .9em;
  padding: 2em;
  margin-inline: auto;
  position: relative;
  top: 5em;
}
button{
  margin-bottom: 20em;
  width: 11em;
  height: 3em;
  color: white;
  background: darkslateblue;
  border: none;
  padding: 1em;
  border-radius: .4em;
}
.button{
  width: max-content;
  height: max-content;
  margin-inline: auto;
  margin-top: 2em;
  cursor: pointer;
}
.body1{
  margin-bottom: 20em;
}
a{
  text-decoration: none;
   color: white;
}
.git-logo{
  width: 2em;
}
.deets{
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: start;
  border-bottom: 2px solid darkseagreen;
}
.repo-info {
  padding-inline: 3em;
  padding-top: 4em;
  width: max-content;
  background-color: rgba(175, 175, 175, 0.473);
  height: max-content;
  padding-bottom: 2em;
  margin-inline: auto;
  margin-top: 2em;
  border-radius: .9em;
  /* margin-bottom: 10em; */
}
.deets p{
  text-align: center;
}


@media(max-width: 1022px ){
  .repo-info{
    width: 30em;
  }
}
@media (max-width: 558px ) {
  .repo-info{
    width: 20em;
  }}
</style>
