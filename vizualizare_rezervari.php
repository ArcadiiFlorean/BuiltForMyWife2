<?php
// Setările pentru conexiunea la baza de date
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

// Interogare pentru a obține toate rezervările
$sql = "SELECT id, nume, email, telefon, data, ora FROM rezervari";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Afișează datele
    echo "<table><tr><th>ID</th><th>Nume</th><th>Email</th><th>Telefon</th><th>Data</th><th>Ora</th></tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["id"]. "</td><td>" . $row["nume"]. "</td><td>" . $row["email"]. "</td><td>" . $row["telefon"]. "</td><td>" . $row["data"]. "</td><td>" . $row["ora"]. "</td></tr>";
    }
    echo "</table>";
} else {
    echo "Nu există rezervări.";
}

$conn->close();
?>
