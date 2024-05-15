import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../models/video.model';
@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent {
  
  videoTitle: string = ''; 
  videoDescription: string = ''; 
  videoUrl: string = ''; 
  videos: Video[] = [];
  video: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
   this.fetchVideos

  }

  addVideo(): void {
    const video = { title: this.videoTitle, description: this.videoDescription, videoUrl: this.videoUrl };
    this.http.post<any>('http://localhost:8080/api/video/add', video).subscribe(
      response => {
        console.log('Video added successfully:', response);
        this.videoTitle = '';
        this.videoDescription = '';
        this.videoUrl = '';
      },
      error => {
        console.error('Error adding video:', error);
      }
    );
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
  deleteVideo(videoId: number): void {
    if (confirm("Are you sure you want to delete this video?")) {
      this.http.delete<any>('http://localhost:8080/api/video/delete/' + videoId).subscribe(
        () => {
          console.log(`Video with ID ${videoId} deleted successfully.`);
          this.fetchVideos();
        },
        (error: any) => { 
          console.error(`Error deleting video with ID ${videoId}:`, error);
        }
      );
    }
  
}}
