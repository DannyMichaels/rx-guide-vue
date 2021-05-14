<template>
  <div class="med-card">
    <h3>{{ med.fields.name }}</h3>
    <img
      v-bind:src="med.fields.image"
      v-bind:alt="med.fields.name"
      width="100"
      height="50"
    />
    <div v-if="isEditable">
      <h4>Taken At:</h4>
      <h5>{{ med.fields.taken }}</h5>
      <button @click="handleDelete" class="btn">
        delete
        <img
          v-if="!isRefreshing"
          src="https://i.imgur.com/NhIlDPF.png"
          alt="delete"
          width="20px"
        />
        <img
          v-else
          id="loading"
          src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif"
        />
      </button>
    </div>
  </div>
</template>

<script>
import { deleteMed } from '../services/userMeds';

export default {
  name: 'MedCard',
  props: {
    med: Object,
    onDeleteMed: Function,
    isEditable: Boolean,
  },
  data() {
    return {
      isRefreshing: false,
    };
  },
  methods: {
    handleDelete: function() {
      this.isRefreshing = true;
      setTimeout(async () => {
        await deleteMed(this.med.id);
        this.onDeleteMed(this.med.id);
        this.isRefreshing = false;
      }, 150);
    },
  },
};
</script>

<style>
.med-card {
  margin: 20px;
  border: 1px solid pink;
  background: #ffccff;
  box-shadow: 5px 5px peachpuff;
  width: 250px;
  max-width: 250px;
  text-align: center;
  padding: 20px;
  transition: transform 300ms ease-out;
}

.med-card:hover {
  /* why is transform not working in vue? :( */
  transform: scale(1.1) ease-in;
}

.btn {
  align-items: center;
  padding: 10px 40px;
  overflow: hidden;
  background: red;
  border: none;
  cursor: pointer;
}
</style>
