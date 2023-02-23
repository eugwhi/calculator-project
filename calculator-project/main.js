
let input = document.querySelector("input")
let buttons = document.querySelectorAll("button")
let equal = document.querySelector("button.equal")
let reset = document.querySelector("button.reset")
calc = () => (eval(input.value))

buttons.forEach(function (button) {
   button.addEventListener("click", function (e) {
      let value = e.target.dataset.num
      input.value += value
   })

   equal.addEventListener("click", function (e) {
      if (input.value === "") {
         input.value = "Please, input value!"
      } else {
         input.value = calc()
      }
   });

   reset.addEventListener("click", function (e) {
      input.value = ""
   })



});





