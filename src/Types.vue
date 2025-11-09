<script setup lang="ts">
import { computed, ref } from 'vue'
import { toast } from '@/index'

type ToastType = 'default' | 'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary'

const selectedType = ref<ToastType>('default')

const codeMap: Record<ToastType, string> = {
  default: 'toast(\'Event has been created\')',
  success: 'toast.success(\'Something happened successfully\')',
  info: 'toast.info(\'Be at the area 10 minutes before the time\')',
  warning: 'toast.warning(\'Event start time cannot be earlier than 8am\')',
  error: 'toast.error(\'Event has not been created\')',
  primary: 'toast.primary(\'Just a notification with primary color 💅\')',
  secondary: 'toast.secondary(\'Another notification with secondary color 🎨\', { prependIcon: \'mdi-thumb-up\' })',
}

const code = computed(() => codeMap[selectedType.value])

function onClick(type: ToastType, toastFn: () => void) {
  selectedType.value = type
  toastFn()
}
</script>

<template>
  <div>
    <h2>Types</h2>
    <p>You can customize the type of toast you want to render, and pass an options object as the second argument.</p>
    <div class="buttons mt-2">
      <v-btn @click="onClick('default', () => toast('Event has been created'))">
        Default
      </v-btn>
      <v-btn @click="onClick('success', () => toast.success('Something happened successfully'))">
        Success
      </v-btn>
      <v-btn @click="onClick('info', () => toast.info('Be at the area 10 minutes before the time'))">
        Info
      </v-btn>
      <v-btn @click="onClick('warning', () => toast.warning('Event start time cannot be earlier than 8am'))">
        Warning
      </v-btn>
      <v-btn @click="onClick('error', () => toast.error('Event has not been created'))">
        Error
      </v-btn>
      <v-btn @click="onClick('primary', () => toast.primary('Just a notification with primary color 💅'))">
        Primary
      </v-btn>
      <v-btn @click="onClick('secondary', () => toast.secondary('Another notification with secondary color 🎨', { prependIcon: 'mdi-thumb-up' }))">
        Secondary
      </v-btn>
    </div>
    <v-sheet
      class="mt-4 code-sheet"
      color="grey-lighten-4"
      rounded="lg"
    >
      <code>{{ code }}</code>
    </v-sheet>
  </div>
</template>

<style>
.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 calc(-1 * var(--side-padding));
  padding: 4px var(--side-padding);
  position: relative;
}

.code-sheet {
  padding: 12px 16px;
}

.code-sheet code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
  font-size: 14px;
  color: #333;
}
</style>
