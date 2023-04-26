const buttonDer =document.getElementById("scroll-der");
const buttonIzq = document.getElementById("scroll-izq");

buttonDer.onclick = function () {
    document.getElementById("cards").scrollLeft += 350;
}

buttonIzq.onclick = function () {
    document.getElementById("cards").scrollLeft -= 350;
}

window.onload = function() {
    const modal = document.getElementById("my-modal");
    const img = document.getElementById("menu-ejemplo");
    const modalImg = document.getElementById("img01");
    
    img.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
    }
  
    const span = document.getElementById("close");
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  }
