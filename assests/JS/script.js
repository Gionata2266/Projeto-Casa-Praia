
 
  const track = document.getElementById("slider-track");
  const btnNext = document.getElementById("next");
  const btnPrev = document.getElementById("prev");

 
  btnNext.addEventListener("click", () => {
    track.scrollBy({ left: 320, behavior: "smooth" });
  });

  btnPrev.addEventListener("click", () => {
    track.scrollBy({ left: -320, behavior: "smooth" });
  });


  setInterval(() => {
    track.scrollBy({ left: 320, behavior: "smooth" });


    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 1) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, 3000); 

 let openModal = document.querySelector(".openModal")
 let closeModal = document.querySelector("#closeModal")
 let modal = document.querySelector("#phoneModal")

 openModal.onclick = ()=>{
  modal.style.display = "flex"
 };

 closeModal.onclick = () =>{
  modal.style.display = "none"
 };

 window.onclick = (e) =>{
      if (e.target == modal) {
        modal.style.display = 'none';
      }
 };


   const botao = document.getElementById('botaoMusica');
  const audio = document.getElementById('audioMusica');

  botao.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      botao.textContent = "Continue ⏸️"; // ícone de pausa
    } else {
      audio.pause();
      botao.textContent = "Pausar ▶️"; // ícone de play
    }
  });