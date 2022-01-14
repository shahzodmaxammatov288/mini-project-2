// Selectors
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

for(let i of btnOpenModal) {
  i.addEventListener("click", function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  })
}

btnCloseModal.addEventListener("click", function() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
})

overlay.addEventListener("click", function() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
})

document.addEventListener("keydown", function(e) {
  if(e.key === "Escape") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
})

