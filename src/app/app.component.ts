import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses: Course[] = COURSES;

  onCourseClicked(): void {
    console.log('Course clicked!');
  }

  onCourseSelected(course: Course): void {
    console.log('Course selected!');

    console.info('Course: ', course);
  }
}
