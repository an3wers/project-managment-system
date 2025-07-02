<script setup lang="ts">
import { RouterView } from 'vue-router'
import LeftSidebar from './components/layout/LeftSidebar.vue'
import TopNavbar from './components/layout/TopNavbar.vue'
</script>

<template>
  <LeftSidebar />
  <div class="flex flex-col lg:ml-52 ml-16 transition-[margin]">
    <TopNavbar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
