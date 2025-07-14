<script setup lang="ts">
import { Icon } from '@iconify/vue'

function signOut() {}
</script>
<template>
  <aside
    class="flex flex-col h-screen gap-2 border-r fixed bg-muted/40 lg:w-52 w-16 transition-[width]"
  >
    <div class="flex h-16 items-center border-b px-2 lg:px-4 shrink-0 gap-1 justify-between">
      <button variant="outline" size="icon" class="w-8 h-8">
        <Icon icon="lucide:menu"></Icon>
      </button>

      <button variant="outline" size="icon" class="w-8 h-8">
        <Icon icon="lucide:plus"></Icon>
      </button>
    </div>

    <nav class="flex flex-col gap-2 justify-between h-full relative">
      <div>
        <RouterLink
          to="/"
          class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground"
        >
          <Icon icon="lucide:house"></Icon>
          <span class="hidden lg:block text-nowrap">Dashboard</span>
        </RouterLink>
        <RouterLink
          to="/projects"
          class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground"
        >
          <Icon icon="lucide:building-2"></Icon>
          <span class="hidden lg:block text-nowrap">Projects</span>
        </RouterLink>
        <RouterLink
          to="/tasks"
          class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground"
        >
          <Icon icon="lucide:badge-check"></Icon>
          <span class="hidden lg:block text-nowrap">My Tasks</span>
        </RouterLink>
      </div>

      <div class="border-y text-center bg-background py-3">
        <RouterLink
          to="/profile"
          class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground"
        >
          <Icon icon="lucide:user"></Icon>
          <span class="hidden lg:block text-nowrap">Profile</span>
        </RouterLink>
        <RouterLink
          to="/settings"
          class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground"
        >
          <Icon icon="lucide:settings"></Icon>
          <span class="hidden lg:block text-nowrap">Settings</span>
        </RouterLink>
        <button
          class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg cursor-pointer hover:text-primary justify-center lg:justify-normal text-muted-foreground"
          @click="signOut"
        >
          <Icon icon="lucide:log-out"></Icon>
          <span class="hidden lg:block text-nowrap">Sign out</span>
        </button>
      </div>
    </nav>
  </aside>
</template>
