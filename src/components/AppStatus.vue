<template>
  <span :class="['badge']">{{ renderStatusText }}
  </span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    renderStatusText() {
      switch (this.type) {
        case 'active':
          return 'Активный'
        case 'pending':
          return 'Выполняется'
        case 'cancelled':
          return 'Отменён'
        case 'done':
          return 'Выполнен'
      }
    }
  }
}
</script>
