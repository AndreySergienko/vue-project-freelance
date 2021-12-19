<template>
  <form class="card" @submit.prevent="submitHandler">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="form.title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="form.date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="form.description"></textarea>
    </div>

    <button class="btn primary" :disabled="isDisabled" type="submit">Создать</button>
  </form>
</template>


<script>
import {useStore} from "vuex"
import {computed, reactive} from "vue"
import {createTask} from "../http/tasksApi"
import {useRouter} from "vue-router"
export default {

  setup() {
    const store = useStore()
    const router = useRouter()
    const form = reactive({
      title: '',
      date: null,
      description: ''
    })

    const isDisabled = computed(() => {
      const isValid = Object.values(form).filter(field => field === '')
      if (isValid.length) {
        return true
      } else {
        return false
      }
    })


    async function submitHandler() {
      try {
        const payload = {
          status: 'active',
          title: form.title,
          date: form.date,
          text: form.description
        }

        const response = await createTask(payload)
        if (!response) {
          throw new Error('Ошибка сервера')
        }

        payload.id = response.name

        store.commit('createNewTask', payload)
        for (const field in form) {
          form[field] = ''
        }



        store.commit('setIsAlert', {
          type: 'ok',
          text: 'Задача создана'
        })
      } catch (e) {
        store.commit('setIsAlert', {
          type: 'error',
          text: e.message
        })
      }
      finally {
        router.push('/')
      }
    }


    return {
      form,
      isDisabled,
      submitHandler
    }
  }
}
</script>
