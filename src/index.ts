import { h, markRaw } from 'vue'
import { toast as toastOriginal } from 'vue-sonner'
import VSonner from './VSonner.vue'
import Toast from './Toast.vue'
import type { Props } from './types'

export function toast(text: string, options?: Omit<Props, 'text'>) {
  return toastOriginal(markRaw(h(Toast, {
    ...options,
    text,
  })))
}

export {
  VSonner,
}
