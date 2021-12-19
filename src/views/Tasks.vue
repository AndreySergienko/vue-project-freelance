<template>
  <h1 class="text-white center" v-if="!tasks.length">Задач пока нет</h1>
  <div v-else>
    <h3 class="text-white">Всего активных задач: {{ activeTasks }}</h3>
    <app-filter />
    <tasks-item
      v-if="!filterTasks"
      v-for="task in tasks"
      :task="task"
    ></tasks-item>

    <div v-else>
      <tasks-item
        v-if="filterTasks.length > 0"
        v-for="task in filterTasks"
        :task="task"
      >
      </tasks-item>

      <div v-else>
        <h1 class="white-text">Пока ничего нет</h1>
      </div>
    </div>
  </div>
</template>

<script>
import TasksItem from "../components/TasksItem"
import AppFilter from "../components/AppFilter"
import {useStore} from "vuex"
import {computed} from "vue"

export default {
  setup() {
    const store = useStore()

    const activeTasks = computed(() => {
      return store.getters.mathActiveTask
    })

    const filterTasks = computed(() => {
      return store.getters.filterTasks
    })

    return {
      tasks: store.getters.tasks,
      filterTasks,
      activeTasks,
    }
  },

  components: {TasksItem, AppFilter}
}
</script>

<style>
 .white-text {
   text-align: center;
   color: #fff;
 }
</style>
