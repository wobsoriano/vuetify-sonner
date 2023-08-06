<script setup lang="ts">
import { VSonner } from 'vuetify-sonner'
import { ref } from 'vue'
import type { Position as PositionType } from 'vue-sonner/lib/types'
import Hero from './Hero.vue'
import Position from './Position.vue'
import Expand from './Expand.vue'

const position = ref<PositionType>('bottom-center')
const expand = ref(false)
</script>

<template>
  <v-app theme="dark">
    <v-main>
      <VSonner offset="32px" :position="position" :expand="expand" />
      <div class="container">
        <Hero />
        <div class="content">
          <Position v-model:position="position" />
          <Expand v-model:expand="expand" />
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
