<script setup lang="ts">
import { ref } from 'vue'
import type { Position as PositionType } from 'vue-sonner/lib/types'
import Hero from './Hero.vue'
import Position from './Position.vue'
import Types from './Types.vue'
import Expand from './Expand.vue'
import { VSonner } from '@/.'

const position = ref<PositionType>('bottom-right')
const expand = ref(false)
</script>

<template>
  <v-app>
    <v-main>
      <VSonner :position="position" :expand="expand" />
      <div class="container">
        <Hero />
        <div class="content">
          <Position v-model:position="position" />
          <Expand v-model:expand="expand" />
          <Types />
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
