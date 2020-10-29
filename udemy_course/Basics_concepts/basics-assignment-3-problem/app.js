const app = Vue.createApp({
  data() {
    return {
      result: 0
    }
  },
  watch: {
    showResults() {
      const that = this
      setTimeout(function() {
        that.result = 0
      }, 5000);
      console.log(this.result)
    },
  },
  computed: {
    showResults() {
    // const this = that
      if (this.result < 37) {
        return "Not there yet!";
      } else if (this.result > 37){
        return  "Too much!";
      } else {
        return this.result
      }
    },
  },

  methods: {
      addNumber(num) {
        this.result += num
      }
  }
});

app.mount("#assignment")
