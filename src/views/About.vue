<template lang="">
  <div>
    <ul class="meds-list" v-for="med in allMeds" :key="med.id">
      <li class="med-card">{{ med.fields.name }}</li>
    </ul>
  </div>
</template>
<script>
import { getAllMeds } from '../services/allMeds';

export default {
  name: 'About',
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
}
.med-card {
}
</style>
