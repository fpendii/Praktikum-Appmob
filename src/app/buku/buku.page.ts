import { Component, OnInit } from '@angular/core';
import { TutorialService } from '../service/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.page.html',
  styleUrls: ['./buku.page.scss'],
})
export class BukuPage implements OnInit {

  id: any;
  title: any;
  description : any;
  published : any;
  content : any;

  constructor(
    public tutorialService : TutorialService,
    public route : ActivatedRoute,
    public router : Router
  ) {
    this.route.params.subscribe((param:any)=>{
      this.id = param.id;
      console.log(this.id);
      this.ambilBuku(this.id);
    })
   }

  ngOnInit() {
  }

  ambilBuku(id:any){
    this.tutorialService.ambilTutorial(id).subscribe((res: any)=>{
      console.log('sukses',res);
      let tutorial = res;
      this.id = tutorial.id,
      this.title = tutorial.title,
      this.description = tutorial.description,
      this.published = tutorial.published,
      this.content = tutorial.content
    },(error: any)=>{
      console.log('error', error);
      alert('gagal ambil data');
    })
  }

}
