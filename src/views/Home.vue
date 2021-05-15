<template>
  <ul class="meds-list">
    <template v-for="med in userMeds" :key="med.id">
      <MedCard :med="med" :isEditable="true" :onDeleteMed="onDeleteMed" />
    </template>
  </ul>
</template>
<script>
import { getAllMeds } from '../services/allMeds';
import { getUserMeds } from '../services/userMeds';
import MedCard from '../components/MedCard';

export default {
  name: 'Home',
  components: {
    MedCard,
  },
  data() {
    return {
      allMeds: [],
      userMeds: [],
    };
  },
  methods: {
    sortMeds: function(meds) {
      const sortedMeds = meds.sort((recordA, recordB) => {
        const date1 = new Date(recordA.createdTime).getTime();
        const date2 = new Date(recordB.createdTime).getTime();

        if (date1 < date2) {
          return -1;
        } else if (date1 > date2) {
          return 1;
        } else {
          return 0;
        }
      });
      return sortedMeds;
    },
    onDeleteMed: function(id) {
      let newState = this.userMeds.filter((med) => med.id !== id);
      return (this.userMeds = newState);
    },
    fetchUserMeds: async function() {
      const medData = await getUserMeds();
      return (this.userMeds = this.sortMeds(medData));
    },
    fetchAllMeds: async function() {
      const medData = await getAllMeds();
      return (this.allMeds = medData);
    },
  },
  mounted() {
    this.fetchUserMeds();
    this.fetchAllMeds();
  },
};
</script>
<style></style>
