<script setup lang="ts">
import { toast } from '@/index'
import type { Position } from '@/types'

const props = defineProps<{
  position: Position
}>()
const emit = defineEmits(['update:position'])

const positions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'] as const

function onClick(position: (typeof positions)[number]) {
  const toastsAmount = document.querySelectorAll('[data-sonner-toast]').length
  emit('update:position', position)

  if (toastsAmount > 0 && position !== props.position)
    return

  toast('Event has been created', {
    // vertical: true,
    // description: 'Monday, January 3rd at 6:00pm'
    action: {
      label: 'Close',
      buttonProps: {
        color: 'pink',
      },
      onClick() {},
    },
  })
}
</script>

<template>
  <div>
    <h2>Position</h2>
    <p>Swipe direction changes depending on the position.</p>
    <div class="buttons mt-2">
      <v-btn v-for="p in positions" :key="p" @click="onClick(p)">
        {{ p }}
      </v-btn>
    </div>
    <v-sheet
      class="mt-4 code-sheet"
      color="grey-lighten-4"
      rounded="lg"
    >
      <code>&lt;VSonner position="{{ position }}" /&gt;</code>
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
