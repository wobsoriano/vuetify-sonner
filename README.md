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

## Customization

Behind the scenes, the toast component use Vuetify [Cards](https://vuetifyjs.com/en/components/cards/) since the snackbar component has it's own overlay logic.

### Position

You can change the position through the `position` prop on the <VSonner /> component. Default is `bottom-center`.

```vue
<Toaster position="top-center" />
```

### Expanded

Toasts can also be expanded by default through the `expand` prop. You can also change the amount of visible toasts which is 3 by default.

```vue
<Toaster expand :visible-toasts="9" />
```

### Styling a toast

```js
toast('Event has been created', {
  cardProps: {
    color: 'success',
    class: 'my-toast',
  },
})
```

## License

MIT
