<template>
  <!-- Modal Body -->
  <!-- if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard -->
  <!-- <div class="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true"></div> -->
  <div class="modal fade" id="modalId" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalTitleId">Placed orders</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Add this item to my order list?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" @click="confirmBtn = true">Yes Please</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const confirmBtn = ref(false)
</script>

<style>

</style>