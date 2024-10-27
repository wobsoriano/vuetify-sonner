import type { ExternalToast, ToastClasses, ToastT, ToasterProps } from 'vue-sonner'
import type { VAvatar, VBtn, VCard, VCardActions, VCardText, VIcon, VProgressLinear } from 'vuetify/components'
import type { ComponentProps } from 'vue-component-type-helpers'

export interface ToastProps {
  text: string
  description?: string
  vertical?: boolean
  cardProps?: ComponentProps<typeof VCard>
  cardTextProps?: ComponentProps<typeof VCardText>
  cardActionsProps?: ComponentProps<typeof VCardActions>
  action?: {
    label?: string
    onClick?: () => void
    buttonProps?: ComponentProps<typeof VBtn>
  }
  prependIcon?: string
  prependIconProps?: ComponentProps<typeof VIcon>
  avatar?: string
  multipleAvatars?: string[]
  avatarProps?: ComponentProps<typeof VAvatar>
  progressBar?: boolean
  reverseProgressBar?: boolean
  progressDuration?: number
  progressBarProps?: ComponentProps<typeof VProgressLinear>
  loading?: boolean
}

export type Position = ToasterProps['position']

export type {
  ExternalToast,
  ToastT,
  ToastClasses,
}
