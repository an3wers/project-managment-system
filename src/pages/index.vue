<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <h1>Home view</h1>
  <p><RouterLink to="/projects">Go to projects</RouterLink></p>
  <p><RouterLink to="/tasks">Go to tasks</RouterLink></p>
  <Button>Click me</Button>
</template>
