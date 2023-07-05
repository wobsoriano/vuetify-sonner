# vuetify-sonner

Stackable toast component for Vuetify.

## Installation

```bash
npm install vuetify-sonner
```

## Usage

Add <VSonner /> to your app, it will be the place where all your toasts will be rendered. After that you can use toast() from anywhere in your app.

```vue
<script setup lang="ts">
import { VSonner, toast } from 'vuetify-sonner'
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
  },
})
```

## License

MIT
