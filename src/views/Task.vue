<template>
  <div class="card" v-if="task">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ task.date }}</p>
    <p><strong>Описание</strong>: {{ task.text }}</p>
    <div>
      <button class="btn" @click="changeStatusTask">Взять в работу</button>
      <button class="btn primary" @click="changeStatusTask">Завершить</button>
      <button class="btn danger" @click="changeStatusTask">Отменить</button>
    </div>
  </div>
  <NotFound v-else :id="paramsId"/>
</template>

<script>
import AppStatus from '../components/AppStatus'
import NotFound from "../components/NotFound"
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {changeStateTask} from "../http/tasksApi"

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const paramsId = router.currentRoute.value.params.id
    const task = store.getters.tasks.find(task => task.id === paramsId) || false


    async function changeStatusTask(e) {
      store.commit('setIsLoading', true)
      try {
        let status
        switch (e.target.innerHTML) {
          case 'Взять в работу':
            status = 'pending'
            break
          case 'Завершить':
            status = 'done'
            break
          case 'Отменить':
            status = 'cancelled'
            break
        }
        store.commit('changeStateTask', {id: paramsId, status})
        const tasks = store.getters.tasks.filter(task => task.id === paramsId)
        await changeStateTask(paramsId, ...tasks)

      } catch (e) {
        store.commit('setIsAlert', {
          type: 'error',
          text: e.message
        })
      } finally {
        store.commit('setIsLoading', false)
        router.push('/')
      }
    }


    return {
      task,
      paramsId,
      changeStatusTask,
    }
  },
  components: {AppStatus, NotFound}
}
</script>

<style scoped>

</style>
