const app = Vue.createApp({
  data () {
    return{
      userInput: '',
      styling: 'visible',
      inline: ''
    }
  },

  methods: {
    hidePragraph () {
      if (this.styling === "hidden") {
        this.styling = "visible"
      } else if (this.styling === "visible") {
        this.styling = "hidden"
      }
      console.log(this.styling)
    }
  },

  computed: {

  }
});
app.mount('#assignment')
