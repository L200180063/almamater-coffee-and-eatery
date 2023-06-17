<template>
  <section id="section-payment" data-scroll-section class="vh-100 d-flex flex-column justify-content-center align-items-center">
    <div class="container">
      <div data-scroll data-scroll-speed="2" class="display-2 fw-semibold text-center text-uppercase mb-3">payments</div>
      <div class="row">
        <div data-scroll data-scroll-speed="3" data-scroll-direction="horizontal" class="col-6 d-flex flex-column justify-content-center align-items-center">
          <div>Total amount</div>
          <div class="display-3">{{ totalAmount }} K</div>
          <div v-if="orderDetail.length !== 0" class="text-capitalize d-flex justify-content-center flex-wrap">
            <div v-for="od, index in orderDetail" :key="index" class="od-name">
              <div v-if="orderQty[index] > 1">{{ od.name + '-' + isDrinkIce[index] + ' (' + orderQty[index] + ')' }}</div>
              <div v-else>{{ od.name + '-' + isDrinkIce[index] }}</div>
            </div>
          </div>
          <div v-else>You haven't select an item yet</div>
        </div>
        <div data-scroll data-scroll-speed="-3" data-scroll-direction="horizontal" class="col-6 d-flex justify-content-center align-items-center">
          <ul class=" list-unstyled">
            <li data-scroll data-scroll-speed="3" data-scroll-delay="0.11">
              <div class="fs-3">Bank</div>
              <div class="text-black-50">BCA (1234 5678)</div>
              <div class="text-black-50">BNI (1234 5678)</div>
              <div class="text-black-50">BRI (1234 5678)</div>
            </li>
            <li data-scroll data-scroll-speed="3" data-scroll-delay="0.09">
              <div class="fs-3">Dana</div>
              <div class="text-black-50">0821 1234 5678</div>
            </li>
            <li data-scroll data-scroll-speed="3" data-scroll-delay="0.07">
              <div class="fs-3">Gopay</div>
              <div class="text-black-50">0821 1234 5678</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  totalAmount: Number,
  orderDetail: Array,
  orderQty: Array,
  isDrinkIce: Array
})
</script>

<style lang="scss" scoped>
.od-name{
  & div{
    margin-right: 5px;
    &::after{
      content: ',';
    }
  }
  &:last-child div{
  margin-right: 0;
    &::after{
      content: '.';
    }
  }
}
</style>