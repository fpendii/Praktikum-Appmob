<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$pesan = [];

// Ambil data dari JSON
$judul = mysqli_real_escape_string($koneksi, $data['judul']);
$deskripsi = mysqli_real_escape_string($koneksi, $data['deskripsi']);
$penulis = mysqli_real_escape_string($koneksi, $data['penulis']);
$stok = mysqli_real_escape_string($koneksi, $data['stok']);



if ($judul != '' and $deskripsi != '' and $penulis != '' and $stok != '') {
	$query = mysqli_query($koneksi, "INSERT INTO buku(judul, deskripsi, stok, penulis) VALUES ('$judul', '$deskripsi', '$stok', '$penulis')");

}else{
	$query = mysqli_query($koneksi,"DELETE FROM buku where judul='$judul'");
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
