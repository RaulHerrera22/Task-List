import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
