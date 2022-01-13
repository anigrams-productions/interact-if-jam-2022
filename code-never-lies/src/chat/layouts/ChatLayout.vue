<template>
  <div class="chat-layout full-vh-height column">
    <header class="chat-header">
      <chat-toolbar :minutes-elapsed="minutesElapsed" profile-image="green_circles.png"/>
      <chat-contact user-image="susan.jpg" user-name="Susan Reynolds"/>
    </header>

    <main class="chat-window scroll-vertical">
      <router-view/>
    </main>
  </div>
</template>

<script>
import ChatToolbar from '../components/ChatToolbar.vue';
import ChatContact from '../components/ChatContact.vue';

export default {
  name: 'ChatLayout',
  components: {
    ChatContact,
    ChatToolbar,
  },
  data() {
    return {
      timer: null,
      minutesElapsed: 0,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.minutesElapsed += 1;
    }, 60000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="scss">
  @import "@/chat/assets/common.scss";
</style>
