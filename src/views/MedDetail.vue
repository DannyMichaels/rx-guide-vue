<template>
  <div v-if="med.id" class="med-detail-container">
    <h1>
      {{ med.fields.name }}
    </h1>
    <h2 v-if="med?.fields?.medClass !== undefined">
      Class: {{ med.fields.medClass }}
    </h2>
    <h2>
      Description:
      <h4 class="med-detail-h4">{{ med.fields.description }}</h4>
    </h2>
    <img
      :src="med.fields.image"
      :alt="med.fields.name"
      class="med-detail-img"
    />
  </div>
  <img
    v-else
    id="loading"
    src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif"
  />
</template>

<script>
import { getMedById } from '../services/allMeds';

export default {
  name: 'MedDetail',
  data() {
    return {
      med: {},
    };
  },
  methods: {
    getOneMed: async function(id) {
      const medData = await getMedById(id);
      return (this.med = medData);
    },
  },
  mounted() {
    this.getOneMed(this.$route.params.id);
  },
};
</script>

<style>
.med-detail-container {
  margin-top: 5em;
  text-shadow: 2px 2px peachpuff;
}

.med-detail-h4 {
  margin-left: 100px;
  margin-right: 100px;
}

.med-detail-img {
  max-width: 350px;
  max-height: 350px;
}

#loading {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
