import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  taskList: Task[];
  filteredTaskList: Task[];
  description: string;
  taskFilter:string = "All";

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    this.taskList = this.taskService.getTasks();
  }

  // getTasks(): Task[] {
  //   return [
  //     {id:2, description: "Task1", isCompleted: true}
  //   ]
  // }

  addTask() {
    var task = {description: this.description, isCompleted: false}
    this.taskService.addTask(task);
    this.description = "";
  }

  deleteTask(task: Task){
    this.taskList = this.taskList.filter(t => t !== task);
  }

  filterTasks(filterby:string) {
    if(filterby == 'Completed') {
      this.filteredTaskList = this.taskList.filter(task => task.isCompleted)
    } else if(filterby == 'Incomplete') {
      this.filteredTaskList = this.taskList.filter(task => !task.isCompleted)
    } else {
      this.filteredTaskList = [...this.taskList];
    }
  }
}
