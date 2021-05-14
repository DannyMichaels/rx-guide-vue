<template>
  <ul class="meds-list">
    <template v-for="med in allMeds" :key="med.id">
      <MedCard :med="med" :isEditable="false" />
    </template>
  </ul>
</template>
<script>
import { getAllMeds } from '../services/allMeds';
import MedCard from '../components/MedCard';

export default {
  name: 'About',
  components: {
    MedCard,
  },
  data() {
    return {
      allMeds: [],
    };
  },
  mounted() {
    const fetchMeds = async () => {
      const medData = await getAllMeds();
      this.allMeds = medData;
    };
    fetchMeds();
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
