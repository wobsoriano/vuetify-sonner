<script setup lang="ts">
import { toast } from '@/index'

function promise() {
  return new Promise(resolve => setTimeout(() =>
    resolve('Some Data'), 2000))
}
function promiseError() {
  return new Promise((_, reject) => setTimeout(() =>
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('This error'), 2000))
}
</script>

<template>
  <div>
    <h2>Progress Bar</h2>
    <p>You can remove or customize the progress bar</p>
    <div class="buttons mt-2">
      <v-btn @click="toast('Progress bar color and height changed', { progressBar: true, progressBarProps: { color: 'error', height: 12 } })">
        P Bar Props
      </v-btn>
      <v-btn @click="toast('Progress bar reversed', { progressBar: true, reverseProgressBar: true })">
        Reverse P Bar
      </v-btn>
      <v-btn @click="toast('Progress bar indefinite (loading)', { progressBar: true, loading: true })">
        Indefinite P Bar
      </v-btn>
      <v-btn
        @click="toast.toastOriginal.promise(promise, {
          loading: 'Loading...',
          success: (data) => {
            toast.success(`Successful operation: ${data}`, {
              progressBar: true,
              action: {
                buttonProps: {
                  icon: 'mdi-close',
                },
                onClick: () => {},
              } })
            return `Operation complete: ${data} was returned`;
          },
          error: (data: any) => 'Error',
          action: {
            label: 'Close',
            onClick: () => {},
          },
        },
        )"
      >
        Promise (success)
      </v-btn>
      <v-btn
        @click="toast.toastOriginal.promise(promiseError, {
          loading: 'Loading...',
          success: (data) => {
            return `Operation complete: ${data} was returned`;
          },
          error: (data: any) => {
            toast.error(`Error: ${data}`, {
              progressBar: true,
              action: {
                buttonProps: {
                  icon: 'mdi-close',
                },
                onClick: () => {},
              },
            })
            return `Error: ${data}`
          },
        },
        )"
      >
        Promise (error)
      </v-btn>
    </div>
    <v-sheet
      class="mt-4 code-sheet"
      color="grey-lighten-4"
      rounded="lg"
    >
      <code>toast('Progress bar', { progressBar: true, progressBarProps: { color: 'error', height: 12 } })</code>
    </v-sheet>
  </div>
</template>

<style>
.code-sheet {
  padding: 12px 16px;
}

.code-sheet code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
  font-size: 14px;
  color: #333;
}
</style>
