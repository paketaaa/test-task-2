document.addEventListener('DOMContentLoaded', () => {
   const cards = document.querySelectorAll(".card")
   const buttons = document.querySelectorAll(".card-legend__button")

   cards.forEach(function(card){
      card.addEventListener("click", function(){
         if (!(card.classList.contains("card--disabled"))) {
            card.classList.toggle("card--clicked")
         }
      })

      card.addEventListener("mouseleave", function(){
         if (!(card.classList.contains("card--disabled"))) {
            card.classList.add("card--hovered")
         }
      })
      card.addEventListener("mouseenter", function(){
         if (!(card.classList.contains("card--disabled"))) {
            card.classList.remove("card--hovered")
         }
      })
   })


   buttons.forEach(function(button){
      button.addEventListener("click", function(){
         this.closest(".card-wrapper").querySelector(".card").click()
      })
   })
});