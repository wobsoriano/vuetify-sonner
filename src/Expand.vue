<script setup lang="ts">
import { toast } from '@/.'

defineProps<{
  expand: boolean
}>()
const emit = defineEmits(['update:expand'])

function onClick(value: boolean) {
  toast('Event has been created', {
    description: 'Monday, January 3rd at 6:00pm',
    prependIcon: '$vuetify',
  })
  emit('update:expand', value)
}
</script>

<template>
  <div>
    <h2>Expand</h2>
    <p>You can change the amount of toasts visible through the visibleToasts prop.</p>
    <div class="buttons mt-2">
      <v-btn @click="onClick(true)">
        Expand
      </v-btn>
      <v-btn @click="onClick(false)">
        Default
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
