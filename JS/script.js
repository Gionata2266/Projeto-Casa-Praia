
 
  const track = document.getElementById("slider-track");
  const btnNext = document.getElementById("next");
  const btnPrev = document.getElementById("prev");

  // Manual
  btnNext.addEventListener("click", () => {
    track.scrollBy({ left: 320, behavior: "smooth" });
  });

  btnPrev.addEventListener("click", () => {
    track.scrollBy({ left: -320, behavior: "smooth" });
  });

  // Automático
  setInterval(() => {
    track.scrollBy({ left: 320, behavior: "smooth" });


    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 1) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, 3000); 

