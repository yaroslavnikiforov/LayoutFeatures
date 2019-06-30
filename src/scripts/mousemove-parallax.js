const mousemoveParallax = document.querySelector(".mousemove-parallax");
mousemoveParallax.addEventListener("mousemove", parallax);

function parallax(e) {
  this.querySelectorAll(".mousemove-parallax__layer").forEach(layer => {
    const speed = layer.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerWidth - e.pageY * speed) / 100;

    layer.style.transform = `
          translateX(${x}px)
          translateY(${y}px)
          `;
  });
}
