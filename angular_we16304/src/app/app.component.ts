import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_we16304 Pinhub';
  name = 'Momo Sakura'
  age = '26'

  students = [
    {
      id: 'PH111',
      name: 'Kana',
      status: 1,
    },
    {
      id: 'PH222',
      name: 'Yua',
      status: 0,
    }
  ];
  teachers = [
    {
      id: 1,
      name: 'Van A',
      age: 30,
      gender: 1,
      avatar: 'https://pbs.twimg.com/media/E0QTyMGXEAIb8Pv?format=jpg&name=large',
      status: 0,
    },
    {
      id: 3,
      name: 'Kana',
      age: 26,
      gender: 0,
      avatar: 'https://pbs.twimg.com/media/E0QTyMGXEAIb8Pv?format=jpg&name=large',
      status: 1,
    },
    {
      id: 6,
      name: 'Camila',
      age: 32,
      gender: 1,
      avatar: 'https://pbs.twimg.com/media/E0QTyMGXEAIb8Pv?format=jpg&name=large',
      status: 1,
    },
  ];
  studentName = 'Kana momonogi';
  studentId = 'PH26100896';
}
