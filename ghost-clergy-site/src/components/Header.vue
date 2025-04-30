<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
<header class="site-header">
    <div class="site-title">
      <RouterLink to="/">The Clergy</RouterLink>
    </div>
    <nav class="main-nav">
      <RouterLink to= "/">Home</RouterLink>
      <RouterLink to="/about">About Us</RouterLink>
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