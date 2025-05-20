<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isMobileNavOpen = ref(false)

function toggleMobileNav() {
  isMobileNavOpen = !isMobileNavOpen.value
}
</script>
<template>
<header class="site-header">
    <div class="site-title">
      <RouterLink to="/">The Clergy</RouterLink>
    </div>
    <nav class="main-nav">
      <button class="hamburger-menu" @click="toggleMobileNav" aria-label="Toggle Navigation" :aria-expanded="isMobileNavOpen.toString()">
        <span>☰</span>
      </button>
      <ul class="nav-links" :class="{ 'is-open': isMobileNavOpen }">
        <li><RouterLink to= "/" @click="isMobileNavOpen && toggleMobileNav()">Home</RouterLink></li>
        <li><RouterLink to="/about" @click="isMobileNavOpen && toggleMobileNav()">About Us</RouterLink></li>
      </ul>
    </nav>
</header>
</template>

<style scoped>

.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;
  background-color: #1a1a1a; 
  color: #f0f0f0;
  line-height: 1.5;
}

/* Site title */
.site-title a {
  color: inherit;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
}

/* navigation links */
.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 1.5rem;
}

.nav-links a {
  color: #ccc;
  padding: 0.3rem 0;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-links a:hover,
.nav-links a.router-link-exact-active {
  color: #fff;
  font-weight: bold;
}

.hamburger-menu {
  display: none;
}
</style>