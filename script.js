document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault(); // Previne comportamentul implicit al butonului

  // Colectăm datele din formular
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  // Verificăm dacă toate câmpurile sunt completate
  if (name && date && time) {
    // Afișăm un mesaj de confirmare
    document.getElementById("confirmation").textContent = 
      `Rezervarea a fost confirmată pentru ${name} pe data de ${date} la ora ${time}.`;
  } else {
    // Afișăm un mesaj de eroare dacă nu toate câmpurile sunt completate
    document.getElementById("confirmation").textContent = 
      "Te rog completează toate câmpurile!";
    document.getElementById("confirmation").style.color = "red";
  }
});
// Accesăm butonul și div-ul care conține calendarul
// Accesăm butonul și div-ul care conține calendarul
const showCalendarButton = document.getElementById("showCalendar");
const calendarContainer = document.getElementById("calendarContainer");

// Adăugăm un eveniment de tip 'click' pe buton
showCalendarButton.addEventListener("click", () => {
  // Verificăm dacă calendarul este deja vizibil
  if (calendarContainer.style.display === "none" || calendarContainer.style.display === "") {
    // Dacă este ascuns, îl facem vizibil
    calendarContainer.style.display = "block";
  } else {
    // Dacă este deja vizibil, îl ascundem
    calendarContainer.style.display = "none";
  }
});

// Animarea imaginii
document.getElementById("showCalendar").addEventListener("click", function () {
  var heroImage = document.querySelector(".hero_img");

  // Aplicăm animația de coborâre a imaginii
  heroImage.style.animation = "slideDown 3s ease-out forwards";

  // Asigurăm că imaginea devine vizibilă (în cazul în care era ascunsă)
  heroImage.style.opacity = "1";
});

// Rezervare form - Un singur eveniment pentru butonul de submit
document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault(); // Previne comportamentul implicit al butonului

  // Colectăm datele din formular
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const confirmation = document.getElementById("confirmation");

  // Resetăm orice stil anterior
  confirmation.classList.remove("confirmation-success");
  confirmation.style.color = "green"; // pentru a reseta culoarea

  // Validare dată (să nu fie în trecut)
  const currentDate = new Date();
  const selectedDate = new Date(date);

  // Setăm ora pentru a ignora ora curentă (necomparând orele, minutele etc.)
  currentDate.setHours(0, 0, 0, 0);
  selectedDate.setHours(0, 0, 0, 0);

  // Comparăm doar datele (nu și ora)
  if (selectedDate < currentDate) {
    confirmation.textContent = "Te rugăm să alegi o dată validă (nu în trecut)!";
    confirmation.style.color = "red";
    return;
  }

  // Validare ora (să fie una din orele disponibile)
  const availableTimes = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];
  if (!availableTimes.includes(time)) {
    confirmation.textContent = "Te rugăm să alegi o oră disponibilă!";
    confirmation.style.color = "red";
    return;
  }

  // Verificăm dacă toate câmpurile sunt completate corect
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
