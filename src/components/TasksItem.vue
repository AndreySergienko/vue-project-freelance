<template>
  <div class="card">
    <h2 class="card-title">
      {{task.title}}
      <AppStatus :type="task.status" />
    </h2>
    <p>
      <strong>
        <small>
          {{task.date}}
        </small>
      </strong>
    </p>
    <router-link :to="`/task/${task.id}`">
      <button class="btn primary">
        Посмотреть
      </button>
    </router-link>

    <button class="btn danger" @click="deleteTask(task.id)">Удалить</button>
  </div>
</template>

<script>
import AppStatus from './AppStatus'
import {useStore} from "vuex"
import {removeTask} from "../http/tasksApi"

export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  setup() {
    const store = useStore()

    async function deleteTask(id) {
      store.commit('setIsLoading', true)
      try {
        await removeTask(id)
        store.commit('removeTask', id)

      } catch (e) {
        store.commit('setIsAlert', {
          type: 'error',
          text: e.message
        })
      } finally {
        store.commit('setIsLoading', false)
      }
    }

    return {
      deleteTask
    }
  },
  components: {
    AppStatus
  }
}
</script>

<style></style>
