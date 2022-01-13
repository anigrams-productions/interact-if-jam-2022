import Vue from 'vue';
import VueRouter from 'vue-router';
import ChatLayout from '../chat/layouts/ChatLayout.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: ChatLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
