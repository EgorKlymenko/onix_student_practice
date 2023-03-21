document.addEventListener("DOMContentLoaded", function() {
    const lol = document.getElementById("image");
    const prot1 = document.getElementById("lp1");
    const prot2 = document.getElementById("lp2");
    const prot3 = document.getElementById("lp3");
    const prot4 = document.getElementById("lp4");
    const prot5 = document.getElementById("lp5");
    const prot6 = document.getElementById("lp6");
    prot1.addEventListener("click", function(e) {
        lol.src = 'img/protein1.png';
        prot1.style.backgroundColor = "red";
        prot2.style.backgroundColor = "white";
        prot3.style.backgroundColor = "white";
        prot4.style.backgroundColor = "white";
        prot5.style.backgroundColor = "white";
        prot6.style.backgroundColor = "white";
    });
    prot2.addEventListener("click", function(e) {
        lol.src = 'img/protein2.png';
        prot2.style.backgroundColor = "red";
        prot1.style.backgroundColor = "white";
        prot3.style.backgroundColor = "white";
        prot4.style.backgroundColor = "white";
        prot5.style.backgroundColor = "white";
        prot6.style.backgroundColor = "white";
    });
    prot3.addEventListener("click", function(e) {
        lol.src = 'img/protein3.png';
        prot3.style.backgroundColor = "red";
        prot1.style.backgroundColor = "white";
        prot2.style.backgroundColor = "white";
        prot4.style.backgroundColor = "white";
        prot5.style.backgroundColor = "white";
        prot6.style.backgroundColor = "white";
    });
    prot4.addEventListener("click", function(e) {
        lol.src = 'img/protein4.png';
        prot4.style.backgroundColor = "red";
        prot1.style.backgroundColor = "white";
        prot3.style.backgroundColor = "white";
        prot2.style.backgroundColor = "white";
        prot5.style.backgroundColor = "white";
        prot6.style.backgroundColor = "white";
    });
    prot5.addEventListener("click", function(e) {
        lol.src = 'img/protein5.png';
        prot5.style.backgroundColor = "red";
        prot1.style.backgroundColor = "white";
        prot3.style.backgroundColor = "white";
        prot4.style.backgroundColor = "white";
        prot2.style.backgroundColor = "white";
        prot6.style.backgroundColor = "white";
    });
    prot6.addEventListener("click", function(e) {
        lol.src = 'img/protein6.png';
        prot6.style.backgroundColor = "red";
        prot1.style.backgroundColor = "white";
        prot3.style.backgroundColor = "white";
        prot4.style.backgroundColor = "white";
        prot5.style.backgroundColor = "white";
        prot2.style.backgroundColor = "white";
    });
});