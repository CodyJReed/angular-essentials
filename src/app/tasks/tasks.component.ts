import { Component, Input } from '@angular/core';

import { TaskComponent } from '../task/task.component';

import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent, type SubmitForm } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) id!: string
  @Input({required: true}) name!: string
  isAddingTask = false
  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.id)
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }

  onStartAddTask() {
    this.isAddingTask = true
  }

  onFinishAddTask() {
    this.isAddingTask = false
  }

  onAddTask(data: SubmitForm) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: data.title,
      summary: data.summary,
      dueDate: data.date,
      userId: this.id
    })
    this.isAddingTask = false

    return
  }
}
