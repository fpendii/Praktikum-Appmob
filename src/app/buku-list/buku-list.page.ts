import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/service/tutorial.service';

@Component({
  selector: 'app-buku-list',
  templateUrl: './buku-list.page.html',
  styleUrls: ['./buku-list.page.scss'],
})
export class BukuListPage implements OnInit {
  buku : any;

  constructor(
    private tutorialService : TutorialService
  ) {
    this.getBuku();
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log("jika selesai loading");
    this.getBuku();
  }

  getBuku(){
      this.tutorialService.getBuku().subscribe((res: any) => {
        console.log("sukses", res);
        this.buku = res;
    })
  }

}
