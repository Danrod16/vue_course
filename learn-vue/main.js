Vue.component('task-list', {
  template: `
  <div>
    <task v-for="task in tasks">{{task.description}}</task>
  </div>`,

  data() {
    return {
      tasks: [
      {description: 'go to the store', completed: true},
      {description: 'got to the gym', completed: true}
      ]
    };
  }
});




Vue.component('task', {
  template: '<li><slot></slot></li>'
});

new Vue({

  el: '#root-3'

});
