import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  };
  formValues = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    sdt: '',
    avatar: '',
  };
  users = [
    {
      id: 1,
      name: 'hieult08',
      age: 30,
      email: 'hieult@fe.edu.vn',
      sdt: '0931910789',
      avatar: 'https://dongphuchaianh.com/wp-content/uploads/2022/01/ao-dai-trang-co-cao-lop10.jpg',
    },
    {
      id: 15,
      name: 'longht68',
      age: 25,
      email: 'longht@fe.edu.vn',
      sdt: '0931910789',
      avatar: 'https://image-us.eva.vn/upload/4-2020/images/2020-10-13/img-8419-1602591836-301-width600height744.jpg',
    },
    {
      id: 10,
      name: 'longht74',
      age: 26,
      email: 'longht09@fe.edu.vn',
      sdt: '0931910789',
      avatar: 'https://icdn.dantri.com.vn/thumb_w/640/2020/08/07/nu-sinh-xu-thanh-dep-diu-dang-trong-ta-ao-dai-trangdocx-1596803280104.jpeg',
    },
  ];

  onParentSubmit(formData: any) {
    //tìm ra id lón nhất
    const userIds = this.users
      .map(user => user.id)
      .sort((a, b) => a - b);
    console.log(userIds);
    const newId = userIds[userIds.length - 1];

    if (this.formValues.id == 0) {
      this.users.push({
        ...formData,
        id: newId + 1,
      });
    } else {
      //chỉnh sửa
      const index = this.users.findIndex((user) => user.id === this.formValues.id);
      if (index > -1) {
        this.users[index] = {
          ...formData,
          id: this.formValues.id
        }
      }
    }
  }

  onParentDelete(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
  }

  onParentEdit(userId:number) {
    //tim user can sua
    const editUser = this.users.find(user => user.id === userId);
    if (editUser) {
      return this.formValues = {...editUser};
    }
    return alert ('Khong tim thay user!');
  }
}
