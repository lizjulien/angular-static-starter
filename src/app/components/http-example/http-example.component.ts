import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.scss']
})
export class HttpExampleComponent implements OnInit {
  users: any;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.http.get('http://jsonplaceholder.typicode.com/todos').subscribe(users => {
      this.users = users;
    });
  }
}
