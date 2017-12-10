import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorService } from './author.service';
import { AuthorComponent } from './author/author.component';



@NgModule({
  declarations: [
    AppComponent, 
    CourseComponent, AuthorComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
