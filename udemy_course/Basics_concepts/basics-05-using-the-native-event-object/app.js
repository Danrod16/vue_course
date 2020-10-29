const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    outputFullname() {
      if (this.name === '') {
        return '';
      }
      return this.name+ ' ' +'Rodriguez'
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  },
  watch: {
    name(value) {

    }
  }

  computed: {
    fullname() {
      if (this.name === '') {
        return '';
      }
      return this.name+ ' ' +'Rodriguez'
    }
  }
});

app.mount('#events');
