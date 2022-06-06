import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() inputValues: {
    id: number,
    name: string,
    age: number,
    email: string,
    sdt: string,
    avatar: string,
  };
  //dinh nghia su kien de ban du lieu nguoc lai
  @Output() handleSubmit: EventEmitter<any>;
  constructor() {
    //khai bao gia tri default
    this.handleSubmit = new EventEmitter();
    this.inputValues = {
      id: 0,
      name: '',
      age: 0,
      email: '',
      sdt: '',
      avatar: '',
    }
   }

  ngOnInit(): void {
  }
  

  onSubmit(userForm: NgForm) {
    //Gui du lieu di
    this.handleSubmit.emit(userForm.value);
    userForm.resetForm({
      id: 0,
      name: '',
      age: 0,
      email: '',
      sdt: '',
      avatar: '',
    });
  }
}
