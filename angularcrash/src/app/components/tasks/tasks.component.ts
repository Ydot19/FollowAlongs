import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/TaskInterface';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Array<Task> = new Array()

  constructor(private taskService: TaskService) {
   }


  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks
    })
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter( (t) => t.id !== task.id)
    })
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task)
    })
  }
}
