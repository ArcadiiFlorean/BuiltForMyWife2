document.getElementById("submit").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const confirmation = document.getElementById("confirmation");

  // Resetăm orice stil anterior
  confirmation.classList.remove("confirmation-success");
  confirmation.style.color = "green"; // pentru a reseta culoarea

  if (name && date && time) {
    // Adăugăm clasa pentru succes și schimbăm textul în verde
    confirmation.classList.add("confirmation-success");
    confirmation.textContent = `Rezervarea a fost confirmată pentru ${name}, la data de ${date}, ora ${time}.`;
  } else {
    // Mesaj de eroare, textul va fi roșu
    confirmation.textContent = "Te rugăm să completezi toate câmpurile!";
    confirmation.style.color = "red";
  }
});

// Accesăm butonul și div-ul care conține calendarul
const showCalendarButton = document.getElementById("showCalendar");
const calendarContainer = document.getElementById("calendarContainer");

// Adăugăm un eveniment de tip 'click' pe buton
showCalendarButton.addEventListener("click", () => {
  // Verificăm dacă calendarul este deja vizibil
  if (
    calendarContainer.style.display === "none" ||
    calendarContainer.style.display === ""
  ) {
    // Dacă este ascuns, îl facem vizibil
    calendarContainer.style.display = "block";
  } else {
    // Dacă este deja vizibil, îl ascundem
    calendarContainer.style.display = "none";
  }
});
document.getElementById("showCalendar").addEventListener("click", function () {
  var heroImage = document.querySelector(".hero_img");

  // Aplicăm animația de coborâre a imaginii
  heroImage.style.animation = "slideDown 3s ease-out forwards";

  // Asigurăm că imaginea devine vizibilă (în cazul în care era ascunsă)
  heroImage.style.opacity = "1";
});


/*depsre mine sectiunea*/
