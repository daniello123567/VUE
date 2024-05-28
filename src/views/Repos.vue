<script setup>
import { ref, onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
import githubInfo from './githubInfo'
const datas = ref([])
const user = 'daniello123567';
const token = githubInfo.token
const isError = ref(false)
const Loaded = ref(false)
onMounted(() => {
  fetch(`https://api.github.com/users/${user}/repos`, {
    header: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      data ? (Loaded.value = true) : ''
      console.log(Loaded.value && 'LOADED')

      datas.value = data
      console.log(datas.value)
    })
    .catch((msg) => {
      msg ? (isError.value = true) : ''
      console.log(msg)
    })
})

const currentPage = ref(1)
const itemsPerPage = ref(4)

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return datas.value?.slice(start, end)
})

const totalPages = computed(() => datas.value && Math.ceil(datas.value.length / itemsPerPage.value))

const changePage = (page) => {
  currentPage.value = page
}
const searchQuery = ref()
const Filtered = computed(() => {
  return (
    searchQuery.value &&
    datas.value.filter((item) => {
      const result = item.name.includes(searchQuery.value)

      return result
    })
  )
})
const filterQue = ref()
const filterQuery = computed(() => {
  return (
    filterQue.value &&
    datas.value.filter((item) => {
      const result = item.visibility.includes(filterQue.value)
      return result
    })
  )
})
</script>
<template>
  <div>
    <div class="ser">
      <input
        aria-label="search through al my repositories"
        role="search"
        v-model="searchQuery"
        placeholder="search for repos"
        type="text"
      />
      <div class="filter">
        <img src="../assets/filter.png" alt="" />

        <select
          aria-label="filter public and private repos"
          role="filter"
          v-model="filterQue"
          name="filter"
          id=""
        >
          <option value="public">public Repo(s)</option>
          <option value="Private">private Repo(s)</option>
        </select>
      </div>
    </div>
    <div class="loading-guy" v-if="!Loaded">
      <p>Patience please....</p>
      <img src="../assets/Basketball.gif" alt="" />
    </div>
    <div v-if="isError" class="no-net">
      <img class="warn1" src="../assets/warning.png" alt="" />
      <h1>error</h1>
      <p>PLEASE CHECK YOUR INTERNET !</p>
    </div>

    <div class="no-result" v-show="searchQuery" v-if="Filtered == false">
      <h1>omo, No result for <span style="color: black">{{searchQuery}}</span> o!</h1>
      <img class="warn" src="../assets/warning.png" alt="" />
    </div>
    <div v-if="filterQuery">

      <div aria-live="assertive" class="tes" v-if="filterQuery">
        <h1 class="baba">{{ filterQue }} Repositories</h1>
        <div v-if="filterQuery == false || null" class="no-res">NO PRIVATE REPOS</div>

      </div>
      <div class="repos">
        <div class="repository" v-for="results in filterQuery" :key="results.id">
          <h5 class="repo-name">
            <img src="../assets/github-2.gif" alt="" />
            {{ results.name }}.
          </h5>
          <div class="info">
            <p class="para">
              <img class="icon" src="../assets/handshake.png" alt="" /> Language:
              {{ results.language ? results.language : 'none' }}
            </p>
            <p class="para">
              <img class="icon icon1" src="../assets/cal.png" />Created at: {{ results.created_at }}
            </p>
            <p class="para">
              <img class="icon" src="../assets/eye.png" />Visibilty: {{ results.visibility }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div aria-live="assertive" v-if="searchQuery">
        <div class="repos">
          <div class="repository" v-for="results in Filtered" :key="results.id">
            <h5 class="repo-name">
              <img src="../assets/github-2.gif" alt="" />
              {{ results.name }}.
            </h5>
            <div class="info">
              <p class="para">
                <img class="icon" src="../assets/handshake.png" alt="" /> Language:
                {{ results.language ? results.language : 'none' }}
              </p>
              <p class="para">
                <img class="icon icon1" src="../assets/cal.png" />Created at:
                {{ results.created_at }}
              </p>
              <p class="para">
                <img class="icon" src="../assets/eye.png" />Visibilty: {{ results.visibility }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="repos">
        <div
          aria-live="assertive"
          aria-atomic="true"
          class="repository"
          v-for="data in paginatedData"
          :key="data.id"
        >
          <h5 class="repo-name">
            <img src="../assets/github-2.gif" alt="" />
            {{ data.name }}.
          </h5>
          <div class="info">
            <p class="para">
              <img class="icon" src="../assets/handshake.png" alt="" /> Language:
              {{ data.language ? data.language : 'none' }}
            </p>
            <p class="para">
              <img class="icon icon1" src="../assets/cal.png" />Created at: {{ data.created_at }}
            </p>
            <p class="para">
              <img class="icon" src="../assets/eye.png" />Visibilty: {{ data.visibility }}
            </p>
            <RouterLink class="as" :to="`/repodetails/${data.name}`">View More</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="btn">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        :disabled="page === currentPage"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>
<style scoped>
.btn {
  width: fit-content;
  height: max-content;
  margin-inline: auto;
  margin-top: 3em;
}
.value {
  text-align: center;
}
.para {
  display: flex;
  align-items: center;
  gap: 0.3em;
}
.icon1 {
  margin-top: -1.3em;
}
a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
.as{
  border: 1px solid rgb(194, 190, 190);
  color: white;
  background-color: rgba(158, 153, 153, 0.493);
  text-align: center;
  border-radius: .3em;
  font-size: .8rem;
  padding-block: .7em;
}
.as:hover {
  background: rgba(150, 134, 134, 0.959);
  color: white;
}
.repository {
  height: 16em;
  background: whitesmoke;
  border-radius: 0.4em;
}
.repository:hover {
  cursor: pointer;
  border: 2px solid rgba(207, 197, 197, 0.712);
}
.icon {
  width: 1em;
}
.info {
  padding-inline: 2em;
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  padding-top: 1em;
  padding-bottom: 2em;
  width: 70%;
  margin-inline: auto;
  /* text-align: center; */
}
.no-net {
  border: 1px solid red;
  color: red;
  width: 13em;
  height: 13em;
  margin-inline: auto;
  text-align: center;
  margin-top: 1em;
}
.repo-name img {
  width: 2em;
}
.no-res{

}
.no-result {
  border-radius: 1em;
  color: red;
  border: 2px solid rgb(206, 200, 200);
  width: 20em;
  height: 19em;
  text-align: center;
  margin-inline: auto;
  margin-top: 1em;
}
.repo-name {
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  justify-content: center;
  color: black;
  border-bottom: 4px solid white;
  height: 3em;
  width: 100%;
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;
  gap: 0.5em;
}
.warn {
  width: 15em;
  border-radius: 2em;
}
.loading-guy {
  border: 2px solid rgba(128, 128, 128, 0.521);
  width: max-content;
  height: max-content;
  padding: 2em;
  position: relative;
  margin-inline: auto;
  top: 10em;
  display: flex;
  font-weight: bolder;
  align-items: center;
  gap: 0.1em;
  border-radius: 0.9em;
}
.loading-guy img {
  width: 2em;
}
.repos {
  display: grid;
  grid-template-columns: repeat(4, 16em);
  gap: 1em;
  width: max-content;
  margin-inline: auto;
  margin-top: 3em;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
.warn1 {
  width: 6em;
}
.tes {
  width: max-content;
  height: max-content;
  margin-inline: auto;
}
button {
  margin: 0 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.filter img {
  width: 2em;
  height: 2em;
}
.filter {
  display: flex;
  align-items: center;
  gap: -1em;
}
input {
  width: 30em;
  height: 100%;
  border: none;
  background: whitesmoke;
  color: black;
  border-radius: 0.6em;
  padding-inline-start: 1em;
}
.ser {
  width: 30em;
  height: 3em;
  margin-inline: auto;
  margin-top: 1em;
  display: flex;
  gap: 1em;
}
.ser select {
  border: none;
  width: 2em;
}
@media (max-width: 1097px) {
  .repos {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .info {
    padding-block-end: 3em;
  }
}
@media (max-width: 753px) {
  .repos {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2em;
  }
  .repository {
    border: 2px solid rgb(206, 221, 206);
  }
  .filter img {
    width: 1em;
    height: 1em;
  }
  .ser {
    display: block;
    text-align: center;
  }
  .btn1{
  width: 16em;
  height: max-content;
  margin-inline: auto;
}
.btn12{
  width: 100%;
}
  div .filter {
    border: 1px solid deepskyblue;
    /* margin-top: 3.5em; */
    width: max-content;
    height: max-content;
    margin-inline: auto;
  }
  .baba{
    margin-top: 1em;
  }
}
</style>
