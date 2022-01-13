<template>
  <div class="chat-contact box-shadow padding-lg border-bottom">
    <div class="container row align-items-center">
      <div class="chat-contact__profile position-relative">
        <div class="chat-contact__profile__image-container picture-medium block">
          <img v-if="userImage" :src="getContactImage(userImage)" alt="contact image" class="full-width full-height border-radius-xs"/>
        </div>
        <div class="chat-contact__profile__status status-circle position-absolute" :class="userStatusClass(this.userStatus)"></div>
      </div>
      <h2 class="chat-contact__name bold margin-lr-lg">{{ userName }}</h2>
    </div>
  </div>
</template>

<script>
import UserMixin from '../services/user';

export default {
  name: 'ChatContact',
  mixins: [UserMixin],
  props: {
    userImage: {
      type: String,
      default: '',
    },
    userName: {
      type: String,
      default: '',
    },
    userStatus: {
      type: String,
      default: 'online',
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
