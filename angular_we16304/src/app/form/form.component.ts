import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  };
  inputValues = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    sdt: '',
    avatar: '',
  }
  users = [
    {
      id:1,
      name: 'hieult08',
      age: 30,
      email: 'hieult@fe.edu.vn',
      sdt: '0931910789',
      avatar: 'https://dongphuchaianh.com/wp-content/uploads/2022/01/ao-dai-trang-co-cao-lop10.jpg',
    },
    {
      id:15,
      name: 'longht68',
      age: 25,
      email: 'longht@fe.edu.vn',
      sdt: '0931910789',
      avatar: 'https://dongphuchaianh.com/wp-content/uploads/2022/01/ao-dai-trang-co-cao-lop10.jpg',
    },
    {
      id:10,
      name: 'longht74',
      age: 26,
      email: 'longht09@fe.edu.vn',
      sdt: '0931910789',
      avatar: 'https://dongphuchaianh.com/wp-content/uploads/2022/01/ao-dai-trang-co-cao-lop10.jpg',
    },
  ]; 
 
  onSubmit(userForm: NgForm) { //nhận toàn bộ  form
   //tìm ra id lón nhất
    const userIds = this.users
      .map(user => user.id)
      .sort((a, b) => a -b);
    console.log(userIds);
    const newId = userIds[userIds.length -1];

    if (this.inputValues.id == 0 ) {
      this.users.push( {
        ...userForm.value,
        id: newId + 1,
      });
    }else {
      //chỉnh sửa
      const index = this.users.findIndex((user) => user.id === this.inputValues.id);
      if (index > -1) {
        this.users[index] = {
          ...userForm.value,
          id:this.inputValues.id
        }
      }
    }
    
    //cập nhật dữ liệu
    userForm.resetForm({
      id: 0,
      name: '',
      age: 0,
      email: '',
      sdt: '',
      avatar: '',
    });
  }
  onDelete(userId: number) {
    this.users = this.users.filter((user) => user.id != userId );
    console.log();
    
  }
  onEdit(userId: number) {
    //tìm user có id là userId truyền vào
    const editUser = this.users.find((user) => user.id === userId);
    if(editUser) {
      this.inputValues = ({...editUser});
    }
  }
}

