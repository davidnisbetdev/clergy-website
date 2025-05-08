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
}

/* navigation links */
.main-nav a {
  margin-left: 1rem;
  color: #ccc;
  text-decoration: none;
}
.main-nav a:hover,
.main-nav a.router-link-exact-active {
  color: white;
  font-weight: bold;
}

</style>