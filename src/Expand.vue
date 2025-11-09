<script setup lang="ts">
import { computed } from 'vue'
import { toast } from '@/index'

const props = defineProps<{
  expand: boolean
}>()
const emit = defineEmits(['update:expand'])

const codeMap: Record<string, string> = {
  true: '<VSonner expand :visible-toasts="9" />',
  false: '<VSonner :expand="false" :visible-toasts="3" />',
}

const code = computed(() => codeMap[String(props.expand)])

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
