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
      name: 'Dao Van Anh',
      age: 30,
      gender: 1,
      avatar: 'https://pbs.twimg.com/media/E0QTyMGXEAIb8Pv?format=jpg&name=large',
      status: 0,
    },
    {
      id: 3,
      name: 'Kana momonogi',
      age: 26,
      gender: 0,
      avatar: 'https://pbs.twimg.com/media/E0QTyMGXEAIb8Pv?format=jpg&name=large',
      status: 1,
    },
    {
      id: 6,
      name: 'Camila Cabello',
      age: 32,
      gender: 0,
      avatar: 'https://pbs.twimg.com/media/E0QTyMGXEAIb8Pv?format=jpg&name=large',
      status: 1,
    },
  ];
  studentName = 'Kana momonogi';
  studentId = 'PH26100896';

  schoolName = '';
  clickH1() {
    console.log('Da clickH1');
    this.schoolName = 'Poly';
    
  }

 
  showStatus = true
  changeTableStatus() {
    this.showStatus = !this.showStatus;
  }

  inputValue = '';
  changeInput(event: any) {
    this.inputValue= event.target.value;
    
  }

  inputValues = {
    name: '',
    age: '',
    avatar: '',
    gender: '0',
    status: '0'

  }
  onInput(event:any, key: 'name' | 'age' | 'avatar' | 'gender' | 'status' ) {
    this.inputValues[key]= event.target.value;
  }
  onSubmit() {
    //Them du lieu 
    this.teachers.push ({
      ...this.inputValues,
      age: +this.inputValues.age, //dua age tu chuoi ve so
      //bo sung thuoc tinh con thieu
      gender: +this.inputValues.gender,
      
      status: +this.inputValues.status,
      id: this.teachers.length +1,
    });
    //Cap nhat lai gia tri cho input o form: [value]="this.inputValues.name"
    this.inputValues = {
      name: '',
      age: '',
      avatar: '',
      gender: '0',
      status: '0',
    }
  }
}
