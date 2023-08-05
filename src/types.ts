import type { AllowedComponentProps, VNodeProps } from 'vue'
import type { VBtn, VCard, VCardActions, VCardText } from 'vuetify/components'

type ExtractProps<TComponent> =
  TComponent extends new () => {
    $props: infer P
  }
    ? Omit<P, keyof VNodeProps | keyof AllowedComponentProps>
    : never

export interface ToastProps {
  text: string
  description?: string
  vertical?: boolean
  cardProps?: ExtractProps<typeof VCard>
  cardTextProps?: ExtractProps<typeof VCardText>
  cardActionsProps?: ExtractProps<typeof VCardActions>
  action?: {
    label?: string
    onClick?: () => void
    buttonProps?: ExtractProps<typeof VBtn>
  }
}
