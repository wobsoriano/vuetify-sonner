<script setup lang="ts">
import { Toaster } from 'vue-sonner'
import type { ToasterProps } from 'vue-sonner/lib/types'

type Props = Omit<ToasterProps, 'richColors' | 'theme' | 'closeButton' | 'toastOptions' | 'className' | 'style'>

withDefaults(defineProps<Props>(), {
  position: 'bottom-right',
  hotkey: () => ['altKey', 'KeyT'],
  expand: false,
  visibleToasts: 3,
})
</script>

<template>
  <Toaster
    :position="position"
    :hotkey="hotkey"
    :expand="expand"
    :visible-toasts="visibleToasts"
    :duration="duration"
  />
  <slot />
</template>
