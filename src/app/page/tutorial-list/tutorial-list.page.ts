import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { TutorialService } from 'src/app/service/tutorial.service';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.page.html',
  styleUrls: ['./tutorial-list.page.scss'],
})
export class TutorialListPage implements OnInit {

  tutorials : any[] = [];
  page = 1;
  images:string = "https://source.unsplash.com/random/50x50";
  constructor(private tutorialService : TutorialService, 
              private loadingController : LoadingController) { }
  ngOnInit() {
    this.loadTutorial();
  }
  async loadTutorial(){
    const loading = await this.loadingController.create({
      message: 'loading ...',
      spinner: 'bubbles'
    });
    await loading.present();

    this.tutorialService.getTutorial().subscribe((res) => {
      loading.dismiss();
      // this.tutorials = [...this.tutorials, ...res.Hasil];
      this.tutorials.push(...res.Hasil);
      console.log(this.tutorials);
    });
  }
}
