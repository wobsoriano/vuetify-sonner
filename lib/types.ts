import type { CSSProperties, Component, VNodeProps } from 'vue'
import type { VAvatar, VBtn, VCard, VCardActions, VCardText, VIcon, VProgressLinear } from 'vuetify/components'

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

// TODO: Starting with vue-sonner v1.1.1, all types below are no longer exported. We need to open a PR on their side to fix this.

type ToastTypes = 'normal' | 'action' | 'success' | 'info' | 'warning' | 'error' | 'loading' | 'default'

type PromiseT<Data = any> = Promise<Data> | (() => Promise<Data>)

export type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'

interface ToastClassnames {
  toast?: string
  title?: string
  description?: string
  loader?: string
  closeButton?: string
  cancelButton?: string
  actionButton?: string
  normal?: string
  action?: string
  success?: string
  error?: string
  info?: string
  warning?: string
  loading?: string
  default?: string
}

export interface ToastT<T extends Component = Component> {
  id: number | string
  title?: string | Component
  type?: ToastTypes
  icon?: Component
  component?: T
  componentProps?: any
  invert?: boolean
  closeButton?: boolean
  dismissible?: boolean
  description?: string | Component
  duration?: number
  delete?: boolean
  important?: boolean
  action?: {
    label: string | Component
    onClick: (event: MouseEvent) => void
  }
  cancel?: {
    label: string | Component
    onClick?: () => void
  }
  onDismiss?: (toast: ToastT) => void
  onAutoClose?: (toast: ToastT) => void
  promise?: PromiseT
  cancelButtonStyle?: CSSProperties
  actionButtonStyle?: CSSProperties
  style?: CSSProperties
  unstyled?: boolean
  class?: any
  classes?: ToastClassnames
  descriptionClass?: string
  position?: Position
}

export type ExternalToast<T extends Component = Component> = Omit<ToastT<T>, 'id' | 'type' | 'title' | 'promise' | 'delete'> & {
  id?: number | string
}
