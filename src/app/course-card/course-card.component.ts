import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input()
  course: Course

  @Output('courseSelected')
  courseEventEmitter = new EventEmitter<Course>();
  onCourseViewed(): void {
    console.log('Course viewed!');

    this.courseEventEmitter.emit(this.course);
  }
}
