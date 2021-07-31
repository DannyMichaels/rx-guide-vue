<template>
  <div class="about-text">
    <h1>
      Add your own custom medication!
    </h1>
    <!-- 
    <CustomMedForm
      handleSubmit="{handleSubmit}"
      handleChange="{handleChange}"
      name="{name}"
      medClass="{medClass}"
      description="{description}"
      image="{image}"
    /> -->
    <form @submit.prevent="handleSubmit">
      <label htmlFor="name" type="text">
        Name:
      </label>
      <input
        name="name"
        type="text"
        placeholder="Enter Drug Name"
        required
        autoFocus
        :value="formData.name"
        @input="handleChange"
      />

      <label htmlFor="class" type="text">
        Class:
      </label>
      <input
        name="medClass"
        type="text"
        required
        autoFocus
        placeholder="Enter Drug Class"
        :value="formData.medClass"
        @input="handleChange"
      />

      <label for="description" type="text">
        Description:
      </label>
      <textarea
        name="description"
        type="text"
        className="input-description"
        placeholder="Enter Drug Description"
        :value="formData.description"
        required
        autoFocus
        @input="handleChange"
      />

      <label for="image" type="text">
        Image:
      </label>
      <input
        name="image"
        type="text"
        placeholder="https://image.png/"
        :value="formData.image"
        required
        autoFocus
        @input="handleChange"
      />
      <button class="image-preview-btn" @click="handleImagePreview">
        Preview Medication
      </button>
      <button type="submit">
        <img
          src="https://i.imgur.com/BZOV6FC.png"
          alt="add custom medication"
        />
      </button>
    </form>
    <div v-if="imagePreview">
      <h2 style="margin-top: 50px;">Medication Preview:</h2>

      <div className="med">
        <h3>{{ formData.name }}</h3>
        <img
          :src="formData.image"
          style="max-width: 50px"
          :alt="formData.name"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { createCustomMed } from '../services/allMeds';

export default {
  name: 'CustomMed',
  data() {
    return {
      imagePreview: false,
      formData: {
        name: '',
        medClass: '',
        description: '',
        image: '',
      },
    };
  },
  mounted() {},
  methods: {
    handleChange: function({ target: { name, value } }) {
      return (this.formData = {
        ...this.formData,
        [name]: value,
      });
    },

    handleImagePreview: function() {
      return (this.imagePreview = this.imagePreview ? false : true);
    },
    handleSubmit: async function() {
      const { name, medClass, description, image } = this.formData;

      if (
        window.confirm(`Are you sure you want to add this medication?
    \n Name: ${name}\n Class: ${medClass} \n Description: ${description} \n Image URL: ${image}`)
      ) {
        alert('Medication Added!');
      } else {
        return;
      }

      const fields = {
        name,
        description,
        image,
        medClass,
      };

      const createdMed = await createCustomMed(fields);

      this.formData = {
        name: '',
        medClass: '',
        description: '',
        image: '',
      };

      this.$router.push('/about');
      return createdMed;
    },
  },
};
</script>
<style scoped>
h1 {
  text-shadow: 2px 2px peachpuff;
  color: black;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  max-width: 200px;
  margin: 0 auto;
  border: 1px solid pink;
  padding: 10px;
  background-color: #ffccff;
  box-shadow: 5px 5px peachpuff;
  align-items: center;
  margin-top: 20px;
}
input {
  border: peachpuff;
  padding: 10px;
  text-align: center;
  margin: 5px;
}
input::placeholder {
  font-size: 0.8rem;
}
input:focus {
  outline: none;
}
textarea {
  border: peachpuff;
  padding-bottom: 20px;
  text-align: center;
  margin: 5px;
  resize: none;
}
textarea:focus {
  outline: none;
}
button {
  background: none;
  border: none;
}
button:focus {
  outline: none;
}
img {
  width: 70px;
  height: 70px;
}
.image-preview-btn {
  background-color: white;
  margin: 10px;
  font-family: Sansita Swashed;
}
</style>
