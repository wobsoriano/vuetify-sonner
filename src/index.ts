import { h, markRaw } from 'vue'
import { toast as toastOriginal } from 'vue-sonner'
import type { ExternalToast } from 'vue-sonner/lib/types'
import VSonner from './VSonner.vue'
import Toast from './Toast.vue'
import type { ToastProps } from './types'

type Options = Omit<ToastProps, 'text'> & Pick<ExternalToast, 'duration' | 'onAutoClose' | 'onDismiss' | 'id' | 'important' | 'promise'>

export function toast(text: string, options?: Options) {
  return toastOriginal.custom(markRaw(h(Toast, {
    ...options,
    text,
  })), {
    ...options,
  })
}

export {
  VSonner,
}
