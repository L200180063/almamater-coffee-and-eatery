<template>
  <section data-scroll-section>
    <div class="container">
      <header id="header" class="row d-flex flex-wrap align-items-center justify-content-sm-between justify-content-between py-3 mb-4">
        <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3" data-scroll-position="top" data-scroll-target="#header" class="col-auto mb-2 mb-md-0 fw-bold text-uppercase">Almamater</div>
        <ul id="NavMenu" class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li class="nav-link"><a href="#section-get-in-touch" class="text-decoration-none">Get in touch</a></li>
          <li class="nav-link"><a href="#section-drinks" class="text-decoration-none">Drinks</a></li>
          <li class="nav-link"><a href="#section-meals" class="text-decoration-none">Meals</a></li>
          <li class="nav-link"><a href="#section-payments" class="text-decoration-none">Payments</a></li>
        </ul>
        <div id="NavMenuIcon">
          <input type="checkbox" id="MenuToggle" onclick="myFunction()"/>
          <label for="MenuToggle" class="toggle">
            <div class="bars" id="bar1"></div>
            <div class="bars" id="bar2"></div>
            <div class="bars" id="bar3"></div>
          </label>
        </div>
        <div id="myDIV" class="bg-white">
          <ul class="nav d-flex flex-column m-auto gap-4 align-items-center">
            <li class="nav-link text-black fw-semibold">Get in touch</li>
            <li class="nav-link text-black-50">Drinks</li>
            <li class="nav-link text-black-50">Meals</li>
            <li class="nav-link text-black-50">Payments</li>
          </ul>
        </div>
        <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="3" data-scroll-position="top" data-scroll-target="#header" class="col-auto text-end">
          <a href="/" class="btn btn-outline-secondary rounded-5 fw-semibold">Order Now</a>
        </div>
      </header>
    </div>
  </section>
</template>

<script setup>
function myFunction() {
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.width = 'calc(100vw - 13px)';
  body.style.top = `-${scrollY}`;
  var x = document.getElementById("myDIV");
  // var y = document.getElementById("NavBarMobileClose");
  // var z = document.getElementById("NavBarMobileOpen");

  if (x.style.display === "flex") {
    x.style.display = "none";
    // y.style.display = "flex";
    // z.style.display = "none";
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.width = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  } else {
    x.style.display = "flex";
    // y.style.display = "none";
    // z.style.display = "flex";
  }
}
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/bootstrap.scss';
@import 'bootstrap/scss/mixins.scss';

.nav-link{
  color: rgba(0, 0, 0, 0.5) !important;
  &:hover{
    color: black !important;
  }
  & a{
    color: currentColor !important;
  }
}
#NavMenuIcon {
  #MenuToggle {
    display: none;
    &:checked + .toggle {
      & .bars {
        margin-left: 6px;
      }
      & #bar2 {
        transform: rotate(135deg);
        margin-left: 0;
        transform-origin: center;
        transition-duration: .3s;
      }
      & #bar1 {
        transform: rotate(45deg);
        transition-duration: .3s;
        transform-origin: left center;
      }
      & #bar3 {
        transform: rotate(-45deg);
        transition-duration: .3s;
        transform-origin: left center;
      }
    }
  }
  $menu-toggle-height: 20px;
  $menu-toggle-width: 20px;
  .toggle {
    position: relative;
    width: $menu-toggle-width;
    height: $menu-toggle-height;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: calc($menu-toggle-width / 4);
    transition-duration: .3s;
  }
  .bars {
    width: 100%;
    height: calc($menu-toggle-height / 10);
    background-color: black;
    border-radius: 5px;
    transition-duration: .3s;
  }
}

#myDIV {
	width: 100%;
  display: none;
  overflow: hidden;
  height: 90vh;
  position: fixed;
  top: 10vh;
  left: 0;
  z-index: 7;
  transition: all .5s ease;
}

@include media-breakpoint-up(md) { 
  #NavMenuIcon{
    display: none;
  }
}
@include media-breakpoint-down(md) { 
  #NavMenu{
    display: none;
  }
}
</style>