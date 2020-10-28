var card = Vue.createApp({

  data() {
    return {
      name: "Daniel",
      age: 28,
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2Fabp85&psig=AOvVaw0NITu23qnLyKvsySXp62SD&ust=1603979976918000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiKoJ651-wCFQAAAAAdAAAAABAD'
    };
  },

  methods: {
    newAge() {
      return this.age + 5
    },
    randomNumber() {
      return Math.random()
    }
  }

});
card.mount("#assignment");
