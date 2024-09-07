<template>
  <div>
    <h1>
      {{ fullName }}
    </h1>
    <br>
    <br>

    <h1>Todos Em Aberto</h1>
    <div
        v-for="todo in anCompletedTodos"
        v-bind:key="todo.id"
    >
      <div>
        {{ todo.title }}

      </div>
    </div>
    <br>

    <h1>Todos Completadas</h1>
    <div v-for="todo in completedTodos"
         v-bind:key="todo.id"
    >
      <div>
          {{ todo.title }}
      </div>
      <br>
    </div>

    <h1>Todos</h1>
    <div
        v-for="todo in todos"
        :key="todo.id"
    >
      <input
          type="checkbox"
          v-model="todo.completed"
      >
      {{todo.title}}
    </div>
  </div>

</template>

<script>
export default {
  name: 'App',
  components: {

    // TheHeader
  },
  data() {
    return {
      user: {
        first_name: 'Xaviel',
        last_name: 'João',
        age: 21,
      },

      email: '',
      items: [
        {id: 1, label: '10 party hats', purchased: true, highPriority: false},
        {id: 2, label: '2 board games', purchased: true, highPriority: false},
        {id: 3, label: '20 cups', purchased: false, highPriority: true},
      ],
      todos: [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
        }
      ],
    }
  },

  methods: {
    onClick() {
      console.log('Porraz, vue js é massa')
    }
  },

  computed: {
    fullName() {
      return `${this.user.first_name} ${this.user.last_name}`
    },
    anCompletedTodos() {
      return this.todos.filter(todo => !todo.completed);
    },
    completedTodos() {
      return this.todos.filter(todo => todo.completed)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
