<?php
// Setările bazei de date
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "consultatii";

// Creează conexiunea
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifică conexiunea
if ($conn->connect_error) {
    die("Conexiune eșuată: " . $conn->connect_error);
}

// Verifică dacă formularul a fost trimis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Preia datele din formular
    $nume = $_POST['nume'];
    $email = $_POST['email'];
    $telefon = $_POST['telefon'];
    $data = $_POST['data'];
    $ora = $_POST['ora'];

    // Validare date (poți adăuga și alte validări aici)
    if (empty($nume) || empty($email) || empty($telefon) || empty($data) || empty($ora)) {
        echo "Toate câmpurile sunt obligatorii!";
    } else {
        // Pregătește și execută interogarea de inserare
        $sql = "INSERT INTO rezervari (nume, email, telefon, data, ora) 
                VALUES ('$nume', '$email', '$telefon', '$data', '$ora')";

        if ($conn->query($sql) === TRUE) {
            echo "Rezervarea a fost efectuată cu succes!";
        } else {
            echo "Eroare: " . $sql . "<br>" . $conn->error;
        }
    }
}

// Închide conexiunea
$conn->close();
?>
