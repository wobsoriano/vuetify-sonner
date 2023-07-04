<script setup lang="ts">
import { VCard, VCardActions, VCardText } from 'vuetify/components/VCard'
import { VBtn } from 'vuetify/components/VBtn'
import type { ToastProps } from './types'

withDefaults(defineProps<ToastProps>(), {
  showCloseButton: true,
  closeButtonProps: () => ({
    variant: 'text',
    color: 'pink',
  }),
  closeButtonText: 'Close',
})

defineEmits(['closeToast'])
</script>

<template>
  <VCard class="card-snackbar" v-bind="cardProps">
    <div class="d-flex flex-no-wrap justify-space-between">
      <VCardText v-bind="cardTextProps">
        {{ text }}
      </VCardText>
      <VCardActions v-if="showCloseButton" v-bind="cardActionProps">
        <VBtn
          v-bind="closeButtonProps"
          @click="$emit('closeToast')"
        >
          {{ closeButtonText }}
        </VBtn>
      </VCardActions>
    </div>
  </VCard>
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
