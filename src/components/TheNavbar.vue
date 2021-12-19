<template>
  <nav class="navbar">
    <h3>
      Freelance
    </h3>

    <ul class="navbar-menu">
      <li>
        <router-link :to="{name: 'main'}" @click="close">Все задачи</router-link>
      </li>
      <li>
        <router-link :to="{name: 'new'}" @click="close">Создать</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import {useStore} from "vuex"

export default {
  setup() {
    const store = useStore()
    function close() {
      store.commit('closeIsAlert')
    }
    return {
      close
    }
  }
}
</script>

<style scoped>

</style>
