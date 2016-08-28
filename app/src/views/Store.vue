<template lang="html">
  <section class="section">
    <div class="container">
      <h1 class="title">Store</h1>
      <p class="control has-addons">
        <input class="input" type="text" placeholder="Add a task" v-model="newTask">
        <a @click.prevent="onSubmit" class="button is-primary">
          Search
        </a>
      </p>
      <ul>
        <li v-for="task in getTasks">
          <input type="checkbox" :checked="task.done" @click="toggleTodo({ id: task.id, val: !task.done })">
          <label>{{ task.label }}</label>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return { newTask: '' }
  },
  computed: mapGetters([ 'getTasks' ]),
  methods: {
    onSubmit () {
      if (this.newTask.trim()) this.addTodo(this.newTask.trim())
      this.newTask = ''
    },
    ...mapActions([
      'toggleTodo',
      'addTodo',
      'setFilter'
    ])
  }
}
</script>

<style lang="css">
</style>
