<template>
  <div v-if="isNotErrorPage">
    Header
  </div>
  <div v-else>ErrorHeader</div>
</template>
<script>
export default {
  name: 'Header',

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
<style></style>
