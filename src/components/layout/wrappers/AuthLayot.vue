<script setup lang="ts">
import LeftSidebar from '../LeftSidebar.vue'
import TopNavbar from '../TopNavbar.vue'
</script>

<template>
  <LeftSidebar />
  <div class="flex flex-col lg:ml-52 ml-16 transition-[margin]">
    <TopNavbar />
    <main>
      <div class="max-w-6xl mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Page Title</h1>
        <slot />
      </div>
    </main>
  </div>
</template>
