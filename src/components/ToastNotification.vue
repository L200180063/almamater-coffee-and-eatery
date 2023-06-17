<template>
  <div v-if="qty !== 0" class="v-toast position-fixed d-flex flex-column-reverse top-0 p-2 overflow-hidden">
    <div v-for="qts, i in queToast.id.length" :key="i" class="v-toast-item d-inline-flex align-items-center align-self-center bg-success rounded-1 text-white my-2">
      <toast-queque v-if="queToast.isToasts[qts-1]" :id="queToast.id[qts-1]" :index="i" :queque-toast="queToast.quequeToasts" :msg="queToast.msgs[qts-1]" :duration="queToast.durations[qts-1]" @close-toast="handleCloseToast" />
    </div>
  </div>
  <!-- <div>queToast: {{ queToast.isToasts[0] }}</div> -->
</template>

<script setup>
import { defineAsyncComponent, onMounted, ref } from "vue"
const ToastQueque = defineAsyncComponent(() => import('./ToastQueque.vue'))

const props = defineProps({
  queToast: Object,
  qty: Number
})
const emit = defineEmits({
  unvalidatedEvent: null, // if we want an event without validation
  closeToast: (s) => {
    return true
  },
})

const handleCloseToast = (a, b) => {
  emit('closeToast', a, b)
}

</script>

<style lang="scss" scoped>

.v-toast {
  z-index: 1052;
  left: 0;
  right: 0;
  pointer-events: none;
  &-item {
    min-height: 3em;
    opacity: .92;
    animation-duration: 150ms;
    box-shadow: 0 1px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.04);
    pointer-events: auto;
    cursor: pointer;
  }
}
</style>