document.getElementById("submit").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const confirmation = document.getElementById("confirmation");
  
    if (name && date && time) {
      confirmation.textContent = `Rezervarea a fost confirmată pentru ${name}, la data de ${date}, ora ${time}.`;
    } else {
      confirmation.textContent = "Te rugăm să completezi toate câmpurile!";
      confirmation.style.color = "red";
    }
  });
  