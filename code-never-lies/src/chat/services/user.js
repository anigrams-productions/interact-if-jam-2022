export default {
  methods: {
    getContactImage(imageName) {
      return require(`../../assets/contacts/${imageName}`);
    },
    getProfileImage(imageName) {
      return require(`../../assets/profile/${imageName}`);
    },
    userStatusClass(userStatus) {
      switch (userStatus) {
        case 'online':
          return 'bg-success';
        case 'idle':
          return 'bg-warning';
        default:
          return 'bg-secondary';
      }
    },
  },
};
