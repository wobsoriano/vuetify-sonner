https://github.com/wobsoriano/vuetify-sonner/assets/13049130/3dc381ec-95b2-4bd1-9df6-624210e9d9f4

# vuetify-sonner

Stackable toast component for Vuetify.

> [!IMPORTANT]
> Snackbars should appear one at a time. This component breaks the Material [spec](https://m2.material.io/components/snackbars#behavior).

## Installation

```bash
npm install vuetify-sonner
```

## Usage

Add `<VSonner />` to your app, it will be the place where all your toasts will be rendered. After that you can use `toast()` from anywhere in your app.

```vue
<script setup lang="ts">
import { VSonner, toast } from 'vuetify-sonner'
// Required for snackbar background and text color
import 'vuetify-sonner/style.css'
</script>

<template>
  <VApp>
    <VSonner />
    <VBtn @click="toast('My first toast')">
      Give me a toast
    </VBtn>
  </VApp>
</template>
```
### Default

Most basic toast. You can customize it by passing an options object as the second argument.

```js
toast('My first toast')
```

With description:

```js
toast('Event has been created', {
  description: 'Monday, January 3rd at 6:00pm',
})
```

### Action

Renders a button.

```js
toast('Event has been created', {
  action: {
    label: 'Undo',
    onClick: () => console.log('Undo'),
    buttonProps: {
      // v-btn props
    }
  },
})
```

## Customization

Behind the scenes, the toast component use Vuetify [Cards](https://vuetifyjs.com/en/components/cards/) since the snackbar component has it's own overlay logic.

### Position

You can change the position through the `position` prop on the <VSonner /> component. Default is `bottom-center`.

```vue
<VSonner position="top-center" />
```

### Expanded

Toasts can also be expanded by default through the `expand` prop. You can also change the amount of visible toasts which is 3 by default.

```vue
<VSonner expand :visible-toasts="9" />
```

### Styling a toast

```js
toast('Event has been created', {
  cardProps: {
    color: 'success',
    class: 'my-toast',
  },
  cardTextProps: {
    // v-card-text props
  },
  cardActionsProps: {
    // v-card-actions props
  }
})
```

### Programmatically remove toast

To remove a toast programmatically use `toast.dismiss(id)`.

```js
const toastId = toast('Event has been created')

toast.dismiss(toastId)
```

You can also use the dismiss method without the id to dismiss all toasts.

```js
// Removes all toasts

toast.dismiss()
```

### Duration

You can change the duration of each toast by using the `duration` property, or change the duration of all toasts like this:

```vue
<VSonner :duration="10000" />
```

```js
toast('Event has been created', {
  duration: 10000,
})

// Persisent toast
toast('Event has been created', {
  duration: Number.POSITIVE_INFINITY,
})
```

### On Close Callback

You can pass `onDismiss` and `onAutoClose` callbacks. `onDismiss` gets fired when either the close button gets clicked or the toast is swiped. `onAutoClose` fires when the toast disappears automatically after it's timeout (`duration` prop).

```js
toast('Event has been created', {
  onDismiss: t => console.log(`Toast with id ${t.id} has been dismissed`),
  onAutoClose: t => console.log(`Toast with id ${t.id} has been closed automatically`),
})
```

### Keyboard focus

You can focus on the toast area by pressing ⌥/alt + T. You can override it by providing an array of event.code values for each key.

```vue
<VSonner :hotkey="['KeyC']" />
```

## Nuxt Usage

```ts
export default defineNuxtConfig({
  build: {
    transpile: ['vue-sonner']
  }
})
```

```vue
<script setup lang="ts">
import { VSonner, toast } from 'vuetify-sonner'
</script>

<template>
  <VApp>
    <ClientOnly>
      <VSonner />
    </ClientOnly>
    <VBtn @click="toast('My first toast')">
      Give me a toast
    </VBtn>
  </VApp>
</template>
```

## License

MIT
