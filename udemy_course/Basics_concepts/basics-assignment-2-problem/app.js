const app = Vue.createApp({
  data() {
    return {
      name: "",
      name2: ""
    };
  },
  methods: {
    alert() {
      alert('Alert');
    },
    setName(event) {
      this.name = event.target.value
      console.log(event.target.value)
    },
    setName2(event) {
      this.name2 = event.target.value
      console.log(event.target.value)
    },
  },
});
app.mount('#assignment')
