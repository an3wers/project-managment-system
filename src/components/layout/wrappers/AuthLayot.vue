<script setup lang="ts">
import LeftSidebar from '../LeftSidebar.vue'
import TopNavbar from '../TopNavbar.vue'
</script>

<template>
  <LeftSidebar />
  <div class="flex flex-col lg:ml-52 ml-16 transition-[margin]">
    <TopNavbar />
    <main>
      <slot />
    </main>
  </div>
</template>
