<template>
  <footer>
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link to="/about">About</router-link>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  methods: {
    getWhiteList: function() {
      return /^\/about|^\/custom-medication|^\/medication|^\/$/;
    },
  },
};
</script>
<style>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 100px;
  width: 100%;
  background: #feccff;
  box-shadow: 0px 0px 3.5px 5px peachpuff;
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
</style>
