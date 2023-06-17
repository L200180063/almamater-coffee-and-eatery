<template>
  <section data-scroll-section>
    <div class="container-md m-auto">
      <div data-scroll data-scroll-speed="2" class="display-2 fw-semibold text-center text-uppercase mb-3">Meals</div>
      <ul class="list-group list-unstyled">
        <li data-scroll data-scroll-speed="3" id="DrinkItems" class="px-3 py-2 rounded-2 text-black-50" :style="coffeeList ? 'background: #d7dedf; color: black !important;' : ''">
          <div class="fs-2 text-capitalize" @click="coffeeList = !coffeeList" style="cursor: pointer;">
            salad 
            <i v-if="coffeeList" class="bi-arrow-up-right-circle"></i>
            <i v-else class="bi-arrow-down-right-circle"></i>
          </div>
          <ul ref="coffeeList" v-if="coffeeList" class="row list-unstyled">
            <li v-for="cf, index in drinks.coffee" :key="cf.id" data-scroll data-scroll-speed="3" :data-scroll-delay="(drinks.coffee.length - index)*0.25" class="col col-xl-3 d-flex flex-column py-3">
              <div id="DrinkItem" class="p-3 rounded-3 position-relative">
                <img :src='"src/assets/"+cf.images' alt="" class="img-fluid m-auto rounded-top-3" style="object-fit: cover;
                max-height: 15rem; min-height: 15rem;
                width: 100%;">
                <div v-if="selectCoffee[index]" class="position-absolute d-flex justify-content-center align-items-center rounded-circle bg-warning fs-1" style="top: 1.5rem; right: 1.5rem; height: 3rem; width: 3rem;"><i class="bi-check"></i></div>
                <div class="fs-3 text-capitalize">{{ cf.name }}</div>
                <div class="text-secondary" style="min-height: 3rem; max-height: 3rem;">
                  <div class="text-black-50" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">{{ cf.ingredients }}</div>
                </div>
                <div class="mt-2 d-flex justify-content-between align-items-center">
                  <div class="fs-3 fw-semibold">{{ cf.price*selectQty[index] }} K</div>
                  <div class="btn btn-group">
                    <div class="btn" @click="selectQty[index] > 1 ? selectQty[index] -- : ''">-</div>
                    <div class="btn">{{ selectQty[index]  }}</div>
                    <div class="btn" @click="selectQty[index] < cf.qty ? selectQty[index] ++ : ''">+</div>
                  </div>
                </div>
                <button v-if="selectCoffee[index]" class="btn btn-outline-success w-100 mt-2" @click="selectQty[index] = 1">I want more</button>
                <button v-else class="btn btn-outline-success w-100 mt-2" @click="selectCoffee[index] = true, selectQty[index] = 1">I want this</button>
              </div>
            </li>
            <!-- <li data-scroll data-scroll-speed="3" data-scroll-delay="0.13" class="col col-xl-3 d-flex flex-column py-3">
              <div id="DrinkItem" class="p-3 rounded-3 position-relative">
                <img src="../assets/salad-from-tomatoes-cucumber-red-onions-lettuce-leaves-healthy-summer-vitamin-menu-vegan-vegetable-food-vegetarian-dinner-table.png" alt="" class="img-fluid m-auto rounded-top-3" style="object-fit: cover;
                max-height: 15rem; min-height: 15rem;
                width: 100%;">
                <div class="fs-3">Nicoise Salad</div>
                <div class="text-secondary" style="min-height: 3rem; max-height: 3rem;">
                  <div style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">Tomatoes, cucumber, red onions, lettuce leaves.</div>
                </div>
                <div class="mt-2 d-flex justify-content-between align-items-center">
                  <div class="fs-3 fw-semibold">35 K</div>
                  <div class="btn btn-group">
                    <div class="btn">-</div>
                    <div class="btn">1</div>
                    <div class="btn">+</div>
                  </div>
                </div>
                <button class="btn btn-outline-success w-100 mt-2">I want this</button>
              </div>
            </li>
            <li data-scroll data-scroll-speed="3" data-scroll-delay="0.11" class="col col-xl-3 d-flex flex-column py-3">
              <div id="DrinkItem" class="p-3 rounded-3 position-relative">
                <div>
                  <img src="../assets/front-view-vegan-salad-with-fresh-ingredients-plate-pepper-black-cutting-board.png" alt="" class="img-fluid m-auto rounded-top-3" style="object-fit: cover;
                  max-height: 15rem; min-height: 15rem;
                  width: 100%;">
                </div>
                <div class="position-absolute d-flex justify-content-center align-items-center rounded-circle bg-warning fs-1" style="top: 1.5rem; right: 1.5rem; height: 3rem; width: 3rem;"><i class="bi-check"></i></div>
                <div class="fs-3">Caesar Salad</div>
                <div class="text-secondary" style="min-height: 3rem; max-height: 3rem;">
                  <div style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">Tomatoes, cucumber, red onions, lettuce leaves.</div>
                </div>
                <div class="mt-2 d-flex justify-content-between align-items-center">
                  <div class="fs-3 fw-semibold">30 K</div>
                  <div class="btn btn-group">
                    <div class="btn">-</div>
                    <div class="btn">1</div>
                    <div class="btn">+</div>
                  </div>
                </div>
                <button class="btn btn-outline-success w-100 mt-2">I want more</button>
              </div>
            </li> -->
          </ul>
        </li>
        <li data-scroll data-scroll-speed="3" id="DrinkItems" class="px-3 py-2 rounded-2 text-black-50">
          <div class="fs-2 text-capitalize">all day dining <i class="bi-arrow-down-right-circle"></i></div>
        </li>
        <li data-scroll data-scroll-speed="3" id="DrinkItems" class="px-3 py-2 rounded-2 text-black-50">
          <div class="fs-2 text-capitalize">indonesian <i class="bi-arrow-down-right-circle"></i></div>
        </li>
        <li data-scroll data-scroll-speed="3" id="DrinkItems" class="px-3 py-2 rounded-2 text-black-50">
          <div class="fs-2 text-capitalize">asian <i class="bi-arrow-down-right-circle"></i></div>
        </li>
      </ul>
      <!-- <div>selectQty : {{ selectQty }}</div> -->
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";

const selectQty = ref([])
const selectIce = ref([])
const selectCoffee = ref([])
const coffeeList = ref(false)
const drinks = ref({
  coffee : [
    {
      id: 1,
      name: "Nicoise Salad",
      images: "salad-from-tomatoes-cucumber-red-onions-lettuce-leaves-healthy-summer-vitamin-menu-vegan-vegetable-food-vegetarian-dinner-table.png",
      ingredients: "Tomatoes, cucumber, red onions, lettuce leaves.",
      price: 35,
      qty: 10
    },
    {
      id: 2,
      name: "Caesar Salad",
      images: "front-view-vegan-salad-with-fresh-ingredients-plate-pepper-black-cutting-board.png",
      ingredients: "Tomatoes, cucumber, red onions, lettuce leaves.",
      price: 30,
      qty: 10
    },
  ]
})
const addSelectQty = () => {
  for(var a=0; a<drinks.value.coffee.length ; a++){
    selectQty.value.push(1)
    selectCoffee.value.push(false)
    selectIce.value.push(false)
  }
}

onMounted(() => addSelectQty())
</script>

<style lang="scss">
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