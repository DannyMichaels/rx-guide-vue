<template>
  <div class="layout">
    <Header />
    <div class="layout-children">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from './Header';
import Footer from './Footer';

export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
  },
};
</script>
<style></style>
