import { onMounted, ref } from "vue";

export function myFunc(){
  const selectQty = ref([]), selectIce = ref([]), selectCoffee = ref([]), selectCoffeeQty = ref([])
  const drinks = ref({
    coffee : [
      {
        id: 0,
        name: "espresso",
        images: "espresso@20x.png",
        ingredients: "Solo, doppio.",
        price: 15,
        hot: true,
        ice: false,
        qty: 10
      },
      {
        id: 1,
        name: "americano",
        images: "americano@20x.png",
        ingredients: "Espresso, water.",
        price: 18,
        hot: true,
        ice: true,
        qty: 10
      },
      {
        id: 2,
        name: "cappuccino",
        images: "cappuccino@20x.png",
        ingredients: "Foam, milk, espresso.",
        price: 25,
        hot: true,
        ice: true,
        qty: 10
      },
      {
        id: 3,
        name: "latte",
        images: "latte@20x.png",
        ingredients: "Milk foam, steamed milk, espresso.",
        price: 25,
        hot: true,
        ice: true,
        qty: 10
      }
    ]
  })
  const addSelectQty = () => {
    for(var a=0; a<drinks.value.coffee.length ; a++){
      selectQty.value.push(1)
      selectCoffee.value.push(false)
      selectIce.value.push(false)
      selectCoffeeQty.value.push(0)
    }
  }
  
  onMounted(() => addSelectQty())
  
  return{ drinks, selectQty, selectIce, selectCoffee, selectCoffeeQty }
}