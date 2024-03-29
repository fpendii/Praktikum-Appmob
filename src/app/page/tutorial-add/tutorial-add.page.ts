import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { TutorialService } from 'src/app/service/tutorial.service';

@Component({
  selector: 'app-tutorial-add',
  templateUrl: './tutorial-add.page.html',
  styleUrls: ['./tutorial-add.page.scss'],
})
export class TutorialAddPage implements OnInit {

  data: any = {
    title: '',
    description: '',
    published: '',
    content: ''
  };

  constructor(
    public tutorialService: TutorialService,
    private navCtrl: NavController,
    private toastController: ToastController
  ) { }

  ngOnInit() { }

  tambahTutorial() {
    console.log(this.data);
    this.tutorialService.tambahTutorial(this.data).subscribe(
      (response) => {
        console.log('Data berhasil ditambahkan:', response);

        // Navigasi ke halaman lain jika berhasil
        this.navCtrl.navigateForward(['/tutorial']);

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
