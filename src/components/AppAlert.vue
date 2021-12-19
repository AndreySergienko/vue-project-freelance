<template>
  <div class="alert" :class="alert.type">
    <div class="alert__text" >
      {{alert.text}}
    </div>
  </div>
</template>

<script>

import {useStore} from "vuex"

export default {
  setup() {
    const store = useStore()

    return {
      alert: store.getters.getAlert
    }
  }
}
</script>

<style>
  .alert {
    position: relative;
    width: 250px;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #fff;
  }

  .alert.error {
    color: #e53935;
  }

  .alert.ok {
    color: #3eaf7c;
  }

  .alert__text {
    font-size: 16px;
  }
</style>
