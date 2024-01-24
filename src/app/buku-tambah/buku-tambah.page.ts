import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/service/tutorial.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-buku-tambah',
  templateUrl: './buku-tambah.page.html',
  styleUrls: ['./buku-tambah.page.scss'],
})
export class BukuTambahPage implements OnInit {

  data : any = {
    judul : '',
    deskripsi : '',
    penulis : '',
    stok : ''
  }

  constructor(
    public tutorialService: TutorialService,
    private navCtrl: NavController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  tambahBuku(){
    console.log(this.data);
    this.tutorialService.tambahBuku(this.data).subscribe(
      (response) => {
        console.log('Data berhasil ditambahkan:', response);

        // Navigasi ke halaman lain jika berhasil
        this.navCtrl.navigateForward(['/buku-list']);

        // Tampilkan notifikasi sukses
        this.tampilkanNotifikasi('Data berhasil ditambahkan', 'success');
      },
      (error) => {
        console.error('Gagal menambahkan data:', error);

        // Tampilkan notifikasi gagal
        this.tampilkanNotifikasi('Gagal menambahkan data', 'danger');
      }
    );
  }

  async tampilkanNotifikasi(pesan: string, warna: string) {
    const toast = await this.toastController.create({
      message: pesan,
      color: warna,
      duration: 2000, // durasi notifikasi dalam milidetik
    });

    toast.present();
  }

}
