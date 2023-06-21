<template>
  <section class="c-section -fixed" data-scroll-section="" data-persistent="" data-scroll-section-id="section5" style="opacity: 1; pointer-events: all;" data-scroll-section-inview="">
    <div class="container" id="fixed-elements">
      <div class="o-layout">
        <div class="o-layout_item u-2/5@from-medium">
          <div class="c-section_infos -padding is-inview" data-scroll="" data-scroll-sticky="" data-scroll-target="#fixed-elements">
            <div class="c-section_infos_inner is-inview" data-scroll="" data-scroll-offset="200">
              <!-- <h3>
                Hi <br>
                Welcome
              </h3> -->
              <div class="display-3">Hi, <br>Welcome</div>
              <!-- <div class="c-sections_infos_text u-text">
                <p>
                  Create slides that stick and untick to the viewport while scrolling through.
                </p>
              </div> -->
            </div>
          </div>
        </div>
        <div class="o-layout_item u-3/5@from-medium">
          <div class="c-fixed_wrapper is-inview" data-scroll="" data-scroll-call="dynamicBackground" data-scroll-repeat="" style="background-color: rgb(201, 211, 212);">
            <div class="c-fixed_target" id="fixed-target"></div>
            <div class="c-fixed is-inview" data-scroll="" data-scroll-sticky="" data-scroll-target="#fixed-target" style="background-image: url('https://raw.githubusercontent.com/anang-prasetyo/almamater-coffee-and-eatery/main/src/assets/ezg25fom.png');"></div>
            <!-- <div class="c-fixed is-inview" data-scroll="" data-scroll-sticky="" data-scroll-target="#fixed-target" style="background-image: url('https://locomotivemtl.github.io/locomotive-scroll/dist/images/locomotive04.jpg');"></div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss">
.c{
  &-section {
    margin-bottom: 35vh;
    position: relative;
    &_infos_inner>* {
      transition: opacity .6s cubic-bezier(.215,.61,.355,1),transform .6s cubic-bezier(.215,.61,.355,1);
    }
    &_infos{
      max-width: 320px;
      position: relative;
      z-index: 0;
      &.-padding {
        padding-top: 35vh;
      }
      &_inner.is-inview>:nth-child(2) {
        transition-delay: .12s;
      }
      &_inner.is-inview>* {
        opacity: 1;
        transform: none;
      }
    }
  }
  &-sections_infos_text {
    margin-top: 1.25rem;
  }
  &-fixed{
    background-position: 50%;
    background-size: cover;
    height: 100%;
    mix-blend-mode: multiply;
    opacity: .75;
    &_wrapper {
      height: 100vh;
      overflow: hidden;
      position: relative;
    }
    &, &_target {
        left: 0;
        position: absolute;
        right: 0;
        top: -100vh;
    }
    &_target {
        bottom: -100vh;
    }
  }
}
.o{
  &-container {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 95rem;
  }
  &-layout {
    font-size: 0;
    list-style: none;
    margin: 0;
    padding: 0;
    &_item {
      display: inline-block;
      font-size: 1rem;
      padding-left: 0;
      vertical-align: top;
    }
  }
}
.u{
  &-text {
    font-size: .875rem;
  }
  &-2\/5\@from-medium {
      width: 40%;
  }
  &-3\/5\@from-medium {
      width: 60%;
  }
}

</style>