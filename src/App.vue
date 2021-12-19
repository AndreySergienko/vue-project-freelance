<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view v-if="!$store.getters.getLoading" />

    <div class="flex-center" v-else>
      <app-loader></app-loader>
    </div>

    <div class="alert-block" v-if="$store.getters.getAlert">
      <app-alert @click="$store.commit('closeIsAlert')" />
    </div>
  </div>


  {{ render }}
</template>

<script>
import TheNavbar from './components/TheNavbar'
import AppLoader from './components/AppLoader'
import AppAlert from "./components/AppAlert"
import {useStore} from "vuex"
import {getAllTasks} from "./http/tasksApi"
import {computed} from "vue"

export default {
  setup() {
    const store = useStore()

    const render = computed(async () => {
        store.commit('setIsLoading', true)
        try {
          const response = await getAllTasks()
          if (!response) {
            throw new Error ('Создай задачу, скорее')
          }
          const tasks = Object.keys(response).map(key => {
            return {
              id: key,
              ...response[key]
            }
          })
          store.commit('renderAllTasks', tasks)
        } catch (e) {
          store.commit('setIsAlert', {
            type: 'error',
            text: e.message
          })
        } finally {
          store.commit('setIsLoading', false)
        }
    })



    return {
      render
    }
  },
  components: {
    TheNavbar,
    AppLoader,
    AppAlert
  }
}
</script>

<style>
  .flex-center {
    display: flex;
    justify-content: center;
  }

  .alert-block {
    position: absolute;
    top: 100px;
    left: 0;
  }
</style>
