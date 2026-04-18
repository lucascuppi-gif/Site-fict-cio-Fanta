const latasMenores = document.querySelectorAll(".lataPequena");
const slides = document.querySelectorAll(".slide");

let contador = 0;

latasMenores.forEach((lataMenor) => {
  lataMenor.addEventListener("click", () => {
    const slideAtivo = document.querySelector(".slide.ativo");

    if (slideAtivo) {
      slideAtivo.classList.remove("ativo");
    }

    if (contador >= slides.length - 1) {
      contador = 0;
    } else {
      contador = contador + 1;
    }

    slides[contador].classList.add("ativo");

    console.log("Sabor atual:", contador);
  });
});
