import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { PostsService } from './services/posts.service';
import { Posts } from './types/posts.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  listPosts: Posts[] = [];

  constructor(private postsService:PostsService) { }

  ngOnInit() {
    this.listPosts = this.postsService.getPosts();

  }

}
