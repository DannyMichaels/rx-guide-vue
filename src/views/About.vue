<template>
  <div class="container">
    <Search :onChange="handleSearch" />
    <ul class="meds-list">
      <template v-for="med in queriedMeds" :key="med.id">
        <!-- <router-link :to="{ name: 'MedDetail', params: { id: med.id } }"> -->
        <MedCard :med="med" :isEditable="false" />
        <!-- </router-link> -->
      </template>
    </ul>
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
      return (this.queriedMeds = this.allMeds.filter((med) =>
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
</style>
