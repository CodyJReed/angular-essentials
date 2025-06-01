import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface SubmitForm {
  title: string;
  summary: string
  date: string
}

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() finish = new EventEmitter()
  @Output() add = new EventEmitter<SubmitForm>()
  enteredTitle = ''
  enteredSummary = ''
  enteredDate = ''

  onFinishTask() {
    this.finish.emit()
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    })
  }

}
