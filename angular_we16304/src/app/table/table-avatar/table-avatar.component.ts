import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-avatar',
  templateUrl: './table-avatar.component.html',
  styleUrls: ['./table-avatar.component.css']
})
export class TableAvatarComponent implements OnInit {
  @Input() src:string;
  @Input() age: number;
  constructor() {
    this.src = '';
    this.age = 0;
  }

  ngOnInit(): void {
  }

}
