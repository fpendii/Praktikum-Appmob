<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$pesan = [];

// Ambil data dari JSON
$title = mysqli_real_escape_string($koneksi, $data['title']);
$description = mysqli_real_escape_string($koneksi, $data['description']);
$published = mysqli_real_escape_string($koneksi, $data['published']);
$content = mysqli_real_escape_string($koneksi, $data['content']);



if ($title != '' and $description != '' and $published != '' and $content != '') {
	$query = mysqli_query($koneksi, "INSERT INTO tutorial(title, description, published, content) VALUES ('$title', '$description', '$published', '$content')");

}else{
	$query = mysqli_query($koneksi,"delete from tutorial where title='$title'");
}

if ($query) {
    http_response_code(201);
    $pesan['status'] = 'sukses';
} else {
    http_response_code(422);
    $pesan['status'] = 'Gagal';
    $pesan['error'] = mysqli_error($koneksi);
}

echo json_encode($pesan);
