import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course = {
    title: "the complete angular course", 
    rating: 4.975, 
    students: 30123, 
    price: 190.05,
    releaseDate : new Date(2017, 3, 12)
  }
  constructor() { 
    
  }

  ngOnInit() {
  }

}
