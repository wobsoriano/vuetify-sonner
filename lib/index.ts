import { h, markRaw } from 'vue'
import { toast as toastOriginal } from 'vue-sonner'
import type { ExternalToast } from 'vue-sonner/lib/types'
import VSonner from './VSonner.vue'
import Toast from './Toast.vue'
import type { ToastProps } from './types'

type Options = Omit<ToastProps, 'text'> & Pick<ExternalToast, 'duration' | 'onAutoClose' | 'onDismiss' | 'id' | 'important'>

function toastFunction(text: string, options?: Options) {
  const { description, action, ...rest } = options || {}
  return toastOriginal.custom(markRaw(h(Toast, {
    ...rest,
    progressBar: options?.progressBar ?? true,
    progressDuration: options?.duration ?? 5000,
    progressBarProps: {
      ...options?.progressBarProps,
      indeterminate: options?.loading
    },
    description,
    action,
    text,
  })), {
    ...rest,
    unstyled: true,
  })
}

function createToastFunction(color: string, icon: string) {
  return function (text: string, options?: Options) {
    return toastFunction(text, {
      prependIcon: icon,
      cardProps: {
        color,
        ...options?.cardProps,
      },
      ...options,
    })
  }
}

export const toast = Object.assign(toastFunction, {
  success: createToastFunction('success', 'mdi-check-circle'),
  error: createToastFunction('error', 'mdi-cancel'),
  warning: createToastFunction('warning', 'mdi-alert'),
  info: createToastFunction('info', 'mdi-alert-circle'),
  primary: createToastFunction('primary', 'mdi-bell'),
  secondary: createToastFunction('secondary', 'mdi-bell'),
  dismiss(toastId?: number | string) {
    return toastOriginal.dismiss(toastId)
  },
  toastOriginal,
})

export {
  VSonner,
}
