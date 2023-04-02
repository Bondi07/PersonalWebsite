// FUNKCIJA KOJA NA SKROLOVANJE SAJTA SMANJUJE SLOVA    
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo").style.fontSize = "40px";
  } else {
    document.getElementById("logo").style.fontSize = "90px";
  }
}



