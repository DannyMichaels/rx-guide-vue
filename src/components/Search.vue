<template>
  <form id="search-form" @submit.prevent>
    <input
      type="text"
      name="search"
      id="search-input"
      placeholder="Search Medication"
      @input="onChange"
    />
  </form>
</template>
<script>
export default {
  name: 'Search',
  props: ['onChange'],
};
</script>

<style>
#search-form {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#search-input {
  width: 50vw;
  font-size: 18px;
  letter-spacing: 0.1px;
  padding: 12px 20px 12px 40px;
  border: 1px solid pink;
  margin: 40px;
  text-align: center;
  box-shadow: 5px 5px peachpuff;
}
#search-input:focus {
  outline: none;
}
</style>
