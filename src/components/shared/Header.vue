<template>
  <div v-if="isNotErrorPage">
    <router-link :to="{ name: 'Home' }">
      <img class="rx-logo" src="https://i.imgur.com/O014jTc.png" alt="Logo" />
    </router-link>
  </div>
  <div v-else>ErrorHeader</div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      isNavShowing: false,
    };
  },
  methods: {
    isNotErrorPage: function() {
      let whitelist = /^\/about|^\/custom-medication|^\/medication|^\/$/;
      return whitelist.match(
        Object.values(this.$router.currentRoute._rawValue)[0]
      );
    },
  },
};
</script>
<style scoped>
.rx-logo {
  width: 350px;
  height: 300px;
}
</style>
