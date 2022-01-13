<template>
  <nav class="chat-toolbar box-shadow bg-primary text-light row align-items-center padding-tb-sm padding-lr-md">
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
        <button class="chat-toolbar__settings__profile__image-container block" :title="profileLabel">
          <img v-if="profileImage" :src="getImgUrl(profileImage)" alt="profile image" class="full-width full-height border-radius-xs"/>
        </button>
        <div class="chat-toolbar__settings__profile__status position-absolute" :class="userStatusClass"></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'ChatToolbar',
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
    userStatusClass() {
      switch (this.userStatus) {
        case 'online':
          return 'bg-success';
        case 'idle':
          return 'bg-warning';
        default:
          return 'bg-secondary';
      }
    },
  },
  methods: {
    getImgUrl(imageName) {
      return require(`../../assets/profile/${imageName}`);
    },
  },
};
</script>

<style lang="scss" scoped>
  .chat-toolbar__settings__profile__image-container {
    height: 36px;
    width: 36px;
  }

  .chat-toolbar__settings__profile__status {
    height: 12px;
    width: 12px;
    border-radius: 12px;
    bottom: -2px;
    right: -2px;
  }
</style>
