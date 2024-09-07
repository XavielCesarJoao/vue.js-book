<template>
  <div>
    <h1>
      {{ fullName }}
    </h1>
    <br>

    <div class="row">
        <div class="col-4 g-5">
          <div>
            <input class="form-control form-control-sm" type="text"
                   placeholder="Altere o nome"
                   aria-label=".form-control-sm example">
          </div>
        </div>
    </div>
    <button class="btn btn-primary"
    v-on:click="onClick"
    >
      Click
    </button>
  </div>
</template>


<script>
export default {
  name: 'App',
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
    }
  },
  methods: {
    onClick(){
        this.user.first_name = 'Manuel';
    }
  },
  computed: {
    fullName() {
      return `${this.user.first_name} ${this.user.last_name}`;
    }
  }

}
</script>


<style scoped>
.button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  background: blue;
  width: 160px;
}
</style>
