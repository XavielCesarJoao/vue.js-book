<template>
  <div>
    <input class="border border-green-700"
           type="text"
           v-model="name"
    >
    <br>
    {{ name }}
    <br><br><br>
    <div>
      <label>Faça a sua questão</label>
      <input class="border border-green-700"
             type="text"
             v-model="question" :disabled="loding"
      >
      <br>
      {{ answer }}
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

      question: '',
      answer: 'Questions usually contain a question mark. ;-)',
      loding: false,

      name: 'Ana Maria',
      user: {
        first_name: '',
        last_name: '',
        address: {
          province: 'Benguela',
          street: 'Viana',
        }
      }
    }
  },

  watch: {
    name() {
      this.saveUser();
    },
    user: {
      handler() {
        console.log('Legal pra caramba');
      },
      deep: true,
    },
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes('?')) {
        this.getAnswer();
        console.log(oldQuestion);
      }
    }
  },
  methods: {
    saveUser() {
      console.log('Solicitando Ajax');
      setTimeout(function () {
        console.log('Sucesso', this.name);
      }, 7000)
    },
    async getAnswer() {
      this.loding = true;
      this.answer = 'Thinking . . . ';
      try {
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer
      } catch (error) {
        this.answer = 'Error! Could not reach the APL. ' + error
      } finally {
        this.loding = false;
      }
    }
  },

  computed: {
    fullName() {
      return `${this.user.first_name} ${this.user.last_name}`
    },
  },
  // HOOKS
  beforeCreate() {
    console.log('beforeCreate', this.name)
    console.log('DOM', this.$el)
  },
  created() {
    console.log('created', this.name)
    console.log('DOM', this.$el)
  },

  beforeMount() {
    console.log('beforeMount', this.name)
    console.log('DOM', this.$el)

  },
  mounted() {
    console.log('mounted', this.name)
    console.log('DOM', this.$el)
  },

  beforeUnmount() {
    console.log('beforeUnmount')
    console.log('DOM', this.$el)

  },
  unmounted() {
    console.log('unmounted')
    console.log('DOM', this.$el)
  },
  beforeUpdate() {
  },

  updated() {
  },
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
