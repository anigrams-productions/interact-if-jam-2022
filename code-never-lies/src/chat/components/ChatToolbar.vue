<template>
  <nav class="chat-toolbar box-shadow bg-primary text-light padding-tb-sm padding-lr-md">
    <div class="container row align-items-center">
      <div class="chat-toolbar__time-elapsed flex-equal">
        <template v-if="showTimeElapsed">
          <span class="chat-toolbar__time-elapsed__label">{{ timeElapsedLabel }}: </span>
          <span class="chat-toolbar__time-elapsed__value">{{ formattedTimeElapsed }}</span>
        </template>
      </div>
      <h1 class="chat-toolbar__app-title flex-equal text-center text-lg bold">
        {{ title }}
      </h1>
      <div class="chat-toolbar__settings flex-equal row flex-end align-items-center">
        <button class="chat-toolbar__settings__button flex margin-lr-md" :title="settingsLabel">
          <span class="material-icons">settings</span>
        </button>
        <div class="chat-toolbar__settings__profile position-relative">
          <button class="chat-toolbar__settings__profile__image-container picture-small block" :title="profileLabel">
            <img v-if="profileImage" :src="getProfileImage(profileImage)" alt="profile image" class="full-width full-height border-radius-xs"/>
          </button>
          <div class="chat-toolbar__settings__profile__status status-circle position-absolute" :class="userStatusClass(this.userStatus)"></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import UserMixin from '../services/user';

export default {
  name: 'ChatToolbar',
  mixins: [UserMixin],
  props: {
    showTimeElapsed: {
      type: Boolean,
      default: true,
    },
    minutesElapsed: {
      type: Number,
      default: 1,
    },
    profileImage: {
      type: String,
      default: '',
    },
    profileLabel: {
      type: String,
      default() {
        return this.$t('profile');
      },
    },
    userStatus: {
      type: String,
      default: 'online',
    },
    settingsLabel: {
      type: String,
      default() {
        return this.$t('settings');
      },
    },
    timeElapsedLabel: {
      type: String,
      default() {
        return this.$t('timeElapsed');
      },
    },
    title: {
      type: String,
      default() {
        return this.$t('chatTitle');
      },
    },
  },
  computed: {
    formattedTimeElapsed() {
      const hours = Math.floor(this.minutesElapsed / 60);
      const minutes = this.minutesElapsed % 60;

      let formattedHours = '';
      let formattedMinutes = '';

      if (hours > 0) {
        formattedHours = `${hours} hr${hours === 1 ? '' : 's'}`;
      }

      if (minutes >= 0) {
        formattedMinutes = `${minutes} min${minutes === 1 ? '' : 's'}`;
      }

      return `${formattedHours} ${formattedMinutes}`;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
