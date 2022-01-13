<template>
  <div class="chat-layout">
    <header class="chat-header">
      <chat-toolbar :minutes-elapsed="minutesElapsed" profile-image="green_circles.png"/>
    </header>

    <router-view/>
  </div>
</template>

<script>
import ChatToolbar from '../components/ChatToolbar.vue';

export default {
  name: 'ChatLayout',
  components: {
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
