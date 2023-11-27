import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { TutorialService } from 'src/app/service/tutorial.service';

@Component({
  selector: 'app-tutorial-detail',
  templateUrl: './tutorial-detail.page.html',
  styleUrls: ['./tutorial-detail.page.scss'],
})
export class TutorialDetailPage implements OnInit {

  tutorialdetail: any[] = [];
  images:string = "https://source.unsplash.com/random/300x300";

  constructor(private route: ActivatedRoute,private tutorialService:TutorialService, private loadingController:LoadingController) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.getDetailId(id);
  }

  async getDetailId(id:string | null){
    const loading = await this.loadingController.create({
      message: 'loading ...',
      spinner: 'bubbles'
    });
    await loading.present();

    this.tutorialService.getDetailTutorial(id).subscribe((res) => {
      loading.dismiss();
      // this.tutorials = [...this.tutorials, ...res.Hasil];
      this.tutorialdetail.push(...res.Hasil);
      console.log(this.tutorialdetail);
    });
  }

}
