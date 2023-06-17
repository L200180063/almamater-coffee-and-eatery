<template>
  <section data-scroll-section style="margin-top: 10rem;">
    <div class="container-md m-auto">
      <div data-scroll data-scroll-speed="2" class="display-2 fw-semibold text-center text-uppercase mb-3">Drinks</div>
      <!-- <div>
        <div class="btn btn-danger" @click="cobaLihat()">coba lihat</div>
      </div> -->
      <ul class="list-group list-unstyled">
        <li data-scroll data-scroll-speed="3" id="DrinkItems" class="px-3 py-2 rounded-2 text-black-50" :style="coffeeList ? 'background: #d7dedf; color: black !important;' : ''">
          <div class="fs-2 text-capitalize" @click="coffeeList = !coffeeList" style="cursor: pointer;">
            coffe 
            <i v-if="coffeeList" class="bi-arrow-up-right-circle"></i>
            <i v-else class="bi-arrow-down-right-circle"></i>
          </div>
          <ul ref="coffeeList" v-if="coffeeList" class="row list-unstyled">
            <li v-for="cf, index in drinks.coffee" :key="cf.id" data-scroll data-scroll-speed="3" :data-scroll-delay="(drinks.coffee.length - index)*0.25" class="col-sm-6 col-md-4 col-xl-3 d-flex flex-column py-3">
              <div id="DrinkItem" class="p-3 rounded-3 position-relative">
                <img :src='"src/assets/"+cf.images' alt="" class="img-fluid m-auto rounded-top-3" style="object-fit: cover;
                max-height: 15rem; min-height: 15rem;
                width: 100%;">
                <div v-if="selectCoffee[index]" class="position-absolute d-flex justify-content-center align-items-center rounded-circle bg-warning fs-1" style="top: 1.5rem; right: 1.5rem; height: 3rem; width: 3rem;"><i class="bi-check"></i></div>
                <div class="fs-3 text-capitalize">{{ cf.name }}</div>
                <div class="text-secondary" style="max-height: 3rem;">
                  <div class="text-black-50" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">{{ cf.ingredients }}</div>
                </div>
                <div class="row mt-2 d-flex justify-content-between align-items-center">
                  <div class="col-auto fs-3 fw-semibold">{{ cf.price*selectQty[index] }} K</div>
                  <div class="col-auto d-flex gap-1 align-items-center">
                    <div class="btn" @click="selectQty[index] > 1 ? selectQty[index] -- : ''">-</div>
                    <div class="">{{ selectQty[index]  }}</div>
                    <div class="btn" @click="selectQty[index] < cf.qty ? selectQty[index] ++ : ''">+</div>
                  </div>
                  <div class="col col-md-12 col-lg-12 col-xxl-12 d-flex justify-content-center gap-2 align-items-center">
                    <div :class="cf.hot ? '' : 'text-black-50'">HOT</div>
                    <div class="toggle-switch-hot-ice" :style="cf.hot && cf.ice ? '' : 'pointer-events: none'">
                      <input class="toggle-input-hot-ice" :id='"toggle-hot-ice-"+cf.id' type="checkbox" v-model="selectIce[index]"/>
                      <label class="toggle-label-hot-ice" :for='"toggle-hot-ice-"+cf.id'></label>
                    </div>
                    <div :class="cf.ice ? '' : 'text-black-50'">ICE</div>
                  </div>
                </div>
                <button v-if="selectCoffee[index]" class="btn btn-outline-success w-100 mt-2" @click="$emit('openToast', true, msg[0]+cf.name, 5), $emit('addOrder', selectQty[index], cf, selectIce[index], index),selectQty[index] = 1, selectIce[index] = false">I want more</button>
                <button v-else class="btn btn-outline-success w-100 mt-2" @click="$emit('openToast', true, msg[0]+cf.name, 5), $emit('addOrder', selectQty[index], cf, selectIce[index], index), selectCoffee[index] = true, selectQty[index] = 1, selectIce[index] = false">I want this</button>
              </div>
            </li>
          </ul>
        </li>
        <li data-scroll data-scroll-speed="3" id="DrinkItems" class="px-3 py-2 rounded-2 text-black-50">
          <div class="fs-2 text-capitalize">manual brew <i class="bi-arrow-down-right-circle"></i></div>
        </li>
        <li data-scroll data-scroll-speed="3" id="DrinkItems" class="px-3 py-2 rounded-2 text-black-50">
          <div class="fs-2 text-capitalize">signature mocktail <i class="bi-arrow-down-right-circle"></i></div>
        </li>
        <li data-scroll data-scroll-speed="3" id="DrinkItems" class="px-3 py-2 rounded-2 text-black-50">
          <div class="fs-2 text-capitalize">others <i class="bi-arrow-down-right-circle"></i></div>
        </li>
      </ul>
      <!-- <div>selectQty : {{ selectQty }}</div> -->
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { myFunc } from "../scripts/my-script";

defineProps({
  _selectCoffee: Object
})
const coffeeList = ref(false)
const { drinks, selectQty, selectIce, selectCoffee, selectCoffeeQty } = myFunc()
const cobaLihat = () => {
  console.log('lihat selectCoffe => ', selectCoffee.value);
}
// const selectQty = ref([]), selectIce = ref([]), selectCoffee = ref([]), selectCoffeeQty = ref([])
// const drinks = ref({
//   coffee : [
//     {
//       id: 0,
//       name: "espresso",
//       images: "espresso@20x.png",
//       ingredients: "Solo, doppio.",
//       price: 15,
//       hot: true,
//       ice: false,
//       qty: 10
//     },
//     {
//       id: 1,
//       name: "americano",
//       images: "americano@20x.png",
//       ingredients: "Espresso, water.",
//       price: 18,
//       hot: true,
//       ice: true,
//       qty: 10
//     },
//     {
//       id: 2,
//       name: "cappuccino",
//       images: "cappuccino@20x.png",
//       ingredients: "Foam, milk, espresso.",
//       price: 25,
//       hot: true,
//       ice: true,
//       qty: 10
//     },
//     {
//       id: 3,
//       name: "latte",
//       images: "latte@20x.png",
//       ingredients: "Milk foam, steamed milk, espresso.",
//       price: 25,
//       hot: true,
//       ice: true,
//       qty: 10
//     }
//   ]
// })
// const addSelectQty = () => {
//   for(var a=0; a<drinks.value.coffee.length ; a++){
//     selectQty.value.push(1)
//     selectCoffee.value.push(false)
//     selectIce.value.push(false)
//     selectCoffeeQty.value.push(0)
//   }
// }
const msg = ref([
  'Successfully added ',
])

// watch(
//   () => orderDetail.value.length, 
//   ( allEqual ) => {
//     if(allEqual === 0) {
//       console.log('Empty order detail');
//       expandOrderList.value = false
//       console.log('Expand list has been closed');
//     }
//   }
// )

// onMounted(() => addSelectQty())
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/bootstrap.scss';
@import '../assets/base.scss';

.menu-lists{
  .menu-items{
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
    background: yellow;
    height: 3rem;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1.5rem;
  }
}

.toggle-switch-hot-ice {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  margin: 10px;
  & .toggle-input-hot-ice {
    display: none;
  }
  & .toggle-label-hot-ice {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 24px;
    background-color: $gray-500;
    border-radius: 34px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  & .toggle-label-hot-ice::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    background-color: #fff;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s;
  }
  & .toggle-input-hot-ice:checked + .toggle-label-hot-ice {
    background-color: $gray-800;
  }
  
  & .toggle-input-hot-ice:checked + .toggle-label-hot-ice::before {
    transform: translateX(16px);
  }
}

#DrinkItems{
  transition: all .5s ease;
  &:hover{
    color: black !important;
    background: $abu-200;
    // background: $gray-200;
  }
}
#DrinkItem{
  background: $abu-100;
  // background: $gray-100;
}
</style>