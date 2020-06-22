<template>
  <v-app>
    <div>
      <HelloWorld />
    </div>
    <div class="nonema">value: {{ model }}</div>
    <input type="text" v-model="name" />
    <v-btn @click="add" depressed small>add</v-btn>

    <ul>
      <li v-for="todo in todos" :key="todo">
        <p>{{ todo }}</p>
        <input type="text" v-model="tmp" />
        <v-btn @click="change(todo)" depressed small>change</v-btn>
      </li>
    </ul>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data: () => ({
    name: "1",
    tmp: "",
    todos: []
  }),
  methods: {
    add() {
      const { name, todos } = this;
      todos.push(name);
      this.name = "";
    },
    change(val) {
      const { todos, tmp } = this;
      const newTodos = todos.filter(item => item !== val);
      newTodos.push(tmp);
      this.todos = newTodos;
      this.tmp = "";
    }
  }
};
</script>

<style scoped>
.nonema {
  border: 1px solid red;
}
</style>
