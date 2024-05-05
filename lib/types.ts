import type { VNodeProps } from 'vue'
import type { VBtn, VCard, VCardActions, VCardText, VIcon, VAvatar, VProgressLinear } from 'vuetify/components'

type ExtractProps<TComponent> =
  TComponent extends new () => {
    $props: infer P
  }
    ? Omit<P, keyof VNodeProps>
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
  prependIcon?: string
  prependIconProps?: ExtractProps<typeof VIcon>
  avatar?: string
  multipleAvatars?: string[]
  avatarProps?: ExtractProps<typeof VAvatar>
  progressBar?: boolean
  reverseProgressBar?: boolean
  progressDuration?: number
  progressBarProps?: ExtractProps<typeof VProgressLinear>
  loading?: boolean
}
