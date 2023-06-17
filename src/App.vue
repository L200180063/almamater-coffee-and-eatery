<template>
  <main ref="dsc" data-scroll-container>
    <toast-notification :qty="qty" :que-toast="queToast" @close-toast="handleCloseToast"/>
    <section-1 data-scroll-section />
    <section-2 data-scroll-section />
    <section-galery data-scroll-section />
    <get-in-touch id="section-get-in-touch" />
    <section-3 data-scroll-section class="vh-100" />
    <section-4 id="section-drinks" data-scroll-section class="min-vh-100 d-flex" @open-toast="handleOpenToast" @add-order="handleAddOrder" />
    <meals-menu id="section-meals" data-scroll-section class="min-vh-100 d-flex" />
    <section-payment id="section-payments" data-scroll-section :total-amount="totalAmount" :order-detail="orderDetail" :order-qty="orderQty" :is-drink-ice="isDrinkIce" />
    
    <div v-if="orderDetail.length !== 0" id="myOrderList" class="bg-white shadow border-1">
      <div class="row d-flex justify-content-between align-items-center">
        <div class="col-auto text-black-50">My orders list</div>
        <div class="col-auto">
          <button class="btn btn-light" @click="expandOrderList = !expandOrderList"><i class="bi-cup"></i> {{ orderDetail.length }} items - {{ totalAmount }} K <i :class="expandOrderList ? 'bi-caret-down' : 'bi-caret-up'"></i></button>
        </div>
        <div class="col-auto">
          <button class="btn btn-outline-success text-uppercase">pay now<i class="bi-arrow-right-short"></i></button>
        </div>
      </div>
      <div v-if="expandOrderList" class="mt-4">
        <div class="small text-black-50 pb-3">Sunday, 05-28-2023, 10.14 WIB</div>
        <div class="row text-black-50 pb-2">
          <div class="col-1">No</div>
          <div class="col">Item</div>
          <div class="col-1 text-end">Qty</div>
          <div class="col-2 text-end">Price</div>
          <div class="col-2 text-end">Total</div>
          <div class="col-2 text-center">DEL</div>
        </div>
        <div v-for="od, index in orderDetail" :key="index" class="row d-flex align-items-center">
          <div class="col-1">{{ index+1 }}. </div>
          <div class="col text-capitalize">{{ od.name }}<span>{{ '-' + isDrinkIce[index] }}</span></div>
          <div class="col-1 text-end">{{ orderQty[index] }}</div>
          <div class="col-2 text-end">{{ od.price }} K</div>
          <div class="col-2 text-end">{{ orderQty[index]*od.price }} K</div>
          <div class="col-2 text-center"><i class="btn bi-x-circle" @click="removeFromOrder(index, od.id)"></i></div>
        </div>
        <hr>
        <div class="row d-flex align-items-center">
          <div class="col text-center">SUB TOTAL</div>
          <div class="col-4 fs-3">{{ totalAmount }} K</div>
        </div>
      </div>
    </div>
    <!-- <div>
      <div class="btn btn-primary" @click="ubahCoba()">ubah coba</div>
    </div> -->
    <reach-us data-scroll-section />
    <section-footer data-scroll-section />
  </main>
</template>

<script setup>
import LocomotiveScroll from 'locomotive-scroll';
import { ref, onMounted, watch } from 'vue';
import Section1 from './components/Section1.vue';
import Section2 from './components/Section2.vue';
import Section3 from './components/Section3.vue';
import Section4 from './components/Section4.vue';
import GetInTouch from './components/GetInTouch.vue';
import MealsMenu from './components/MealsMenu.vue';
import SectionFooter from './components/SectionFooter.vue';
import ReachUs from './components/ReachUs.vue';
import SectionGalery from './components/SectionGalery.vue';
import SectionPayment from './components/SectionPayment.vue';
import ToastNotification from './components/ToastNotification.vue';
import { myFunc } from './scripts/my-script';

const dsc = ref(null)

const totalAmount = ref(0), orderDetail = ref([]), orderQty = ref([]), isDrinkIce = ref([]), indexOrder = ref(0)
const handleAddOrder = (a, b, c, d) => {
  totalAmount.value += (a*b.price)
  orderDetail.value.push(b)
  indexOrder.value ++
  orderQty.value.push(a)
  c === true ? isDrinkIce.value.push('ICE') : isDrinkIce.value.push('HOT')
  // console.log('_selectCoffee.index -> start = ', _selectCoffee.value.index);
  _selectCoffee.value.isSelect.push(true)
  // console.log('_selectCoffee.isSelect -> start = ', _selectCoffee.value.isSelect);
  if (_selectCoffee.value.qty.length == 0){
    _selectCoffee.value.index.push(d)
    _selectCoffee.value.qty.push({
      id: d,
      qty: 1,
      name: b.name
    })
    // console.log('d = ', d);
  }
  else {
    var sudahAda = null
    var indexKe = null
    for (let _a=0 ; _a<_selectCoffee.value.index.length ; _a++){
      var _sudahAda = null
      var _indexKe = null
      if (_selectCoffee.value.index[_a] === d){
        _sudahAda = true
        sudahAda = _sudahAda
        _indexKe = _a
        indexKe = _indexKe
        break
      }
      else if (_selectCoffee.value.index[_a] !== d){
        _sudahAda = false
        sudahAda = _sudahAda
      }
    }
    // console.log('sudahAda ->', sudahAda);
    if (sudahAda) {
      _selectCoffee.value.qty[indexKe].qty++
      // console.log('indexKe = ', indexKe);
    }
    else if (!sudahAda){
      _selectCoffee.value.qty.push({
        id: d,
        qty: 1,
        name: b.name
      })
      _selectCoffee.value.index.push(d)
    }
  }
  // console.log('_selectCoffee.qty -> start = ', _selectCoffee.value.qty);
}
const _selectCoffee = ref({
  index: [],
  isSelect: [],
  qty: []
})
const removeFromOrder = (a,b) => {
  totalAmount.value -= (orderDetail.value[a].price*orderQty.value[a])
  orderDetail.value.splice(a,1)
  orderQty.value.splice(a,1)
  isDrinkIce.value.splice(a,1)
  _selectCoffee.value.isSelect[a] = false
  for (let a=0 ; a<_selectCoffee.value.qty.length ; a++){
    if (_selectCoffee.value.qty[a].id === b){
      _selectCoffee.value.qty[a].qty--
    }
  }
  console.log('_selectCoffee.qty -> end = ', _selectCoffee.value.qty);
}
const { selectCoffee } = myFunc()
const ubahCoba = () => {
  console.log('sebelum ubah -> ', selectCoffee.value);
  selectCoffee.value[0] = false
  console.log('coba ubah -> ', selectCoffee.value);
}
watch(
  () => {
    for (let a=0 ; a<selectCoffee.value.length ; a++){
      if (selectCoffee.value[a] === true)
      console.log('update selectCoffee --> ', selectCoffee.value); 
    }
  }
)
watch(
  () => {
    for (let a=0 ; a<_selectCoffee.value.qty.length ; a++){
      if (_selectCoffee.value.qty[a].qty === 0){
        selectCoffee.value[1] = false
        _selectCoffee.value.qty.splice(a,1)
        _selectCoffee.value.index.splice(a,1)
        console.log('selectCoffee -> ', selectCoffee.value);
      }
    }
  }
)
watch(
  () => orderDetail.value.length, 
  ( allEqual ) => {
    if(allEqual === 0) {
      console.log('Empty order detail');
      expandOrderList.value = false
      console.log('Expand list has been closed');
    }
  }
)

const qty = ref(0)
const queToast = ref({
  id: [],
  isToasts: [],
  msgs: [],
  durations: [],
})
const handleOpenToast = (a, b, c) => {
  queToast.value.isToasts.push(a)
  queToast.value.msgs.push(b)
  queToast.value.durations.push(c)
  qty.value ++
  queToast.value.id.push(qty.value)
}
const handleCloseToast = (a, b) => {
  qty.value = queToast.value.id[queToast.value.id.length-1]
  queToast.value.id.splice(b,1,null)
  queToast.value.isToasts.splice(b,1,null)
  queToast.value.msgs.splice(b,1,null)
  queToast.value.durations.splice(b,1,null)
}

function allAreEqual(array) {
  const result = array.every(element => {
    if (element === array[0]) {
      return true;
    }
  });
  return result;
}
watch(
  () => allAreEqual(queToast.value.id), 
  ( allEqual ) => {
    if(allEqual === true) {
      console.log('All toasts have been displayed successfully');
      qty.value = 0
      queToast.value.id = []
      queToast.value.isToasts = []
      queToast.value.msgs = []
      queToast.value.durations = []
      console.log('Queque has been restored');
    }
  }
)

const expandOrderList = ref(false)

onMounted(
  document.onreadystatechange = () => {
    if (document.readyState == "complete") {
      console.log('Page completed with image and files!')
      const scroll = new LocomotiveScroll({
        el: dsc.value || document.querySelector('[data-scroll-container]'),
        smooth: true
      });
    }
  }
)
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/bootstrap.scss';
@import './assets/base.scss';

main{
  background-color: $abu-100;
  background-image: url('assets/grunge-wall.png');
}
#section{
  &-drinks, &-meals{
    background-color: $abu-300;
  }
}

#myOrderList{
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 21;
  padding: 1rem;
  transition: all .5s ease;
}
@include media-breakpoint-up(md) {
  #myOrderList{
    border-top-left-radius: 5px;
  }
}
@include media-breakpoint-down(md) { 
  #myOrderList{
    left: 0;
    width: 100%;
  }
}
</style>