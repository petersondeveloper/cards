import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent implements OnInit {

  nowDatetime: string = "";

  @Input() title = '';
  @Input() imageUrl = '';
  @Input() username = '';
  @Input() content = '';

  jsonGet: string = "";

  ngOnInit(): void {
    this.nowDatetime = new Date().toDateString();

  }

}
