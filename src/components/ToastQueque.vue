<template>
  <div class="d-flex gap-3 justify-content-center align-items-center px-3 py-2 m-auto">
    <div class="text-capitalize">{{ msg }}</div>
    <div>{{ countDown }} s</div>
    <i class="bi-x-circle" @click="$emit('closeToast', false, index)"></i>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"

const props = defineProps({
  msg: String,
  duration: Number,
  quequeToast: Array,
  index: Number,
  id: Number
})
const emit = defineEmits({
  unvalidatedEvent: null, // if we want an event without validation
  closeToast: (s) => {
    return true
  },
})
const countDown = ref(0)
function countDownTimer(a) {
  if (a > 0 || countDown.value > 0) {
    countDown.value = a
    setTimeout(() => {
      countDown.value -= 1
      return countDownTimer(countDown.value);
    }, 1000)
  }
}


onMounted(
  document.onreadystatechange = async() => {
    if (document.readyState == "complete") {
      countDownTimer(props.duration)
      setTimeout(() => {
        emit('closeToast', false, props.index)
      }, 1000*props.duration)
    }
  }
)
</script>

<style lang="scss" scoped>

.v-toast-item {
  min-height: 3em;
  opacity: .92;
  animation-duration: 150ms;
  box-shadow: 0 1px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.04);
  pointer-events: auto;
  cursor: pointer;
}
</style>