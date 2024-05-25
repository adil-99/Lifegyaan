<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $query = htmlspecialchars($_POST['query']);
    // In a real application, you would perform a search in the database or handle the query
    echo "You searched for: " . $query;
}
?>
