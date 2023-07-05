<script setup lang="ts">
import { ref } from 'vue'
import { toast } from 'vuetify-sonner'

const snackbar = ref(false)
</script>

<template>
  <div class="wrapper">
    <h1 class="text-h3">
      Vuetify Sonner
    </h1>
    <p style="margin-top: 0; fontSize: 18px;">
      Stackable toast component for Vuetify.
    </p>
    <div class="buttons">
      <VBtn
        color="primary" size="large"
        @click="() => {
          toast('Vuetify Sonner', {
            description: 'Stackable toast component for Vuetify.',
          })
        }"
      >
        Render a toast
      </VBtn>
      <VBtn
        href="https://github.com/wobsoriano/vuetify-sonner" target="_blank"
        size="large"
      >
        GitHub
      </VBtn>
    </div>
  </div>
  <v-snackbar v-model="snackbar">
    Stackable toast component for Vuetify.
    <template #actions>
      <v-btn
        color="pink"
        variant="text"
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.buttons {
  display: flex;
  gap: 8px;
}
</style>
