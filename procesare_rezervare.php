<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "Nume: " . $_POST['nume'] . "<br>";
    echo "Email: " . $_POST['email'] . "<br>";
    echo "Telefon: " . $_POST['telefon'] . "<br>";
    echo "Data: " . $_POST['data'] . "<br>";
    echo "Ora: " . $_POST['ora'] . "<br>";
}

$servername = "localhost"; // Adresa serverului (de obicei localhost)
$username = "root"; // Utilizatorul MySQL (implicit este root)
$password = ""; // Parola (dacă ai una, completează aici)
$dbname = "rezervari"; // Numele bazei de date

// Conectare la baza de date
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificare conexiune
if ($conn->connect_error) {
    die("Conexiunea a eșuat: " . $conn->connect_error);
}

// Preluare date din formular
$nume = $_POST['nume'];
$email = $_POST['email'];
$telefon = $_POST['telefon'];
$data = $_POST['data'];
$ora = $_POST['ora'];

// Query pentru inserare date în baza de date
$sql = "INSERT INTO rezervari (nume, email, telefon, data, ora) 
        VALUES ('$nume', '$email', '$telefon', '$data', '$ora')";

if ($conn->query($sql) === TRUE) {
    echo "Rezervarea a fost înregistrată cu succes!";
} else {
    echo "Eroare: " . $sql . "<br>" . $conn->error;
}

// Închidere conexiune
$conn->close();
?>
