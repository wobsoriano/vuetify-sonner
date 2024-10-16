<script setup lang="ts">
import { toast } from '@/index'

function showSonner() {
  toast('Hey, it\'s a snackbar')
}
</script>

<template>
  <div>hello world</div>
  <button @click="showSonner">
    Click me
  </button>
</template>
