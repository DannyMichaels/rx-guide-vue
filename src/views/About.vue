<template>
  <div class="container">
    <Search :onChange="handleSearch" />
    <img
      v-if="allMeds.length === 0"
      id="loading"
      src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif"
    />
    <ul class="meds-list" v-else>
      <template v-for="med in queriedMeds" :key="med.id">
        <router-link
          class="med-link"
          :to="{ name: 'MedDetail', params: { med: med, id: med.id } }"
        >
          <MedCard :med="med" :isEditable="false" />
        </router-link>
      </template>
    </ul>
    <div v-if="queriedMeds.length === 0 && allMeds.length > 0">
      <h1>No search results found!</h1>
    </div>
  </div>
</template>

<script>
import { getAllMeds } from '../services/allMeds';
import MedCard from '../components/MedCard';
import Search from '../components/Search';

export default {
  name: 'About',
  components: {
    MedCard,
    Search,
  },
  data() {
    return {
      allMeds: [],
      queriedMeds: [],
    };
  },
  methods: {
    fetchMeds: async function() {
      const medData = await getAllMeds();
      this.allMeds = medData;
      return (this.queriedMeds = medData);
    },
    handleSearch: function(e) {
      const { value } = e.target;
      const meds = [...this.allMeds];
      return (this.queriedMeds = meds.filter((med) =>
        med.fields.name.toLowerCase().includes(value.toLowerCase())
      ));
    },
  },
  mounted() {
    this.fetchMeds();
  },
};
</script>

<style>
.meds-list {
  /* RESET UL */
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  margin: 10px;
}

.med-link {
  text-decoration: none;
  color: inherit;
}

#loading {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
