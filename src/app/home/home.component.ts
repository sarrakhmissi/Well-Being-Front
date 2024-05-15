import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommentService } from '../comment-service.service';
import { Comment } from '../models/comment.model';
import { Router } from '@angular/router';
import { Image } from '../models/image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
 
  comments: Comment[] = [];
  newComment: Comment = { username: '', text: '' };
  comment: any = {};
  images: Image[] = [];
  selectedIndex = 0;
  indicator = true;
  private intervalId: any; // Variable to hold the interval ID

  constructor(private commentService: CommentService, private router: Router) {}

  ngOnInit(): void {
    this.fetchComments();
    this.images = [
      { "imageSrc": "https://i.pinimg.com/originals/b4/ca/95/b4ca95fc1840a39fda5e78a590be9d2b.jpg", 'title': 'Mental health' },
      { "imageSrc": "https://media.lesechos.com/api/v1/images/view/64ed7bb7f9fbb6221a787f1d/1280x720/0901567332860-web-tete.jpg", 'title': 'Shop' },
      { "imageSrc": "https://functionalmovement.com/store/image/30097", 'title': 'Courses' },
      { "imageSrc": "https://t4.ftcdn.net/jpg/02/62/03/53/360_F_262035364_gGi8uJsPl9uljis8C6oxI0w6AM7MKDLq.jpg", 'title': 'Promotion' },

      { "imageSrc": "https://knowyourbackstory.com/manage/wp-content/uploads/2022/06/find-a-doctor-hero.png", 'title': 'Find a Doctor' }

    ];

    this.startCarousel();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
    }, 2000); 
  }

  stopCarousel(): void {
    clearInterval(this.intervalId);
  }

  fetchComments(): void {
    this.commentService.getAllComments().subscribe(
      comments => {
        this.comments = comments;
      },
      error => {
        console.error('Error fetching comments:', error);
      }
    );
  }

  addComment() {
    this.commentService.addComment(this.comment).subscribe(
      (response) => {
        console.log('Comment added successfully:', response);
      },
      (error) => {
        console.error('Error adding comment:', error);
      }
    );
  }

  deleteComment(id: number): void {
    this.commentService.deleteComment(id).subscribe(
      () => {
        console.log('Comment deleted successfully');
        this.fetchComments();
      },
      (error) => {
        console.error('Error deleting comment:', error);
      }
    );
  }

  selectedImage(index: number): void {
    this.selectedIndex = index;
  }

  root(img: Image): void {
    if (img.title == 'Mental health') {
      this.router.navigate(['/mental']);
    } else if (img.title == 'Shop') {
      this.router.navigate(['/healthstore']);
    } else if (img.title == 'Courses') {
      this.router.navigate(['/course']);
    }else if (img.title == 'Find a Doctor') {
      this.router.navigate(['/rendezvous']);
    }else if (img.title == 'Promotion') {
      this.router.navigate(['/promotion']);
    }
  }
}
