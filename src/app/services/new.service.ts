import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(private http: HttpClient) { }


  getVideo(word: string){

    return this.http.get(`https://www.googleapis.com/youtube/v3/search?&part=snippet&key=AIzaSyASSJNgzHQQDmhotVtZZwUbDGibRw7OQCc&type=video&q${word}&maxResults=1`);

  }
}
