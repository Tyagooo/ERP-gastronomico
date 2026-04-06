document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("¡Gracias por contactarnos! Nos pondremos en contacto pronto.");
});

// Plan Básico 
document.getElementById("basicoPlan").addEventListener("click", () => {
    const a = document.createElement("a");
    a.href = "sazonERP_basico.zip";
    a.download = "SazonERP_Basico.zip";
    a.click();
});

// Plan Intermedio
document.getElementById("intermedioPlan").addEventListener("click", () => {
    window.location.href = "erp/index.html";
});

// Plan Avanzado
document.getElementById("avanzadoPlan").addEventListener("click", () => {
    window.location.href = "erp/avanzado.html";
});