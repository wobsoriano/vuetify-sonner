<script setup lang="ts">
import { VProgressLinear } from 'vuetify/components'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { ExternalToast, ToastProps } from './types'

type ProgressProps = Pick<ExternalToast, 'duration'>
  & Pick<ToastProps, 'progressBarProps'>
  & { isPaused: boolean, reverseProgressBar: boolean }

const props = withDefaults(defineProps<ProgressProps>(), {
  duration: 5000,
  isPaused: false,
  reverseProgressBar: false,
})

const value = props.reverseProgressBar ? ref(0) : ref(5000)

let interval: ReturnType<typeof setInterval>

watch(() => props.isPaused, (newValue) => {
  if (!newValue && !props.progressBarProps?.indeterminate)
    syncProgressBar()
})

function syncProgressBar() {
  interval = setTimeout(() => {
    if (props.isPaused)
      return
    props.reverseProgressBar ? value.value += 120 : value.value -= 120
    if (value.value <= 0 && !props.reverseProgressBar) {
      value.value = 0
      clearInterval(interval)
    }
    else if (value.value >= props.duration && props.reverseProgressBar) {
      value.value = props.duration
      clearInterval(interval)
    }
    else {
      syncProgressBar()
    }
  }, 100)
}

onMounted(() => {
  if (!props.progressBarProps?.indeterminate) {
    value.value = props.reverseProgressBar ? 0 : props.duration
    syncProgressBar()
  }
})

onBeforeUnmount (() => {
  clearInterval(interval)
})
</script>

<template>
  <VProgressLinear v-bind="props.progressBarProps" :model-value="Math.floor(100 * (value / props.duration))" />
</template>
