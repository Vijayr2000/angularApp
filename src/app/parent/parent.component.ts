import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
userDetails={userId:1,userName:"vicky"}
  constructor() { }

  ngOnInit(): void {
  }

}
