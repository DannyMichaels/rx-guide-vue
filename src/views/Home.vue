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
    onDeleteMed: function(id) {
      let newState = this.userMeds.filter((med) => med.id !== id);
      return (this.userMeds = newState);
    },
  },
  mounted() {
    const fetchUserMeds = async () => {
      const medData = await getUserMeds();
      this.userMeds = medData;
    };

    const fetchAllMeds = async () => {
      const medData = await getAllMeds();
      this.allMeds = medData;
    };

    fetchUserMeds();
    fetchAllMeds();
  },
};
</script>
<style lang=""></style>
