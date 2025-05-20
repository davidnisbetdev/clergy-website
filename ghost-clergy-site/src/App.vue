<script setup>
import Header from '@/components/Header.vue'
// import MainFooter from '@/components/Footer.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">

    <Header />

  <main class="main-content">
    <RouterView />
  </main>

  <footer class="main-footer">
    <p>&copy; {{ new Date().getFullYear() }} Ministry Archives. All dogma reserved.</p>
  </footer>

</div>

</template>

<style scoped>

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* main content area */
.main-content {
  flex-grow: 1;
  padding: 2rem;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

/* Footer */
.site-footer {
  margin-top: auto;
  padding: 1rem;
  text-align: center;
  background-color: #1a1a1a;
  color: #888; 
}

</style>
