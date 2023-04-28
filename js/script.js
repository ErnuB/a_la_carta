const buttonDer =document.getElementById("scroll-der");
const buttonIzq = document.getElementById("scroll-izq");

buttonDer.onclick = function () {
    document.getElementById("cards").scrollLeft += 370;
}

buttonIzq.onclick = function () {
    document.getElementById("cards").scrollLeft -= 370;
}