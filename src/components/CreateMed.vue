<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="name" type="text">
        Name:
      </label>
      <select className="select-css" name="medId" @change="handleChange">
        <option
          v-for="med in allMeds"
          :key="med.id"
          :value="med.id"
          @change="handleChange"
          >{{ med.fields.name }}</option
        >
      </select>

      <label for="taken" type="text">
        Taken At:
      </label>
      <input
        name="taken"
        type="time"
        :value="formData.taken"
        @input="handleChange"
      />

      <button type="submit">
        <img
          className="submit-btn-img"
          src="https://i.imgur.com/BZOV6FC.png"
          alt="Submit"
        />
      </button>
    </form>
  </div>
</template>

<script>
import { prescribeMed } from '../services/userMeds';

export default {
  name: 'CreateMed',
  props: {
    allMeds: Array,
    onAddMed: Function,
  },

  data() {
    return {
      formData: {
        medId: '',
        taken: '',
      },
    };
  },

  methods: {
    prescribeMed,
    handleChange: function({ target: { name, value } }) {
      return (this.formData = {
        ...this.formData,
        [name]: value,
      });
    },
    handleSubmit: async function() {
      const selectedMed = this.allMeds.find(
        (med) => med.id === this.formData.medId
      );

      if (!this.formData.taken) {
        alert('You have to choose the time!');
        return;
      }

      const image = selectedMed?.fields?.image;

      const fields = {
        image,
        name: this.allMeds.find((med) => med.id === this.formData.medId)?.fields
          ?.name,
        taken: this.formData.taken,
      };

      const newMed = await prescribeMed(fields);

      this.onAddMed(newMed);

      this.formData = {
        medId: this.formData.medId,
        taken: '',
      };
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  background: none;
  border: none;
}

button:focus {
  outline: none;
}

select {
  border: peachpuff;
  cursor: pointer;
  text-align-last: center;
  margin: 10px;
}

.select-css {
  width: 100%;
  font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial',
    sans-serif;
  font-size: 18px;
  color: #60666d;
  width: 180px;
}

select:focus {
  outline: none;
}

input {
  border: peachpuff;
  cursor: pointer;
  display: block;
  width: 100%;
  font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial',
    sans-serif;
  font-size: 18px;
  color: #60666d;
  text-align-last: center;
  margin: 5px;
  width: 140px;
}
input:focus {
  outline: none;
}

img {
  width: 70px;
  height: 70px;
}
</style>
