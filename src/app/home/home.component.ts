import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment-service.service';
import { Comment } from '../models/comment.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comments: Comment[] = [];
  newComment: Comment = { username: '', text: '' };
  comment:any={}
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.fetchComments();
  }

  fetchComments(): void {
    this.commentService.getAllComments().subscribe(comments => {
      this.comments = comments;
    }, error => {
      console.error('Error fetching comments:', error);
    });
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
        // Refresh comments after deleting a comment
        this.fetchComments();
      },
      (error) => {
        console.error('Error deleting comment:', error);
      }
    );
  }
}


