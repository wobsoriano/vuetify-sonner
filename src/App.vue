<script setup lang="ts">
import { ref } from 'vue'
import type { Position as PositionType } from 'vue-sonner/lib/types'
import Hero from './Hero.vue'
import Position from './Position.vue'
import Types from './Types.vue'
import Expand from './Expand.vue'
import { VSonner } from '@/.'
import WithProgressBars from './WithProgressBars.vue'
import WithAvatars from './WithAvatars.vue'

const position = ref<PositionType>('bottom-right')
const expand = ref(false)
const range = ref([2, 9])
const maxToasts = ref(3)

</script>

<template>
  <v-app>
    <v-main>
      <VSonner :position="position" :visible-toasts="maxToasts" :expand="expand" />
      <div class="container">
        <Hero />
        <div class="content">
          <Position v-model:position="position" />
          <v-slider
            v-model="maxToasts"
            :max="range[1]"
            :min="range[0]"
            :show-ticks="true"
            thumb-label="always"
            
            :step="1"
            hint="Number of visible toasts at a time"
            persistent-hint
          >
            <template v-slot:prepend>
              <v-text-field
                v-model="range[0]"
                density="compact"
                style="width: 70px"
                type="number"
                variant="outlined"
                hide-details
                single-line
              ></v-text-field>
            </template>
            <template v-slot:append>
              <v-text-field
                v-model="range[1]"
                density="compact"
                style="width: 70px"
                type="number"
                variant="outlined"
                hide-details
                single-line
              ></v-text-field>
            </template>
          </v-slider>
          <Expand v-model:expand="expand" />
          <Types />
          <WithProgressBars />
          <WithAvatars />
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<style>
body {
  --side-padding: 16px;
}

.container {
  padding-top: 100px;
  max-width: 773px;
  margin: 0 auto;
  padding-left: max(var(--side-padding), env(safe-area-inset-left));
  padding-right: max(var(--side-padding), env(safe-area-inset-right));
}

* {
  touch-action: manipulation;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-top: 96px;
}
</style>
