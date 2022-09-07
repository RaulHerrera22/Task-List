import { Injectable } from '@angular/core';
import{HttpClient, HttpHandler} from '@angular/common/http';
import {Observable, of} from "rxjs"
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  constructor(private http:HttpClient) { }
  private apiUrl = 'http://localhost:5000/tasks';
  

  

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }
}
