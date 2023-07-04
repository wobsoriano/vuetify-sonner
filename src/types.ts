import type { AllowedComponentProps, VNodeProps } from 'vue'
import type { VBtn } from 'vuetify/components'

type ExtractProps<TComponent> =
  TComponent extends new () => {
    $props: infer P
  }
    ? Omit<P, keyof VNodeProps | keyof AllowedComponentProps>
    : never

export interface ToastProps {
  text: string
  showCloseButton?: boolean
  closeButtonProps?: ExtractProps<typeof VBtn>
  cardProps?: ExtractProps<typeof VBtn>
  cardTextProps?: ExtractProps<typeof VBtn>
  cardActionProps?: ExtractProps<typeof VBtn>
  closeButtonText?: string
}
