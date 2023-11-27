import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiTutorial {
 Hasil : any[];
 Status : any[];
}

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getTutorial():Observable<ApiTutorial>{
    return this.http.get<ApiTutorial>(`${environment.baseUrl}/ionic/index.php`);
  }

  // tambahTutorial(data:{title:string, description:string}):Observable<{title:string, description:string}>{
  //   // console.log(data);
  //   // return this.http.post<{title:string,description:string}>(`${environment.baseUrl}/ionic/index.php?aksi=tambah`, data);
  // }

  // getDetailTutorial(id: string | null):Observable<ApiTutorial>{
  //   // return this.http.get<ApiTutorial>(`${environment.baseUrl}/ionic/index.php?id=${id}`);
  // }
}
