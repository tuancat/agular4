import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  listAuthors = [];
  isActive = true;
  email = "tuan.cat@hotmail.com";
  constructor(authorService: AuthorService) { 
    this.listAuthors = authorService.getAuthors();
  }

  ngOnInit() {
  }

}
