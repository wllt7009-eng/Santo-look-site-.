// Animação de Surgimento (Reveal)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Header muda de cor ao rolar
window.addEventListener("scroll", function() {
    var header = document.querySelector(".header-premium");
    header.classList.toggle("sticky", window.scrollY > 0);
});
