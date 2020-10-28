const app = Vue.createApp({
  data() {
    return {
      messageA: 'Hello',
      messageB: 'Goodbye',
      courseGoal: 'Finish the course and learn VUE',
      vueLink: 'https://www.eltacolab.com/'
    };
  },

  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.messageA;
      } else {
        return this.messageB;
      }
    }
  }

});
app.mount('#user-goal');
