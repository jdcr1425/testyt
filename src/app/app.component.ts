import { Component } from '@angular/core';
import { NewService } from './services/new.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test1';
  video: any;

  constructor(private http: HttpClient, private service: NewService) {
    this.service.getVideo('perro').subscribe(res => {
      this.video = res['items'][0]['id'].videoId;

      console.log(this.video);
    });
  }
}
