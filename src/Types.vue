<script setup lang="ts">
import { toast } from '@/.'
</script>

<template>
  <div>
    <h2>Types</h2>
    <p>You can customize the type of toast you want to render, and pass an options object as the second argument.</p>
    <div class="buttons mt-2">
      <v-btn @click="toast('Event has been created')">
        Default
      </v-btn>
      <v-btn @click="toast.success('Something happened successfully')">
        Success
      </v-btn>
      <v-btn @click="toast.info('Be at the area 10 minutes before the time')">
        Info
      </v-btn>
      <v-btn @click="toast.warning('Event start time cannot be earlier than 8am')">
        Warning
      </v-btn>
      <v-btn @click="toast.error('Event has not been created')">
        Error
      </v-btn>
      <v-btn @click="toast.primary('Just a notification with primary color 💅')">
        Primary
      </v-btn>
      <v-btn @click="toast.secondary('Another notification with secondary color 🎨', {prependIcon: 'mdi-thumb-up'})">
        Secondary
      </v-btn>
    </div>
  </div>
</template>

<style>
.buttons {
  display: flex;
  gap: 8px;
  overflow: auto;
  margin: 0 calc(-1 * var(--side-padding));
  padding: 4px var(--side-padding);
  position: relative;
}
</style>
