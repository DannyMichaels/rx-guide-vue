<template>
  <div class="burger-parent" @click="toggleBurger">
    <div :class="handleClass" />
    <div :class="handleClass" />
    <div :class="handleClass" />
  </div>
  <div v-if="isNotErrorPage">
    <router-link :to="{ name: 'Home' }">
      <img class="rx-logo" src="https://i.imgur.com/O014jTc.png" alt="Logo" />
    </router-link>
  </div>
  <div v-else>ErrorHeader</div>
  <ul :class="'menu-nav' + (isNavShowing ? ' active' : '')">
    <router-link :to="{ name: 'Home' }" @click="toggleBurger">
      <li>
        <img
          className="li-button"
          src="https://www.flaticon.com/svg/static/icons/svg/2478/2478295.svg"
          alt="home"
        />
        <span>Home</span>
      </li>
    </router-link>
    <router-link :to="{ name: 'About' }" @click="toggleBurger">
      <li>
        <img
          className="li-button"
          src="https://i.imgur.com/Zhlm6SD.png"
          alt="about"
        />
        <span>About</span>
      </li>
    </router-link>

    <a
      href="https://www.linkedin.com/in/daniel-michael-718825155/"
      target="_blank"
      alt="LinkedIn"
      rel="noopener noreferrer"
    >
      <li>
        <img
          className="li-button"
          src="https://www.flaticon.com/svg/static/icons/svg/408/408703.svg"
          alt="LinkedIn"
        />
        <span>LinkedIn</span>
      </li>
    </a>
    <a
      href="https://www.github.com/dannymichaels"
      target="_blank"
      alt="GitHub"
      rel="noopener noreferrer"
    >
      <li>
        <img
          className="li-button"
          src="https://svgur.com/i/Qug.svg"
          alt="GitHub"
        />
        <span>GitHub</span>
      </li>
    </a>
  </ul>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      isNavShowing: false,
    };
  },
  computed: {
    handleClass: function() {
      return `burger-line${this.isNavShowing ? ' active' : ''}`;
    },
  },
  methods: {
    toggleBurger: function() {
      return (this.isNavShowing = this.isNavShowing ? false : true);
    },
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
  height: 30vh;
}

.burger-parent {
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 999;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
}

.burger-line {
  width: 2rem;
  height: 0.25rem;
  background-color: black;
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;
  width: 2rem;
  height: 0.25rem;
  box-shadow: 0px 0.1px 1.5px 0.5px #999999;
  background-color: #feccff;
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;
}

.burger-line.active {
  background-color: #000;
}

.burger-line.active:nth-child(1) {
  transform: rotate(45deg);
}

.burger-line.active:nth-child(2) {
  transform: translateX(100%);
  opacity: 0;
}

.burger-line.active:nth-child(3) {
  transform: rotate(-45deg);
}

.menu-nav.active {
  transform: translateX(0);
}

.menu-nav {
  display: flex;
  margin: 0;
  flex-flow: column nowrap;
  background-color: #ffccff;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 1.5rem;
  transition: transform 0.3s ease-in-out;
  list-style: none;
  z-index: 998;
  transform: translateX(100%);
}

a {
  text-decoration: none;
}

li {
  padding: 0;
  margin: 10px 0;
  width: fit-content;
  font-size: large;
  color: black;
  font-weight: 30px;
  text-decoration: none;
  cursor: pointer;
}
</style>
