<script setup lang="ts">
import type { Props } from './types'

withDefaults(defineProps<Props>(), {
  showCloseButton: true,
  closeButtonProps: {
    variant: 'text',
    color: 'pink',
  },
  closeButtonText: 'Close',
})

defineEmits(['closeToast'])
</script>

<template>
  <v-card class="card-snackbar" v-bind="cardProps">
    <div class="d-flex flex-no-wrap justify-space-between">
      <v-card-text v-bind="cardTextProps">
        {{ text }}
      </v-card-text>
      <v-card-actions v-if="showCloseButton" v-bind="cardActionProps">
        <v-btn
          v-bind="closeButtonProps"
          @click="$emit('closeToast')"
        >
          {{ closeButtonText }}
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<style>
.card-snackbar {
  background: rgb(var(--v-theme-surface-variant)) !important;
  color: rgb(var(--v-theme-on-surface-variant)) !important;
  max-width: 672px;
  min-width: 344px;
  min-height: 48px;
}
</style>
