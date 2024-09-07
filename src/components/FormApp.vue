<template>
  <div>

  </div>
</template>


<!--<template>-->
<!--  <div :class="['text', {'title': isForm}]">-->
<!--    {{ name }}-->
<!--    {{ diversao }}-->
<!--    <div>-->
<!--      <input-->
<!--          v-model="newlatter"-->
<!--          type="radio"-->
<!--          value="sim"-->
<!--      >-->
<!--      SIM-->

<!--      <input-->
<!--          v-model="newlatter"-->
<!--          type="radio"-->
<!--          value="nao"-->

<!--      >-->
<!--      NÃO-->
<!--      <br>-->
<!--      {{ newlatter }}-->
<!--    </div>-->
<!--    <div>-->
<!--      <input-->
<!--          v-model="cores"-->
<!--          type="checkbox"-->
<!--          value="azul"-->
<!--      >-->
<!--      AZUL-->
<!--      <br>-->
<!--      <input-->
<!--          v-model="cores"-->
<!--          type="checkbox"-->
<!--          value="amarelo"-->
<!--      >-->
<!--      AMARELO-->
<!--      <br>-->
<!--      <input-->
<!--          v-model="cores"-->
<!--          type="checkbox"-->
<!--          value="verde"-->
<!--      >-->
<!--      VERDE-->
<!--      <br>-->
<!--      {{ cores }}-->
<!--    </div>-->
<!--  </div>-->
<!--  <div>-->
<!--    <div class="mb-6">-->
<!--      <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default-->
<!--        input</label>-->
<!--      <input type="text" id="default-input"-->
<!--             class="bg-gray-50 border border-amber-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"-->
<!--             v-model="name"-->
<!--      >-->

<!--      <select v-model="diversao">-->
<!--        <option value="">Escolha</option>-->
<!--        <option> Mulher</option>-->
<!--        <option> Programa</option>-->
<!--        <option> Dormir</option>-->
<!--        <option> Passear</option>-->
<!--      </select>-->
<!--    </div>-->
<!--    <br>-->
<!--    <br>-->
<!--    <br>-->

<!--  </div>-->

<!--  <div>-->
<!--    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"-->
<!--      @click="save"-->
<!--    >-->
<!--      Click Me-->
<!--    </button>-->
<!--  </div>-->
<!--</template>-->


<!--<script>-->
<!--export default {-->
<!--  name: 'App',-->
<!--  data() {-->
<!--    return {-->
<!--      name: 'Ana Maria César',-->
<!--      defaultStyle: 'text',-->
<!--      isForm: false,-->
<!--      texto: {'color': 'red', 'font-size': '50px'},-->
<!--      todos: [-->
<!--        {-->
<!--          "userId": 1,-->
<!--          "id": 1,-->
<!--          "title": "delectus aut autem",-->
<!--          "completed": false-->
<!--        },-->
<!--        {-->
<!--          "userId": 1,-->
<!--          "id": 2,-->
<!--          "title": "quis ut nam facilis et officia qui",-->
<!--          "completed": false-->
<!--        },-->
<!--        {-->
<!--          "userId": 1,-->
<!--          "id": 3,-->
<!--          "title": "fugiat veniam minus",-->
<!--          "completed": false-->
<!--        },-->
<!--        {-->
<!--          "userId": 1,-->
<!--          "id": 4,-->
<!--          "title": "et porro tempora",-->
<!--          "completed": true-->
<!--        },-->
<!--        {-->
<!--          "userId": 1,-->
<!--          "id": 5,-->
<!--          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",-->
<!--          "completed": false-->
<!--        }-->
<!--      ],-->
<!--      diversao: '',-->
<!--      newlatter: 'nao',-->
<!--      cores: [],-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    save($evt){-->
<!--        console.log('O click funciona super , super bem mesmo', $evt);-->
<!--    }-->
<!--  }-->

<!--}-->
<!--</script>-->

<!--<style>-->
<!--.text {-->
<!--  font-size: 20px;-->
<!--  background: #2c3e50;-->
<!--  color: aliceblue;-->
<!--  font-weight: bold;-->
<!--}-->

<!--.title {-->
<!--  font-style: italic;-->
<!--  padding: 20px;-->
<!--}-->
<!--</style>-->
