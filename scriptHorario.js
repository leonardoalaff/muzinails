document.addEventListener("DOMContentLoaded", function() {
    var data = new Date();
    var diaSemana = data.getDay(); // 0 = domingo, 1 = segunda, ..., 6 = sábado
    var hora = data.getHours();
  
    if (diaSemana === 0 || diaSemana === 1) {
        document.getElementById("aberto").classList.remove("active");
        document.getElementById("fechado").classList.add("active");
    } else {
        if (hora >= 8 && hora < 18) {
            document.getElementById("aberto").classList.add("active");
            document.getElementById("fechado").classList.remove("active");
        } else {
            document.getElementById("aberto").classList.remove("active");
            document.getElementById("fechado").classList.add("active");
        }
    }
  });