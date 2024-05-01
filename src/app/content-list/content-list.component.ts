import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  videos: any[] = []; 
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
   
    this.fetchVideos();
  }

 

  fetchVideos(): void {
    this.http.get<any[]>('http://localhost:8080/api/video/all').subscribe(
      response => {
        this.videos = response;
      },
      error => {
        console.error('Error fetching videos:', error);
      }
    );
  }
 
}
