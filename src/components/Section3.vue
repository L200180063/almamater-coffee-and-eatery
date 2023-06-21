<template>
  <section data-scroll-section>
    <div class="slide-scroll overflow-hidden">
      <div class="line-r">
        <ul class="food pb-1" data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">
          <li>nicoise salad</li>
          <li>caesar salad</li>
          <li>the benedict</li>
          <li>chicken parmigiana</li>
          <!-- <li>mushroom bruschetta</li>
          <li>asem asem iga</li>
          <li>iga bakar bumbu penyet</li>
          <li>ayam cabe kemiri</li> -->
          <!-- <li>nasi goreng almamater</li>
          <li>ayam bumbu hitam</li>
          <li>nasi goreng padang</li>
          <li>ayam bakar rujak</li> -->
        </ul>
      </div>
      <div class="line-l">
        <ul class="coffee pb-1" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6">
          <!-- <li>Tropical Sunrise</li>
          <li>ginger spice</li>
          <li>chocolate</li> -->
          <!-- <li>Long Black</li>
            <li>matcha</li>
          <li>Mocha</li> -->
          <li>Americano</li>
          <li>Creme Brulee</li>
          <li>Latte</li>
          <li>Cappuccino</li>
          <li>Pink Candy</li>
          <li>Espresso</li>
          <li>Banana Berry</li>
          <!-- <li>Flavour Latee</li> -->
          <!-- <li>Mocha Rum</li>
          <li>red velvet</li>
          <li>hazelnut choco</li> -->
        </ul>
      </div>
      <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="4" class="s3">
        <div class="s3-h1">
          <img src="../assets/coffee-pink-candy.png" alt="">
        </div>
      </div>
      <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="-4" class="s3-h1-bg"></div>
      <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="9" class="s3-h1-bg2"></div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/bootstrap.scss';
@import '../assets/base.scss';

.slide-scroll{
  position: relative;
  width: 100%;
  height: 100vh;
  // height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  // top: -45vh;
}
.line{
  &-l, &-r{
    position: absolute;
    ul{
      display: flex;
      gap: 6vw;
      color: $abu-700;
      // color: $gray-700;
      font-size: 5vw;
      padding: 0 2rem;
      margin-bottom: 0;
      text-transform: uppercase;
      font-weight: 500;
      white-space: nowrap;
      // line-height: 5rem;
      li {
        padding-inline-start: 0;
        &:first-child{
          list-style: none;
        }
      }
    }
  }
  &-l{
    z-index: 3;
    transform: rotate(-7deg) translate(-32vw, 7vh);
    ul.coffee {
      background-color: $abu-100;
      background-image: url('https://raw.githubusercontent.com/anang-prasetyo/almamater-coffee-and-eatery/main/src/assets/binding-light.png');
    }
  }
  &-r{
    z-index: 2;
    transform: rotate(7deg) translate(27vw, 7vh);
    ul.food {
      background-color: $abu-200;
      background-image: url('https://raw.githubusercontent.com/anang-prasetyo/almamater-coffee-and-eatery/main/src/assets/binding-light.png');
    }
  }
}
.s3{
  display: flex;
  justify-content: center;
  position: absolute;
  // top: -50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  &-h1{
    position: relative;
    height: 25rem;
    width: 25rem;
    border-radius: 30rem;
    &-bg, &-bg2{
      position: absolute;
      transform: translateX(-50%);
    }
    &-bg{
      background: rgba(0,0,0,.05);
      // background: $gray-200;
      height: 25rem;
      width: 25rem;
      z-index: 1;
      border-radius: 30rem;
      &2{
        background: rgba(0,0,0,.05);
        // background: $gray-100;
        height: 35rem;
        width: 35rem;
        z-index: 0;
        border-radius: 40rem;
      }
    }
    & img{
      position: absolute;
      top: -2rem;
      transform: translate(-50%, 0);
      height: 29rem;
      width: auto;
    }
  }
}
</style>