<script setup lang="ts">
import { VBtn, VCard, VCardActions, VCardText, VIcon, VSpacer } from 'vuetify/components'
import type { ToastProps } from './types'

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<ToastProps>(), {
  vertical: false,
  cardActionsProps: () => ({}),
})

defineEmits(['closeToast'])
</script>

<template>
  <VCard class="card-snackbar" v-bind="cardProps">
    <div :class="{ 'd-flex flex-no-wrap justify-space-between': !vertical }">
      <VCardText v-bind="cardTextProps" :class="{ 'd-flex align-center': prependIcon }">
        <VIcon v-if="prependIcon" class="mr-2" :icon="prependIcon" v-bind="prependIconProps" />
        <div v-if="description">
          <div class="pb-1">
            {{ text }}
          </div>
          <p class="font-weight-light" v-html="description" />
        </div>
        <template v-else>
          {{ text }}
        </template>
      </VCardText>
      <VCardActions v-if="action" v-bind="cardActionsProps">
        <VSpacer />
        <VBtn
          v-bind="action.buttonProps"
          :text="action.label"
          @click="() => {
            $emit('closeToast')
            action?.onClick?.()
          }"
        />
      </VCardActions>
    </div>
  </VCard>
</template>

<style scoped lang="scss">
.card-snackbar {
  background: rgb(var(--v-theme-surface-variant)) !important;
  color: rgb(var(--v-theme-on-surface-variant)) !important;
  max-width: 672px !important;
  min-width: 344px !important;
  min-height: 48px !important;
}
</style>
