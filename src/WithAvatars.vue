<script setup lang="ts">
import { toast } from '@/.'
</script>
<template>
  <div>
    <h2>Avatars</h2>
    <p>You can add avatars to your toast</p>
    <div class="buttons mt-2 mb-8">
      <v-btn @click="toast('This toast has an avatar', {avatar: 'https://avatars.githubusercontent.com/u/739984?v=4'})">
        Avatar
      </v-btn>
      <v-btn @click="toast.primary('This toast has an avatar', {avatar: 'https://avatars.githubusercontent.com/u/739984?v=4', prependIcon: '$vuetify', description: 'And an icon as well'})">
        With Icon
      </v-btn>
      <v-btn @click="toast('This avatar is small and square', {avatar: 'https://avatars.githubusercontent.com/u/739984?v=4', avatarProps: {size: 'small', tile: true}, cardProps: {color: 'deep-purple'}})">
        Avatar Props
      </v-btn>
      <v-btn @click="toast('Some people did a thing', {
          cardProps: {
            color: 'blue'
          },
          multipleAvatars: [
            'https://randomuser.me/api/portraits/women/22.jpg',
            'https://randomuser.me/api/portraits/women/21.jpg',
            'https://randomuser.me/api/portraits/men/21.jpg',
            // 'https://randomuser.me/api/portraits/women/20.jpg',
            // 'https://randomuser.me/api/portraits/men/20.jpg',
            // 'https://avatars.githubusercontent.com/u/739984?v=4',
            // 'https://avatars.githubusercontent.com/u/739984?v=4',
            // 'https://avatars.githubusercontent.com/u/739984?v=4'
          ],
          description: 'Jane + 4 others did a thing',
          action: {
            buttonProps: {
              icon: 'mdi-arrow-right-bold',
            }
          }
        })">
        Multiple Avatars
      </v-btn>
      <v-btn @click="toast('Several people liked your post', {
          cardProps: {
            color: 'blue-grey-darken-4'
          },
          vertical: true,
          multipleAvatars: [
            'https://randomuser.me/api/portraits/women/25.jpg',
            'https://randomuser.me/api/portraits/women/24.jpg',
            'https://randomuser.me/api/portraits/men/20.jpg',
          ],
          description: 'Mary and 4 others liked your post',
          prependIcon: 'mdi-heart',
          prependIconProps: {
            color: 'error'
          },
        })">
        Multiple With Icon
      </v-btn>
    </div>
  </div>
</template>